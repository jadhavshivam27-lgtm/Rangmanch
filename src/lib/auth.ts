"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getSupabaseClient } from "@/lib/supabase";
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
      name: "Shivam Jadhav",
      avatar: "/photos/real_03.jpg",
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
      avatar: "/photos/real_08.jpg",
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
  signup: (data: { name: string; email: string; password: string; role: UserRole }) => Promise<boolean>;
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

        // 1. Check instant demo accounts first for seamless studio demos
        const account = DEMO_ACCOUNTS.find(
          (a) =>
            a.email.toLowerCase() === email.toLowerCase() &&
            a.password === password
        );

        if (account) {
          fetch("/api/auth/sync-profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(account.user),
          }).catch(() => {});
          set({ user: account.user, isLoading: false, error: null });
          return true;
        }

        // 2. Authenticate against real Supabase Auth
        const supabase = getSupabaseClient();
        if (supabase) {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: email.trim().toLowerCase(),
            password,
          });
          if (!error && data.user) {
            const meta = data.user.user_metadata || {};
            const supaUser: User = {
              id: data.user.id,
              email: data.user.email || email,
              role: (meta.role as UserRole) || "talent",
              name: meta.name || email.split("@")[0],
              verified: Boolean(data.user.email_confirmed_at),
              createdAt: data.user.created_at,
            };
            fetch("/api/auth/sync-profile", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(supaUser),
            }).catch(() => {});
            set({ user: supaUser, isLoading: false, error: null });
            return true;
          }
          set({
            isLoading: false,
            error:
              error?.message ||
              "Invalid email or password. You can also use any demo credential listed below.",
          });
          return false;
        }

        set({
          isLoading: false,
          error: "Invalid email or password. You can use any demo credential listed below.",
        });
        return false;
      },

      signup: async ({ name, email, password, role }) => {
        set({ isLoading: true, error: null });
        const cleanEmail = email.trim().toLowerCase();
        const cleanName = name.trim();

        const supabase = getSupabaseClient();
        if (supabase) {
          const { data, error } = await supabase.auth.signUp({
            email: cleanEmail,
            password,
            options: {
              data: { name: cleanName, role },
            },
          });

          if (!error && data.user) {
            const supaUser: User = {
              id: data.user.id,
              email: cleanEmail,
              role,
              name: cleanName,
              verified: Boolean(data.user.email_confirmed_at),
              createdAt: data.user.created_at || new Date().toISOString(),
            };
            fetch("/api/auth/sync-profile", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(supaUser),
            }).catch(() => {});
            set({ user: supaUser, isLoading: false, error: null });
            return true;
          }
          if (error) {
            set({ isLoading: false, error: error.message });
            return false;
          }
        }

        const newUser: User = {
          id: `user-${Date.now().toString().slice(-6)}`,
          email: cleanEmail,
          role,
          name: cleanName,
          verified: false,
          createdAt: new Date().toISOString(),
        };

        DEMO_ACCOUNTS.push({
          email: newUser.email,
          password,
          description: `${role} Account — ${name}`,
          user: newUser,
        });

        set({ user: newUser, isLoading: false, error: null });
        return true;
      },

      logout: () => {
        const supabase = getSupabaseClient();
        if (supabase) {
          supabase.auth.signOut().catch(() => {});
        }
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
      return "/dashboard/talent";
    case "casting_director":
    case "org_admin":
      return "/dashboard/talent"; // fallback until casting dashboard page
    case "platform_admin":
      return "/dashboard/talent";
    case "guardian":
      return "/verification";
    default:
      return "/";
  }
}
