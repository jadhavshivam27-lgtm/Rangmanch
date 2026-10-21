"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useAuthStore, DEMO_ACCOUNTS, getDashboardRoute } from "@/lib/auth";
import { Lock, Mail, Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";

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
      setFormError("Please provide both your registered email address and password.");
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
      <main className="min-h-screen bg-[#0a0a0c] text-[#f8f8f6] py-20 px-6 sm:px-10 flex items-center justify-center">
        <div className="w-full max-w-md space-y-10">
          
          {/* Editorial Header */}
          <div className="text-center space-y-3">
            <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#c5a059]">
              ✦ ARTIST &amp; STUDIO ACCESS
            </p>
            <h1 className="font-editorial text-4xl sm:text-5xl font-light text-white tracking-tight">
              Sign In
            </h1>
            <p className="text-xs text-neutral-400 font-light">
              Enter your credentials to access your audition portfolio and submissions.
            </p>
          </div>

          {/* Form Container */}
          <div className="p-8 sm:p-10 border border-white/[0.1] bg-white/[0.015]">
            {(formError || error) && (
              <div className="mb-6 p-4 border border-rose-500/30 bg-rose-500/5 text-xs text-rose-300 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                <span>{formError || error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 bg-transparent border border-white/15 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                    Password
                  </label>
                  <span className="text-[10px] font-mono text-neutral-500">
                    Demo: <span className="text-[#c5a059]">demo1234</span>
                  </span>
                </div>
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-editorial-solid py-3.5 justify-center text-xs tracking-widest uppercase"
              >
                {isLoading ? "AUTHENTICATING..." : "SIGN IN"}
              </button>
            </form>

            {/* Quick Demo Access */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 text-center">
                Reviewer 1-Click Access
              </p>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                {DEMO_ACCOUNTS.slice(0, 2).map((acc) => (
                  <button
                    key={acc.email}
                    type="button"
                    onClick={() => handleSelectDemo(acc.email, acc.password)}
                    className="p-2 border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white transition-colors text-left"
                  >
                    <div className="text-white truncate font-sans font-medium">{acc.user.name}</div>
                    <div className="text-neutral-500 truncate capitalize">{acc.user.role.replace("_", " ")}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Switch to Signup */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] text-center text-xs text-neutral-400">
              <span>Do not have an account? </span>
              <Link href="/signup" className="text-white hover:underline uppercase font-mono tracking-wider text-[11px] ml-1">
                Register Here
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
