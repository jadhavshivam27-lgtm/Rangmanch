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

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 600));

        const account = DEMO_ACCOUNTS.find(
          (a) =>
            a.email.toLowerCase() === email.toLowerCase() &&
            a.password === password
        );

        if (!account) {
          // If not in pre-defined demo accounts, check if a newly registered user matches
          set({
            isLoading: false,
            error: "Invalid email or password. You can use any demo credential listed below.",
          });
          return false;
        }

        set({ user: account.user, isLoading: false, error: null });
        return true;
      },

      signup: async ({ name, email, password, role }) => {
        set({ isLoading: true, error: null });
        await new Promise((resolve) => setTimeout(resolve, 700));

        const newUser: User = {
          id: `user-${Date.now().toString().slice(-6)}`,
          email: email.trim().toLowerCase(),
          role,
          name: name.trim(),
          verified: false,
          createdAt: new Date().toISOString(),
        };

        // Add to demo accounts for session
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
