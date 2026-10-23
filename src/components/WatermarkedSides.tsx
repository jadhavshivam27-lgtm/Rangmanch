"use client";

import { useState } from "react";
import { Shield, Lock, Download, AlertTriangle, X, CheckCircle, Eye, Sparkles, FileText, ArrowRight } from "lucide-react";
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

  const performerName = user?.name || "VERIFIED PERFORMER";
  const watermarkText = `${performerName.toUpperCase()} • RANGMANCH CONFIDENTIAL SIDES • DO NOT DISTRIBUTE`;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          borderRadius: "24px",
          backgroundColor: "#0d0d14",
          border: "1px solid rgba(212,175,97,0.35)",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(212,175,97,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Gold Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #d4af61 25%, #f4e2b8 50%, #d4af61 75%, transparent)",
          }}
        />

        {/* Modal Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 32px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "#09090e",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "10px",
                fontFamily: "monospace",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#d4af61",
                fontWeight: 700,
                marginBottom: "4px",
              }}
            >
              <span>✦ CONFIDENTIAL PRODUCTION MATERIAL</span>
              <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
              <span style={{ color: "#34d399" }}>SHA-256 DRM</span>
            </div>
            <h3
              className="font-cinema"
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#ffffff",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              {projectTitle} — <span style={{ color: "#d4af61" }}>{roleName}</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: "8px",
              borderRadius: "10px",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#8a8a9a",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.borderColor = "rgba(212,175,97,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#8a8a9a";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* NDA Guard if not agreed */}
        {!hasAgreedNDA ? (
          <div
            style={{
              padding: "48px 36px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#0d0d14",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "20px",
                backgroundColor: "rgba(212,175,97,0.12)",
                border: "1px solid rgba(212,175,97,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4af61",
                marginBottom: "20px",
                boxShadow: "0 0 30px rgba(212,175,97,0.2)",
              }}
            >
              <Lock size={28} />
            </div>

            <h4
              className="font-cinema"
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#ffffff",
                margin: "0 0 10px 0",
              }}
            >
              Non-Disclosure &amp; DRM Agreement
            </h4>

            <p
              style={{
                fontSize: "13px",
                color: "#9a9aa8",
                lineHeight: 1.6,
                maxWidth: "520px",
                margin: "0 0 24px 0",
              }}
            >
              These character sides and scene directions are proprietary production intellectual property protected under the{" "}
              <strong style={{ color: "#ffffff" }}>Indian Copyright Act 1957</strong> and CINTAA anti-leak protocols.
            </p>

            {/* Terms Summary Card */}
            <div
              style={{
                width: "100%",
                maxWidth: "520px",
                padding: "16px 20px",
                borderRadius: "14px",
                backgroundColor: "#07070b",
                border: "1px solid rgba(255,255,255,0.08)",
                textAlign: "left",
                fontSize: "12px",
                color: "#c0c0d0",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "28px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <CheckCircle size={15} color="#34d399" className="shrink-0" />
                <span>
                  Dynamic invisible SHA-256 forensic watermark keyed to{" "}
                  <strong style={{ color: "#d4af61" }}>{performerName}</strong>.
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <CheckCircle size={15} color="#34d399" className="shrink-0" />
                <span>Screenshots &amp; print exports are logged with IP &amp; timestamp audit trail.</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <CheckCircle size={15} color="#34d399" className="shrink-0" />
                <span>Zero third-party sharing permitted without written director authorization.</span>
              </div>
            </div>

            <button
              onClick={() => setHasAgreedNDA(true)}
              className="btn-cinema-gold"
              style={{
                padding: "14px 36px",
                fontSize: "13px",
                letterSpacing: "0.1em",
                borderRadius: "14px",
              }}
            >
              <span>ACCEPT &amp; DECRYPT CHARACTER SIDES</span>
              <ArrowRight size={15} />
            </button>
          </div>
        ) : (
          <>
            {/* Watermark Security Notice */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 32px",
                backgroundColor: "#07070b",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                fontSize: "11px",
                fontFamily: "monospace",
                color: "#8a8a9a",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "8px", color: "#ffffff" }}>
                <Eye size={14} color="#d4af61" />
                <span>Licensed to: <strong style={{ color: "#d4af61" }}>{performerName}</strong></span>
              </span>
              <span
                style={{
                  padding: "2px 8px",
                  borderRadius: "6px",
                  backgroundColor: "rgba(52,211,153,0.12)",
                  color: "#34d399",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                }}
              >
                ● SHA-256 EMBEDDED
              </span>
            </div>

            {/* Watermarked Screenplay Viewer */}
            <div
              style={{
                position: "relative",
                maxHeight: "520px",
                overflowY: "auto",
                padding: "36px 40px",
                backgroundColor: "#050508",
                userSelect: "none",
              }}
            >
              {/* Dynamic Watermark Pattern */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  overflow: "hidden",
                  opacity: 0.05,
                  transform: "rotate(-25deg)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  fontWeight: 800,
                  color: "#ffffff",
                  zIndex: 1,
                }}
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} style={{ whiteSpace: "nowrap", letterSpacing: "0.25em" }}>
                    {watermarkText} • {watermarkText}
                  </div>
                ))}
              </div>

              {/* Scene Heading */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  textAlign: "center",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  paddingBottom: "20px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "#d4af61",
                  }}
                >
                  SCENE 14 — INTERIOR. POLICE HEADQUARTERS — NIGHT
                </div>
                <div
                  className="font-cinema"
                  style={{
                    fontSize: "13px",
                    color: "#7e7e8e",
                    fontStyle: "italic",
                    marginTop: "6px",
                  }}
                >
                  (Rain lashes against the tinted glass. An interrogator measures their breath in silence.)
                </div>
              </div>

              {/* Screenplay Dialogue Body */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  maxWidth: "600px",
                  margin: "0 auto",
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: "#d8d8e0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                {scriptLines && scriptLines.length > 0 ? (
                  scriptLines.map((line, idx) => (
                    <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div
                        style={{
                          fontWeight: 700,
                          color: "#ffffff",
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          fontSize: "12px",
                        }}
                      >
                        {line.speaker}
                      </div>
                      {line.direction && (
                        <div
                          style={{
                            color: "#8a8a9a",
                            fontStyle: "italic",
                            paddingLeft: "20px",
                            fontFamily: "Georgia, serif",
                            fontSize: "12px",
                          }}
                        >
                          ({line.direction})
                        </div>
                      )}
                      <div style={{ paddingLeft: "20px", color: "#f0f0f5" }}>{line.dialogue}</div>
                    </div>
                  ))
                ) : (
                  <>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div
                        style={{
                          fontWeight: 700,
                          color: "#d4af61",
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          fontSize: "12px",
                        }}
                      >
                        {roleName.toUpperCase()}
                      </div>
                      <div
                        style={{
                          color: "#8a8a9a",
                          fontStyle: "italic",
                          paddingLeft: "20px",
                          fontFamily: "Georgia, serif",
                          fontSize: "12px",
                        }}
                      >
                        (stepping into the circle of lamplight, voice quiet, measured)
                      </div>
                      <div style={{ paddingLeft: "20px", color: "#f0f0f5" }}>
                        &ldquo;Do not lecture me on institutional protocol, Commissioner. While orders are being drafted in air-conditioned chambers, an entire family is waiting in the dark. If you intend to suspend me, do it before midnight. Otherwise, step out of my way.&rdquo;
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div
                        style={{
                          fontWeight: 700,
                          color: "#9a9aa8",
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          fontSize: "12px",
                        }}
                      >
                        COMMISSIONER
                      </div>
                      <div
                        style={{
                          color: "#8a8a9a",
                          fontStyle: "italic",
                          paddingLeft: "20px",
                          fontFamily: "Georgia, serif",
                          fontSize: "12px",
                        }}
                      >
                        (removing glasses, deliberate theatrical pause)
                      </div>
                      <div style={{ paddingLeft: "20px", color: "#a0a0b0" }}>
                        &ldquo;Courage will not insulate you from a judicial tribunal, Inspector. You cross that threshold tonight, and you stand without the department.&rdquo;
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div
                        style={{
                          fontWeight: 700,
                          color: "#d4af61",
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          fontSize: "12px",
                        }}
                      >
                        {roleName.toUpperCase()}
                      </div>
                      <div style={{ paddingLeft: "20px", color: "#f0f0f5" }}>
                        &ldquo;I have always walked alone in this city. Tonight will be no different.&rdquo;
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 32px",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "#09090e",
                fontSize: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Shield size={14} color="#d4af61" />
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    color: "#8a8a9a",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  CINTAA CHARTER ANTI-LEAK DRM
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <button
                  onClick={handleDownload}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 18px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: downloadSuccess ? "#34d399" : "#ffffff",
                    fontSize: "11px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212,175,97,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                >
                  {downloadSuccess ? (
                    <>
                      <CheckCircle size={14} color="#34d399" />
                      <span>PDF WATERMARKED</span>
                    </>
                  ) : (
                    <>
                      <Download size={14} />
                      <span>DOWNLOAD SIDES</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onClose}
                  className="btn-cinema-gold"
                  style={{
                    padding: "10px 22px",
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    borderRadius: "10px",
                    height: "38px",
                  }}
                >
                  CLOSE PREVIEW
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
