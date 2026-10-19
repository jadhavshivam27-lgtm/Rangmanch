"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User, UserRole } from "@/lib/types";

// Demo credentials for testing each role
export const DEMO_ACCOUNTS: Array<{
  email: string;
  password: string;
  user: User;
  description: string;
}> = [
  {
    email: "priya@demo.rangmanch.in",
    password: "demo1234",
    description: "Talent Account — Priya Sharma",
    user: {
      id: "user-t1",
      email: "priya@demo.rangmanch.in",
      role: "talent",
      name: "Priya Sharma",
      avatar: "/talent1.jpg",
      verified: true,
      createdAt: "2024-01-10T00:00:00Z",
    },
  },
  {
    email: "vikram@demo.rangmanch.in",
    password: "demo1234",
    description: "Casting Director — Vikram Anand",
    user: {
      id: "user-cd1",
      email: "vikram@demo.rangmanch.in",
      role: "casting_director",
      name: "Vikram Anand",
      avatar: "/talent2.jpg",
      verified: true,
      createdAt: "2023-01-15T00:00:00Z",
    },
  },
  {
    email: "admin@demo.rangmanch.in",
    password: "demo1234",
    description: "Platform Administrator",
    user: {
      id: "user-admin1",
      email: "admin@demo.rangmanch.in",
      role: "platform_admin",
      name: "Admin User",
      verified: true,
      createdAt: "2023-01-01T00:00:00Z",
    },
  },
  {
    email: "guardian@demo.rangmanch.in",
    password: "demo1234",
    description: "Guardian Account",
    user: {
      id: "user-g1",
      email: "guardian@demo.rangmanch.in",
      role: "guardian",
      name: "Meera Kapoor",
      verified: true,
      createdAt: "2024-03-15T00:00:00Z",
    },
  },
];

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        const account = DEMO_ACCOUNTS.find(
          (a) =>
            a.email.toLowerCase() === email.toLowerCase() &&
            a.password === password
        );

        if (!account) {
          set({
            isLoading: false,
            error: "Invalid email or password. Use the demo credentials shown below.",
          });
          return false;
        }

        set({ user: account.user, isLoading: false, error: null });
        return true;
      },

      logout: () => {
        set({ user: null, error: null });
      },

      updateUser: (updates) => {
        const current = get().user;
        if (current) {
          set({ user: { ...current, ...updates } });
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: "rangmanch-auth",
      partialize: (state) => ({ user: state.user }),
    }
  )
);

// Helper hooks
export function useUser() {
  return useAuthStore((s) => s.user);
}

export function useRole(): UserRole | null {
  return useAuthStore((s) => s.user?.role ?? null);
}

export function useIsAuthenticated(): boolean {
  return useAuthStore((s) => s.user !== null);
}

export function getDashboardRoute(role: UserRole): string {
  switch (role) {
    case "talent":
      return "/talent/dashboard";
    case "casting_director":
    case "org_admin":
      return "/casting/dashboard";
    case "platform_admin":
      return "/admin/dashboard";
    case "guardian":
      return "/guardian/dashboard";
    default:
      return "/";
  }
}
