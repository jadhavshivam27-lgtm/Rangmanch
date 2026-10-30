"use client";

import { useState } from "react";
import {
  X,
  FileCode2,
  FileText,
  GitBranch,
  Layers,
  CheckCircle2,
  Download,
  AlertCircle,
  Clock,
  Send,
  Eye,
} from "lucide-react";

interface ScriptVersioningModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function ScriptVersioningModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: ScriptVersioningModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedDraft, setSelectedDraft] = useState("pink_revision");
  const [targetScene, setTargetScene] = useState("Scene 34B - Interrogation Climax");
  const [changeReason, setChangeReason] = useState("Director requested heightened dialogue confrontation between Vikram and Shinde");

  if (!isOpen) return null;

  const revisionColors = [
    {
      id: "white_draft",
      colorName: "White (Production Draft)",
      hex: "#ffffff",
      badgeBg: "rgba(255,255,255,0.15)",
      textColor: "#ffffff",
      date: "01 Oct 2026",
      status: "Archived",
      pages: "128 Pages",
    },
    {
      id: "blue_revision",
      colorName: "Blue (First Revision)",
      hex: "#60a5fa",
      badgeBg: "rgba(96,165,250,0.15)",
      textColor: "#93c5fd",
      date: "10 Oct 2026",
      status: "Superseded",
      pages: "18 Pages Changed",
    },
    {
      id: "pink_revision",
      colorName: "Pink (Second Revision)",
      hex: "#f472b6",
      badgeBg: "rgba(244,114,182,0.15)",
      textColor: "#fbcfe8",
      date: "24 Oct 2026",
      status: "CURRENT LOCKED SHOOTING DRAFT",
      pages: "7 Pages Changed",
    },
    {
      id: "yellow_revision",
      colorName: "Yellow (Third Revision)",
      hex: "#facc15",
      badgeBg: "rgba(250,204,21,0.15)",
      textColor: "#fef08a",
      date: "Scheduled for Nov 2026",
      status: "Queued for Post-Interval Shoot",
      pages: "Pending Director Sign-off",
    },
  ];

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(212, 175, 97, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(212, 175, 97, 0.12)",
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
                background:
                  "linear-gradient(135deg, rgba(212,175,97,0.2) 0%, rgba(212,175,97,0.05) 100%)",
                border: "1px solid rgba(212,175,97,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4af61",
              }}
            >
              <FileCode2 size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#d4af61",
                  textTransform: "uppercase",
                }}
              >
                MODULE M062 • FEATURE 62
              </div>
              <h2
                className="font-cinema"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: "2px 0 0 0",
                  letterSpacing: "0.02em",
                }}
              >
                Dynamic Script Versioning &amp; Revision Ledger
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#d4af61", fontWeight: 600 }}>{defaultProject}</span> • Industry Standard Colored Revision Pages
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              padding: "8px",
              color: "#8a8a9a",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* 4-Step Stepper Bar */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            padding: "14px 32px",
            background: "rgba(255,255,255,0.02)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {[
            { step: 1, label: "Colored Drafts" },
            { step: 2, label: "Scene Diff Engine" },
            { step: 3, label: "Cast Sides Push" },
            { step: 4, label: "Release & Watermark" },
          ].map((item) => (
            <div
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                padding: "6px 12px",
                borderRadius: "8px",
                backgroundColor:
                  activeStep === item.step
                    ? "rgba(212,175,97,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(212,175,97,0.3)"
                    : "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  backgroundColor:
                    activeStep === item.step ? "#d4af61" : "rgba(255,255,255,0.1)",
                  color: activeStep === item.step ? "#0a0a0f" : "#8a8a9a",
                }}
              >
                {item.step}
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: activeStep === item.step ? 600 : 400,
                  color: activeStep === item.step ? "#ffffff" : "#606070",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Modal Body */}
        <div style={{ padding: "28px 32px", maxHeight: "580px", overflowY: "auto" }}>
          {/* STEP 1: COLORED DRAFTS */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Industry-standard script color cycles ensuring all cast, directors, and department heads shoot with the exact same revision order.
              </div>

              {revisionColors.map((r) => (
                <div
                  key={r.id}
                  onClick={() => setSelectedDraft(r.id)}
                  style={{
                    padding: "16px 20px",
                    borderRadius: "14px",
                    backgroundColor: selectedDraft === r.id ? "rgba(212,175,97,0.08)" : "rgba(255,255,255,0.02)",
                    border: selectedDraft === r.id ? "1px solid rgba(212,175,97,0.4)" : "1px solid rgba(255,255,255,0.07)",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          backgroundColor: r.hex,
                          boxShadow: `0 0 10px ${r.hex}`,
                        }}
                      />
                      <span style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>
                        {r.colorName}
                      </span>
                    </div>
                    <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "4px", fontFamily: "monospace" }}>
                      Locked on: {r.date} • {r.pages}
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "monospace",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: r.badgeBg,
                      color: r.textColor,
                      border: `1px solid ${r.hex}33`,
                    }}
                  >
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* STEP 2: SCENE DIFF ENGINE */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(244,114,182,0.05)",
                  border: "1px solid rgba(244,114,182,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
                    Diff Tracking: Pink Revision vs Blue Draft
                  </div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "2px" }}>
                    {targetScene} • 3 Dialogue Changes • 1 New Action Beat
                  </div>
                </div>
                <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#f472b6", padding: "4px 8px", background: "rgba(244,114,182,0.15)", borderRadius: "6px" }}>
                  PINK REVISION
                </span>
              </div>

              <div
                style={{
                  padding: "18px 20px",
                  borderRadius: "14px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontFamily: "monospace",
                  fontSize: "12px",
                }}
              >
                <div style={{ color: "#ef4444", textDecoration: "line-through", opacity: 0.7 }}>
                  - VIKRAM: &ldquo;Maine sab kuch court me bata diya hai, Shinde.&rdquo;
                </div>
                <div style={{ color: "#34d399", fontWeight: 600 }}>
                  + VIKRAM: &ldquo;Court tumhari jeb me ho sakti hai mantri ji, par Mumbai Police ki vardi nahi.&rdquo;
                </div>
                <div style={{ color: "#8a8a9a", fontStyle: "italic", marginTop: "4px" }}>
                  * (Action Beat: Vikram slams the encrypted pendrive on the mahogany desk. Shinde visibly flinches.)
                </div>
              </div>

              <div>
                <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                  Director Revision Justification Note
                </label>
                <input
                  type="text"
                  value={changeReason}
                  onChange={(e) => setChangeReason(e.target.value)}
                  style={{
                    width: "100%",
                    marginTop: "6px",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontSize: "13px",
                  }}
                />
              </div>
            </div>
          )}

          {/* STEP 3: CAST SIDES PUSH */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Push updated Pink Revision dialogue sides directly to performer digital teleprompters with instant sync.
              </div>

              {[
                { actor: "Shivam Jadhav", role: "ACP Vikram Rathore", pages: "Pages 34-36 (Scene 34B)", status: "Synced to iPad" },
                { actor: "Rajeshwar Rao", role: "Minister Shinde", pages: "Pages 34-36 (Scene 34B)", status: "Delivered via WhatsApp" },
                { actor: "Tanya Deshmukh", role: "Dr. Alisha Roy", pages: "Unchanged in this revision", status: "Notified (No changes)" },
              ].map((c, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "16px 20px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>{c.actor}</div>
                    <div style={{ fontSize: "11px", color: "#d4af61" }}>{c.role} • {c.pages}</div>
                  </div>
                  <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#34d399", padding: "4px 8px", background: "rgba(52,211,153,0.1)", borderRadius: "6px" }}>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* STEP 4: RELEASE & WATERMARK */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(212,175,97,0.15)",
                  border: "1px solid rgba(212,175,97,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d4af61",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Pink Revision Draft Locked &amp; Watermarked
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Production Draft #SCR-2026-PINK. Distributed to all 42 heads of department with individualized forensic watermark stamps.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH SCRIPT REVISION DOSSIER\nProject: ${defaultProject}\nRevision Order: PINK (2nd Revision)\nLocked Date: 24 Oct 2026\nModified Scene: ${targetScene}\nReason: ${changeReason}\nWatermark: CONFIDENTIAL - LICENSED TO PRODUCTION CREW\nStatus: LOCKED SHOOTING PAGES\nTimestamp: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Script_Revision_Pink_${defaultProject.replace(/\s+/g, "_")}.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD WATERMARKED REVISION PAGES (PDF / TEXT)
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
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
            Step {activeStep} of 4 • Script Versioning Suite
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
                CLOSE VERSIONING ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

