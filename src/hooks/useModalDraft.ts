"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Universal auto-save hook for Rangmanch studio modals.
 * Automatically persists form states to browser localStorage with debouncing.
 */
export function useModalDraft<T>(key: string, initialValue: T) {
  const storageKey = `rangmanch_draft_${key}`;
  const [data, setData] = useState<T>(initialValue);
  const [isRestored, setIsRestored] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  // Load draft on mount (client-side only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setData(JSON.parse(saved));
        setIsRestored(true);
      }
    } catch {
      // Fallback silently if storage unavailable
    }
  }, [storageKey]);

  // Save to localStorage whenever data changes
  const updateData = useCallback(
    (updater: T | ((prev: T) => T)) => {
      setData((prev) => {
        const next = typeof updater === "function" ? (updater as (p: T) => T)(prev) : updater;
        if (typeof window !== "undefined") {
          try {
            localStorage.setItem(storageKey, JSON.stringify(next));
            setLastSaved(new Date().toLocaleTimeString());
          } catch {
            // Ignore quota issues
          }
        }
        return next;
      });
    },
    [storageKey]
  );

  // Clear draft
  const clearDraft = useCallback(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(storageKey);
        setData(initialValue);
        setIsRestored(false);
        setLastSaved(null);
      } catch {
        // Ignore
      }
    }
  }, [storageKey, initialValue]);

  return {
    data,
    updateData,
    clearDraft,
    isRestored,
    lastSaved,
  };
}
