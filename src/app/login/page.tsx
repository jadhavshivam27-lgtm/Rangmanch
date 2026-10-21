"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuthStore, DEMO_ACCOUNTS, getDashboardRoute } from "@/lib/auth";
import { Lock, Mail, Eye, EyeOff, ArrowRight, ShieldCheck, Zap, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error, clearError } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    clearError();

    if (!email.trim() || !password) {
      setFormError("Please fill in both your email address and password.");
      return;
    }

    const success = await login(email, password);
    if (success) {
      const user = useAuthStore.getState().user;
      if (user) {
        router.push(getDashboardRoute(user.role));
      } else {
        router.push("/");
      }
    }
  };

  const handleSelectDemo = (demoEmail: string, demoPass: string) => {
    setEmail(demoEmail);
    setPassword(demoPass);
    setFormError("");
    clearError();
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--charcoal-900)] text-[var(--ivory)] py-12 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-md space-y-8 animate-fadeIn">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold-500)]/10 border border-[var(--gold-500)]/20 text-xs text-[var(--gold-300)] font-medium mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Secure Artist &amp; Casting Portal</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-[var(--ivory)]">
              Welcome Back
            </h1>
            <p className="text-sm text-[var(--text-secondary)]">
              Sign in to manage your auditions, casting calls, and digital comp card.
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
              {/* Email Field */}
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
                    placeholder="e.g. priya@demo.rangmanch.in"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-sm text-[var(--ivory)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--gold-500)] transition-colors"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-[var(--gold-300)] uppercase tracking-wider">
                    Password
                  </label>
                  <span className="text-xs text-[var(--text-muted)]">
                    demo: <strong className="text-[var(--gold-300)] font-mono">demo1234</strong>
                  </span>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary text-sm py-3.5 font-bold flex items-center justify-center gap-2 shadow-lg shadow-[var(--gold-500)]/20 cursor-pointer"
              >
                {isLoading ? (
                  <span>Signing In...</span>
                ) : (
                  <>
                    <span>Sign In to Rangmanch</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Demo Logins Pill */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <div className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[var(--gold-400)]" />
                <span>Instant 1-Click Demo Accounts:</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {DEMO_ACCOUNTS.map((acc) => (
                  <button
                    key={acc.email}
                    type="button"
                    onClick={() => handleSelectDemo(acc.email, acc.password)}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-left text-xs transition-colors"
                  >
                    <div className="font-semibold text-[var(--ivory)] truncate">{acc.user.name}</div>
                    <div className="text-[10px] text-[var(--gold-400)] capitalize font-mono">
                      {acc.user.role.replace("_", " ")}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="text-center text-xs text-[var(--text-muted)]">
            <span>Don&apos;t have an account yet? </span>
            <Link href="/signup" className="text-[var(--gold-400)] font-bold hover:underline">
              Join Free as Talent or Casting Director
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
