"use client";

import { useState } from "react";
import {
  X,
  FileSpreadsheet,
  Split,
  Layers,
  Calculator,
  CheckCircle2,
  Download,
  AlertCircle,
  Truck,
  Users,
  Coins,
} from "lucide-react";

interface ScriptBreakdownModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function ScriptBreakdownModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: ScriptBreakdownModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [sceneSelected, setSceneSelected] = useState("Scene 24 - Hospital Server Room Raid");
  const [pageEighths, setPageEighths] = useState("3 6/8 Pages");
  const [estimatedHours, setEstimatedHours] = useState("14 Hours (Split over 2 Shooting Days)");
  const [extrasCount, setExtrasCount] = useState("25 Crowd / Special Armed Commandos");

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(16, 185, 129, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(16, 185, 129, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Emerald Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #10b981 25%, #a7f3d0 50%, #10b981 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.05) 100%)",
                border: "1px solid rgba(16,185,129,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#10b981",
              }}
            >
              <Split size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#10b981",
                  textTransform: "uppercase",
                }}
              >
                MODULE M065 • FEATURE 65
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
                Production Script Breakdown &amp; Stripboard
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#10b981", fontWeight: 600 }}>{defaultProject}</span> • 8ths of a Page Movie Magic Industry Breakdown
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
            { step: 1, label: "Scene Elements" },
            { step: 2, label: "Dept Breakdown" },
            { step: 3, label: "Day & Budget" },
            { step: 4, label: "Master Stripboard" },
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
                    ? "rgba(16,185,129,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(16,185,129,0.3)"
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
                    activeStep === item.step ? "#10b981" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: SCENE ELEMENTS */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Scene Heading
                  </label>
                  <input
                    type="text"
                    value={sceneSelected}
                    onChange={(e) => setSceneSelected(e.target.value)}
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

                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Eighths of a Page Length
                  </label>
                  <input
                    type="text"
                    value={pageEighths}
                    onChange={(e) => setPageEighths(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#10b981",
                      fontSize: "13px",
                      fontWeight: 700,
                      fontFamily: "monospace",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  padding: "18px 20px",
                  borderRadius: "14px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  fontSize: "12px",
                }}
              >
                <div>
                  <span style={{ color: "#8a8a9a" }}>Speaking Cast (Red):</span>
                  <div style={{ color: "#ffffff", fontWeight: 600, marginTop: "2px" }}>
                    ACP Vikram, Dr. Alisha, Server Admin
                  </div>
                </div>
                <div>
                  <span style={{ color: "#8a8a9a" }}>Background Extras (Green):</span>
                  <div style={{ color: "#ffffff", fontWeight: 600, marginTop: "2px" }}>
                    {extrasCount}
                  </div>
                </div>
                <div>
                  <span style={{ color: "#8a8a9a" }}>Special Props (Violet):</span>
                  <div style={{ color: "#ffffff", fontWeight: 600, marginTop: "2px" }}>
                    Encrypted Hard Drive, Fiber Optic Splicer
                  </div>
                </div>
                <div>
                  <span style={{ color: "#8a8a9a" }}>Vehicles &amp; Stunt Animals (Yellow):</span>
                  <div style={{ color: "#ffffff", fontWeight: 600, marginTop: "2px" }}>
                    2 SWAT Tactical Vans, 1 Emergency Ambulance
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: DEPT BREAKDOWN */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Auto-generated departmental requirements parsed directly from sluglines and action blocks.
              </div>

              {[
                { dept: "Art / Set Dressing", note: "Server rack blinking LED array, biometric door lock prop, smoke hazers." },
                { dept: "Wardrobe / Costume", note: "Vikram: Blood-stained tactical polo; Alisha: Lab coat with ID lanyard." },
                { dept: "Special Effects (SFX)", note: "Sparks rig for server cabinet short-circuit, controlled fire extinguisher discharge." },
                { dept: "Sound Department", note: "Server cooling fan acoustic room tone, mechanical latch Foley capture." },
              ].map((d, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "14px 18px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#10b981" }}>{d.dept}</div>
                  <div style={{ fontSize: "12px", color: "#a0a0b0", marginTop: "4px" }}>{d.note}</div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 3: DAY & BUDGET */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(16,185,129,0.05)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a" }}>Estimated Scene Production Cost:</div>
                  <div style={{ fontSize: "24px", fontWeight: 700, color: "#10b981", fontFamily: "monospace", marginTop: "2px" }}>
                    ₹8,45,000 INR
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "10px", fontFamily: "monospace", padding: "4px 8px", background: "rgba(16,185,129,0.15)", color: "#10b981", borderRadius: "6px" }}>
                    2 SHOOTING DAYS
                  </span>
                  <div style={{ fontSize: "11px", color: "#606070", marginTop: "4px" }}>Interior Night Studio Build</div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: MASTER STRIPBOARD */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(16,185,129,0.15)",
                  border: "1px solid rgba(16,185,129,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#10b981",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Master Production Stripboard Generated
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Full Movie Magic format breakdown sheet exported for 1st Assistant Director, Production Manager, and Line Producer.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH MOVIE MAGIC STYLE SCRIPT BREAKDOWN\nProject: ${defaultProject}\nScene: ${sceneSelected}\nPage Length: ${pageEighths}\nEstimated Shoot Window: ${estimatedHours}\nExtras Count: ${extrasCount}\nBudget Estimate: ₹8,45,000 INR\nGenerated on: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Script_Breakdown_${defaultProject.replace(/\s+/g, "_")}_Scene24.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD SCRIPT BREAKDOWN SHEET (CSV / TEXT)
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
            Step {activeStep} of 4 • Production Breakdown Suite
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
                CLOSE BREAKDOWN ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

