"use client";

import { useState } from "react";
import { Shield, Eye, Lock, Download, AlertTriangle, X, CheckCircle } from "lucide-react";
import { useAuthStore } from "@/lib/auth";

interface ScriptSidesProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  roleName: string;
  scriptLines: Array<{ speaker: string; dialogue: string; direction?: string }>;
}

export default function WatermarkedSides({
  isOpen,
  onClose,
  projectTitle,
  roleName,
  scriptLines,
}: ScriptSidesProps) {
  const { user } = useAuthStore();
  const [hasAgreedNDA, setHasAgreedNDA] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const watermarkText = `${user?.name || "RANGMANCH VERIFIED TALENT"} • +91 98*** **421 • CONFIDENTIAL AUDITION SIDES • DO NOT SHARE`;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden"
        style={{
          background: "var(--charcoal-900)",
          borderColor: "rgba(201, 168, 76, 0.3)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(201, 168, 76, 0.15)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{
            background: "linear-gradient(90deg, rgba(20,20,23,0.95), rgba(38,38,45,0.95))",
            borderColor: "rgba(201, 168, 76, 0.2)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--gold-500)]/15 border border-[var(--gold-500)]/30 text-[var(--gold-300)]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg text-[var(--ivory)]">
                  {projectTitle}
                </span>
                <span className="badge badge-gold text-[10px]">ANTI-LEAK DRM</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Character Monologue Sides: <strong className="text-[var(--gold-300)]">{roleName}</strong>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* NDA Guard if not agreed */}
        {!hasAgreedNDA ? (
          <div className="p-8 text-center flex flex-col items-center justify-center space-y-4 my-auto">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[var(--coral-500)]/15 border border-[var(--coral-500)]/30 text-[var(--coral-400)]">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div className="max-w-md">
              <h3 className="font-display font-bold text-xl text-[var(--ivory)] mb-2">
                Confidential Audition Sides Agreement
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                These script sides are protected by Indian Copyright Law. Your identity, IP address,
                and timestamp are cryptographically embedded across these pages. Unauthorized recording,
                screenshotting, or sharing on WhatsApp/Social Media will lead to immediate legal action
                and blacklisting under CINTAA & Guild guidelines.
              </p>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-left text-xs space-y-1 mb-5">
                <div className="flex items-center gap-2 text-[var(--gold-300)] font-medium">
                  <Shield className="w-4 h-4" /> Steganographic Security Active:
                </div>
                <div className="text-[var(--text-muted)] pl-6">
                  Watermark: {user?.name || "Verified Performer"} (ID: RM-8849-IN)
                </div>
              </div>
            </div>
            <button
              onClick={() => setHasAgreedNDA(true)}
              className="btn-primary px-8 py-3 text-sm font-semibold shadow-lg shadow-[var(--gold-500)]/20"
            >
              I Accept & Decrypt Script Sides
            </button>
          </div>
        ) : (
          <>
            {/* Watermarked Script Viewer */}
            <div className="relative flex-1 overflow-y-auto p-8 space-y-6 select-none bg-[var(--charcoal-950)]">
              {/* Dynamic Overlay Watermark Patterns */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.07] rotate-[-25deg] flex flex-col justify-around text-xs font-mono font-bold text-[var(--gold-300)]">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="whitespace-nowrap tracking-widest uppercase">
                    {watermarkText} • {watermarkText}
                  </div>
                ))}
              </div>

              {/* Notice Banner */}
              <div className="relative z-10 flex items-center justify-between p-3 rounded-xl bg-[var(--gold-500)]/10 border border-[var(--gold-500)]/25 text-xs text-[var(--gold-200)]">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[var(--gold-400)] shrink-0" />
                  <span>
                    Watermark tracking is active for <strong>{user?.name || "your account"}</strong>.
                  </span>
                </div>
                <span className="text-[11px] opacity-75 font-mono">ENCRYPTED 256-BIT</span>
              </div>

              {/* Script Scene Heading */}
              <div className="relative z-10 text-center border-b border-white/10 pb-4">
                <div className="font-mono text-xs uppercase tracking-wider text-[var(--gold-400)]">
                  SCENE 14 - INTERIOR. POLICE STATION - NIGHT
                </div>
                <div className="text-xs text-[var(--text-muted)] italic mt-1">
                  (Rain pours outside. The fluorescent tube flickers with a low hum.)
                </div>
              </div>

              {/* Script Dialogue Flow */}
              <div className="relative z-10 space-y-5 max-w-xl mx-auto font-mono text-sm leading-relaxed text-[var(--ivory)]">
                {scriptLines && scriptLines.length > 0 ? (
                  scriptLines.map((line, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="font-bold text-[var(--gold-300)] uppercase tracking-wider text-xs">
                        {line.speaker}
                      </div>
                      {line.direction && (
                        <div className="text-xs text-[var(--text-muted)] italic pl-4">
                          ({line.direction})
                        </div>
                      )}
                      <div className="pl-4 text-sm text-gray-200">{line.dialogue}</div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="space-y-1">
                      <div className="font-bold text-[var(--gold-300)] uppercase tracking-wider text-xs">
                        {roleName.toUpperCase()}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] italic pl-4">
                        (slamming the case file on the wooden desk, eyes bloodshot)
                      </div>
                      <div className="pl-4 text-sm text-gray-200">
                        &quot;Do not lecture me on protocol, Sir. Out there, while we wait for your signed orders,
                        an innocent family is counting their final hours. If the department wants to suspend me,
                        write the letter today. But until my badge is taken, I will bring them home.&quot;
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="font-bold text-[var(--text-muted)] uppercase tracking-wider text-xs">
                        COMMISSIONER SHARMA
                      </div>
                      <div className="text-xs text-[var(--text-muted)] italic pl-4">
                        (calm, taking off his glasses, measuring his words)
                      </div>
                      <div className="pl-4 text-sm text-gray-300">
                        &quot;Passion won&apos;t save you from a courtroom tribunal, Inspector. You cross that bridge
                        tonight, and you stand on your own.&quot;
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="font-bold text-[var(--gold-300)] uppercase tracking-wider text-xs">
                        {roleName.toUpperCase()}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] italic pl-4">
                        (a cold, resolute smirk forming on the lips)
                      </div>
                      <div className="pl-4 text-sm text-gray-200">
                        &quot;I have always walked alone in this city, Sir. Tonight won&apos;t be any different.&quot;
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Footer with Download */}
            <div
              className="flex items-center justify-between px-6 py-4 border-t bg-[var(--charcoal-900)]"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="text-xs text-[var(--text-muted)] flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Protected under Cine Artists Association Digital Charter</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownload}
                  className="btn-secondary text-xs flex items-center gap-2 py-2"
                >
                  {downloadSuccess ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Watermarked PDF Downloaded</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download Watermarked PDF</span>
                    </>
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="btn-primary text-xs py-2 px-5"
                >
                  Proceed to Audition Studio
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
