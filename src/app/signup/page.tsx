"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuthStore, getDashboardRoute } from "@/lib/auth";
import type { UserRole } from "@/lib/types";
import { Lock, Mail, User, Eye, EyeOff, ArrowRight, ShieldCheck, Film, Users, Shield, AlertCircle } from "lucide-react";

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
    <div className="w-full max-w-lg space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold-500)]/10 border border-[var(--gold-500)]/20 text-xs text-[var(--gold-300)] font-medium mb-1">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>India&apos;s 100% CINTAA Fair-Play Casting Platform</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-[var(--ivory)]">
          Create Your Account
        </h1>
        <p className="text-sm text-[var(--text-secondary)]">
          Join thousands of certified actors, models, and directors across Indian cinema.
        </p>
      </div>

      {/* Form Card */}
      <div
        className="p-8 rounded-3xl border shadow-2xl relative overflow-hidden"
        style={{
          background: "var(--charcoal-800)",
          borderColor: "rgba(201, 168, 76, 0.2)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
        }}
      >
        {(formError || error) && (
          <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
            <span>{formError || error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Role Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[var(--gold-300)] uppercase tracking-wider block">
              I am registering as:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("talent")}
                className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                  role === "talent"
                    ? "bg-[var(--gold-500)]/15 border-[var(--gold-500)] text-white shadow-md shadow-[var(--gold-500)]/20"
                    : "bg-black/30 border-white/10 text-[var(--text-secondary)] hover:border-white/20"
                }`}
              >
                <Film className={`w-5 h-5 shrink-0 mt-0.5 ${role === "talent" ? "text-[var(--gold-400)]" : "text-white/40"}`} />
                <div>
                  <div className="text-xs font-bold text-[var(--ivory)]">Actor / Performer</div>
                  <div className="text-[10px] text-[var(--text-muted)]">Audition for film &amp; OTT</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setRole("casting_director")}
                className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                  role === "casting_director"
                    ? "bg-[var(--purple-500)]/15 border-[var(--purple-500)] text-white shadow-md shadow-[var(--purple-500)]/20"
                    : "bg-black/30 border-white/10 text-[var(--text-secondary)] hover:border-white/20"
                }`}
              >
                <Users className={`w-5 h-5 shrink-0 mt-0.5 ${role === "casting_director" ? "text-[var(--purple-400)]" : "text-white/40"}`} />
                <div>
                  <div className="text-xs font-bold text-[var(--ivory)]">Casting Director</div>
                  <div className="text-[10px] text-[var(--text-muted)]">Post calls &amp; review tapes</div>
                </div>
              </button>
            </div>
          </div>

          {/* Full Name Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[var(--gold-300)] uppercase tracking-wider block">
              Full Legal or Stage Name
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priya Sharma"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-sm text-[var(--ivory)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold-500)] transition-colors"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[var(--gold-300)] uppercase tracking-wider block">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. priya.actor@gmail.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-sm text-[var(--ivory)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold-500)] transition-colors"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[var(--gold-300)] uppercase tracking-wider block">
              Password (min. 6 characters)
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a secure password"
                className="w-full pl-10 pr-11 py-3 rounded-xl bg-black/40 border border-white/10 text-sm text-[var(--ivory)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold-500)] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-white"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Terms checkbox */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="agreed-terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 accent-[var(--gold-500)] rounded cursor-pointer"
            />
            <label htmlFor="agreed-terms" className="text-xs text-[var(--text-secondary)] leading-relaxed cursor-pointer select-none">
              I agree to the <strong className="text-white">CINTAA Anti-Exploitation pledge</strong>, Zero Registration Fee guarantee, and the Indian Digital Personal Data Protection (DPDP) Act terms.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary text-sm py-3.5 font-bold flex items-center justify-center gap-2 shadow-lg shadow-[var(--gold-500)]/20 cursor-pointer"
          >
            {isLoading ? (
              <span>Creating Your Account...</span>
            ) : (
              <>
                <span>Complete Registration</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Footer Navigation */}
      <div className="text-center text-xs text-[var(--text-muted)]">
        <span>Already have an account? </span>
        <Link href="/login" className="text-[var(--gold-400)] font-bold hover:underline">
          Sign In here
        </Link>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--charcoal-900)] text-[var(--ivory)] pt-28 pb-20 flex items-center justify-center px-4 sm:px-6">
        <Suspense fallback={<div className="text-xs text-[var(--text-muted)]">Loading registration...</div>}>
          <SignupForm />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
