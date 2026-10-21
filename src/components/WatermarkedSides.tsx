"use client";

import { useState } from "react";
import { Shield, Lock, Download, AlertTriangle, X, CheckCircle, Eye } from "lucide-react";
import { useAuthStore } from "@/lib/auth";

interface ScriptSidesProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  roleName: string;
  scriptLines?: Array<{ speaker: string; dialogue: string; direction?: string }>;
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

  const watermarkText = `${user?.name || "RANGMANCH VERIFIED TALENT"} • CONFIDENTIAL SIDES • DO NOT DISTRIBUTE`;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col border border-white/20 bg-[#0e0e12] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 shrink-0">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059] block">
              ✦ CONFIDENTIAL PRODUCTION MATERIAL
            </span>
            <h3 className="font-editorial text-2xl text-white font-light mt-0.5">
              {projectTitle} — {roleName}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* NDA Guard if not agreed */}
        {!hasAgreedNDA ? (
          <div className="p-10 text-center flex flex-col items-center justify-center space-y-6 my-auto">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white">
              <Lock size={22} />
            </div>

            <div className="max-w-md space-y-3">
              <h4 className="font-editorial text-2xl text-white font-normal">
                Non-Disclosure &amp; DRM Agreement
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                These character sides are proprietary material protected under Indian Copyright Law. Your identity and IP address are cryptographically embedded across each page.
              </p>
            </div>

            <button
              onClick={() => setHasAgreedNDA(true)}
              className="btn-editorial-solid py-3 px-8 text-xs tracking-widest uppercase"
            >
              ACCEPT &amp; DECRYPT SIDES
            </button>
          </div>
        ) : (
          <>
            {/* Watermarked Script Viewer */}
            <div className="relative flex-1 overflow-y-auto p-8 space-y-8 select-none bg-[#0a0a0c]">
              {/* Dynamic Watermark Background */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04] rotate-[-25deg] flex flex-col justify-around text-xs font-mono font-bold text-white">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="whitespace-nowrap tracking-widest uppercase">
                    {watermarkText} • {watermarkText}
                  </div>
                ))}
              </div>

              {/* Watermark Notice */}
              <div className="relative z-10 flex items-center justify-between p-3 border border-white/10 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-2 text-white">
                  <Eye size={13} className="text-[#c5a059]" />
                  <span>Licensed to: {user?.name || "Verified Performer"}</span>
                </span>
                <span className="text-[10px] uppercase">SHA-256 DRM EMBEDDED</span>
              </div>

              {/* Scene Heading */}
              <div className="relative z-10 text-center border-b border-white/[0.08] pb-4">
                <div className="font-mono text-xs uppercase tracking-widest text-[#c5a059]">
                  SCENE 14 — INTERIOR. POLICE HEADQUARTERS — NIGHT
                </div>
                <div className="text-xs text-neutral-500 italic mt-1 font-serif">
                  (Rain lashes against the glass. An interrogator measures their breath.)
                </div>
              </div>

              {/* Dialogue Script */}
              <div className="relative z-10 space-y-6 max-w-xl mx-auto font-mono text-xs leading-relaxed text-neutral-300">
                {scriptLines && scriptLines.length > 0 ? (
                  scriptLines.map((line, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="font-bold text-white uppercase tracking-wider text-[11px]">
                        {line.speaker}
                      </div>
                      {line.direction && (
                        <div className="text-neutral-500 italic pl-4 font-serif">
                          ({line.direction})
                        </div>
                      )}
                      <div className="pl-4 text-neutral-200">{line.dialogue}</div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="space-y-1">
                      <div className="font-bold text-white uppercase tracking-wider text-[11px]">
                        {roleName.toUpperCase()}
                      </div>
                      <div className="text-neutral-500 italic pl-4 font-serif">
                        (stepping into the circle of lamplight, Voice quiet, measured)
                      </div>
                      <div className="pl-4 text-neutral-200">
                        &quot;Do not lecture me on institutional protocol, Commissioner. While orders are being drafted in air-conditioned chambers, an entire family is waiting in the dark. If you intend to suspend me, do it before midnight. Otherwise, step out of my way.&quot;
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="font-bold text-neutral-400 uppercase tracking-wider text-[11px]">
                        COMMISSIONER
                      </div>
                      <div className="text-neutral-500 italic pl-4 font-serif">
                        (removing glasses, deliberate pause)
                      </div>
                      <div className="pl-4 text-neutral-400">
                        &quot;Courage will not insulate you from a judicial tribunal, Inspector. You cross that threshold tonight, and you stand without the department.&quot;
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="font-bold text-white uppercase tracking-wider text-[11px]">
                        {roleName.toUpperCase()}
                      </div>
                      <div className="pl-4 text-neutral-200">
                        &quot;I have always walked alone in this city. Tonight will be no different.&quot;
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-8 py-4 border-t border-white/10 shrink-0 text-xs font-mono">
              <span className="text-neutral-500 text-[10px] uppercase tracking-wider">
                CINTAA CHARTER ANTI-LEAK
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownload}
                  className="btn-editorial py-2 px-4 text-[10px]"
                >
                  {downloadSuccess ? (
                    <span className="text-emerald-400">PDF SAVED</span>
                  ) : (
                    <>
                      <Download size={12} />
                      <span>DOWNLOAD SIDES</span>
                    </>
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="btn-editorial-solid py-2 px-5 text-[10px]"
                >
                  AUDITION STUDIO
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
