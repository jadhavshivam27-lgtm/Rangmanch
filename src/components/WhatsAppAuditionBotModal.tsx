"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  Smartphone,
  Send,
  MessageSquare,
  FileText,
  Video,
  Download,
  Sparkles,
} from "lucide-react";

interface WhatsAppAuditionBotModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function WhatsAppAuditionBotModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: WhatsAppAuditionBotModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Namaste! Welcome to Rangmanch Casting Bot for Antim Prahar.", time: "10:14 AM" },
    { sender: "user", text: "Hi, I want to submit an audition for Neha Sinha (Female Lead).", time: "10:15 AM" },
    { sender: "bot", text: "Wonderful! We detected your CINTAA verified actor profile. Here is your encrypted Scene 4 audition sides PDF.", time: "10:15 AM" },
  ]);

  const [inputMsg, setInputMsg] = useState("");

  if (!isOpen) return null;

  const handleSendMessage = () => {
    if (!inputMsg.trim()) return;
    const newMsg = { sender: "user", text: inputMsg, time: "10:18 AM" };
    setMessages([...messages, newMsg]);
    setInputMsg("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Audition self-tape received! AI Framing & audio checks passed (96.4% clarity). Forwarded to Director review desk.",
          time: "10:18 AM",
        },
      ]);
    }, 600);
  };

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "760px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(34, 197, 94, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(34,197,94,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #22c55e 30%, #86efac 50%, #22c55e 70%, transparent)",
          }}
        />

        {/* Modal Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 32px 20px 32px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "#0d0d14",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, rgba(34,197,94,0.2) 0%, rgba(34,197,94,0.05) 100%)",
                border: "1px solid rgba(34,197,94,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#22c55e",
                boxShadow: "0 0 20px rgba(34,197,94,0.15)",
                flexShrink: 0,
              }}
            >
              <Smartphone size={24} />
            </div>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "10px",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "#22c55e",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M049</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>RURAL WHATSAPP GATEWAY</span>
              </div>
              <h2
                className="font-cinema"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                Omnichannel WhatsApp Audition Bot
              </h2>
              <p style={{ fontSize: "12px", color: "#8a8a9a", margin: "2px 0 0 0" }}>
                Zero-app barrier: Submit self-tapes and receive script sides directly via official WhatsApp.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a0a0b0",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* 4-Step Stepper Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "#08080d",
          }}
        >
          {[
            { num: 1, label: "Live Chat Bot" },
            { num: 2, label: "Script Dispatch" },
            { num: 3, label: "Video Ingestion" },
            { num: 4, label: "Audition Pass" },
          ].map((st) => (
            <button
              key={st.num}
              onClick={() => setActiveStep(st.num)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "14px 10px",
                border: "none",
                background: activeStep === st.num ? "rgba(34,197,94,0.08)" : "transparent",
                borderBottom: activeStep === st.num ? "2px solid #22c55e" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  backgroundColor: activeStep === st.num ? "#22c55e" : "rgba(255,255,255,0.08)",
                  color: activeStep === st.num ? "#040406" : "#8a8a9a",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {activeStep > st.num ? "✓" : st.num}
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  fontWeight: activeStep === st.num ? 700 : 500,
                  color: activeStep === st.num ? "#ffffff" : "#606070",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {st.label}
              </span>
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div style={{ padding: "28px 32px", maxHeight: "65vh", overflowY: "auto" }}>
          {/* STEP 1: LIVE CHAT BOT */}
          {activeStep === 1 && (
            <div>
              <div
                style={{
                  backgroundColor: "#070e0a",
                  border: "1px solid rgba(34,197,94,0.25)",
                  borderRadius: "16px",
                  padding: "16px",
                  marginBottom: "16px",
                  minHeight: "220px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      alignSelf: m.sender === "user" ? "flex-end" : "flex-start",
                      maxWidth: "75%",
                      padding: "10px 14px",
                      borderRadius: m.sender === "user" ? "14px 14px 2px 14px" : "14px 14px 14px 2px",
                      backgroundColor: m.sender === "user" ? "#005c4b" : "#202c33",
                      color: "#ffffff",
                      fontSize: "13px",
                      lineHeight: 1.5,
                    }}
                  >
                    <div>{m.text}</div>
                    <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.5)", textAlign: "right", marginTop: "4px" }}>
                      {m.time}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div style={{ display: "flex", gap: "8px" }}>
                <input
                  type="text"
                  value={inputMsg}
                  onChange={(e) => setInputMsg(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type a message or paste video link..."
                  style={{
                    flex: 1,
                    backgroundColor: "#0d0d16",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    color: "#ffffff",
                    fontSize: "13px",
                    outline: "none",
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  style={{
                    padding: "0 18px",
                    borderRadius: "10px",
                    backgroundColor: "#22c55e",
                    color: "#040406",
                    border: "none",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SCRIPT DISPATCH */}
          {activeStep === 2 && (
            <div>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.25)",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#22c55e", fontFamily: "monospace" }}>
                  ✦ Instant WhatsApp PDF Sides Dispatch
                </div>
                <div style={{ fontSize: "12px", color: "#a0a0b0", marginTop: "2px" }}>
                  Performers receive the scene breakdown, dialogue, and character motivation directly as a lightweight WhatsApp document with automatic mobile watermarking.
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>Scene 4 Sides (PDF 1.2 MB)</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>Delivered to Phone ✓</span>
                </div>
                <div style={{ padding: "14px", borderRadius: "10px", backgroundColor: "#0d0d16", border: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#ffffff" }}>Audio Dialect Reference Cue (Voice Note)</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#34d399" }}>Sent as WhatsApp Audio ✓</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: VIDEO INGESTION */}
          {activeStep === 3 && (
            <div>
              <div style={{ fontSize: "13px", color: "#a0a0b0", marginBottom: "16px" }}>
                WhatsApp video upload &amp; automatic transcoding pipeline:
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "20px" }}>
                <div style={{ backgroundColor: "#0d0d16", padding: "14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>COMPRESSION CODEC</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>H.265 Transcode</div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", padding: "14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>AUDIO PRESERVATION</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#34d399", marginTop: "4px" }}>Uncompressed AAC</div>
                </div>
                <div style={{ backgroundColor: "#0d0d16", padding: "14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontSize: "10px", color: "#606070", fontFamily: "monospace" }}>TIER 2/3 SYNC</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#22c55e", marginTop: "4px" }}>Low-Data Mode</div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: AUDITION PASS */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(34,197,94,0.15)",
                  border: "1px solid rgba(34,197,94,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#22c55e",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                WhatsApp Audition Pass Active
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Performers can audition by sending &ldquo;AUDITION&rdquo; to official verified number +91 98200 RANGM.
              </p>

              <button
                onClick={() => {
                  const passContent = `RANGMANCH WHATSAPP AUDITION PASS\nProject: ${defaultProject}\nOfficial WhatsApp Gateway: +91 98200 RANGM\nPerformer Verification: Auto-Linked to Rangmanch Cloud\nPass ID: #WA-AUDITION-9021`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(passContent));
                  dl.setAttribute("download", `WhatsApp_Audition_Pass_${defaultProject}.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD AUDITION PASS
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 32px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "#0d0d14",
          }}
        >
          <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#606070" }}>
            Step {activeStep} of 4 • Omnichannel Gateway
          </span>
          <div style={{ display: "flex", gap: "10px" }}>
            {activeStep > 1 && (
              <button
                onClick={() => setActiveStep(activeStep - 1)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "10px",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                BACK
              </button>
            )}
            {activeStep < 4 ? (
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className="btn-cinema-gold"
                style={{ height: "38px", padding: "0 22px", fontSize: "11px" }}
              >
                CONTINUE →
              </button>
            ) : (
              <button
                onClick={onClose}
                className="btn-cinema-gold"
                style={{ height: "38px", padding: "0 22px", fontSize: "11px" }}
              >
                CLOSE BOT ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
