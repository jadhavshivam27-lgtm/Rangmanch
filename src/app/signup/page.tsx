"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useAuthStore, getDashboardRoute } from "@/lib/auth";
import type { UserRole } from "@/lib/types";
import { Lock, Mail, User, Eye, EyeOff, AlertCircle } from "lucide-react";

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialRole = (searchParams.get("role") as UserRole) || "talent";

  const { signup, isLoading, error, clearError } = useAuthStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>(initialRole);
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    clearError();

    if (!name.trim()) {
      setFormError("Please enter your legal or professional stage name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!password || password.length < 6) {
      setFormError("Password must be at least 6 characters long.");
      return;
    }
    if (!agreed) {
      setFormError("You must agree to the CINTAA Fair-Play and DPDP Act privacy guidelines.");
      return;
    }

    const success = await signup({ name, email, password, role });
    if (success) {
      router.push(getDashboardRoute(role));
    }
  };

  return (
    <div className="w-full max-w-lg space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#c5a059]">
          ✦ JOIN THE NETWORK
        </p>
        <h1 className="font-editorial text-4xl sm:text-5xl font-light text-white tracking-tight">
          Create Account
        </h1>
        <p className="text-xs text-neutral-400 font-light">
          Join verified actors, classical dancers, vocalists, and casting directors across India.
        </p>
      </div>

      {/* Form Card */}
      <div className="p-8 sm:p-10 border border-white/[0.1] bg-white/[0.015]">
        {(formError || error) && (
          <div className="mb-6 p-4 border border-rose-500/30 bg-rose-500/5 text-xs text-rose-300 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
            <span>{formError || error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role Selector */}
          <div className="space-y-2">
            <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block">
              Registering As
            </label>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <button
                type="button"
                onClick={() => setRole("talent")}
                className={`p-3 border text-center transition-colors uppercase tracking-wider ${
                  role === "talent"
                    ? "border-white bg-white/10 text-white font-semibold"
                    : "border-white/10 text-neutral-500 hover:border-white/30 hover:text-neutral-300"
                }`}
              >
                Actor / Performer
              </button>
              <button
                type="button"
                onClick={() => setRole("casting_director")}
                className={`p-3 border text-center transition-colors uppercase tracking-wider ${
                  role === "casting_director"
                    ? "border-white bg-white/10 text-white font-semibold"
                    : "border-white/10 text-neutral-500 hover:border-white/30 hover:text-neutral-300"
                }`}
              >
                Casting Director
              </button>
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block">
              Full Legal / Stage Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Priya Sharma"
              className="w-full px-4 py-3 bg-transparent border border-white/15 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@domain.com"
              className="w-full px-4 py-3 bg-transparent border border-white/15 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block">
              Password (Min 6 Characters)
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-transparent border border-white/15 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          {/* Terms checkbox */}
          <label className="flex items-start gap-3 cursor-pointer text-xs text-neutral-400">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 accent-[#c5a059]"
            />
            <span className="leading-relaxed">
              I agree to the <span className="text-white">CINTAA Fair-Play Standards</span> and <span className="text-white">DPDP Act 2023</span> privacy protocols.
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-editorial-solid py-3.5 justify-center text-xs tracking-widest uppercase"
          >
            {isLoading ? "CREATING PROFILE..." : "CREATE ACCOUNT"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/[0.08] text-center text-xs text-neutral-400">
          <span>Already registered? </span>
          <Link href="/login" className="text-white hover:underline uppercase font-mono tracking-wider text-[11px] ml-1">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0c] text-[#f8f8f6] py-20 px-6 sm:px-10 flex items-center justify-center">
        <Suspense fallback={<div className="text-xs font-mono text-neutral-500">LOADING...</div>}>
          <SignupForm />
        </Suspense>
      </main>
    </>
  );
}
