"use client";

import { useState } from "react";
import {
  X,
  Crosshair,
  Scan,
  Camera,
  Layers,
  CheckCircle2,
  Download,
  AlertCircle,
  Eye,
  Cpu,
} from "lucide-react";

interface VfxTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function VfxTrackingModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: VfxTrackingModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [lensModel, setLensModel] = useState("Cooke Anamorphic /i Full Frame Plus 40mm T2.3");
  const [cameraSensor, setCameraSensor] = useState("ARRI Alexa Mini LF (4.5K Open Gate)");
  const [cameraHeight, setCameraHeight] = useState("4 ft 8 inches • Tilt: -3.5°");
  const [markerCount, setMarkerCount] = useState("72 High-Contrast Facial Markers + 24 Body Trackers");
  const [hdriProbe, setHdriProbe] = useState("32-bit Floating Point EXR Chrome/Grey Ball Captured");

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(132, 204, 22, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(132, 204, 22, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Lime Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #84cc16 25%, #d9f99d 50%, #84cc16 75%, transparent)",
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
                  "linear-gradient(135deg, rgba(132,204,22,0.2) 0%, rgba(132,204,22,0.05) 100%)",
                border: "1px solid rgba(132,204,22,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#84cc16",
              }}
            >
              <Crosshair size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#84cc16",
                  textTransform: "uppercase",
                }}
              >
                MODULE M067 • FEATURE 67
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
                VFX Marker Tracking &amp; Green-Screen Pipeline
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#84cc16", fontWeight: 600 }}>{defaultProject}</span> • On-Set Camera Matchmove &amp; 3D Marker Capture
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
            { step: 1, label: "Camera & Lens Meta" },
            { step: 2, label: "HDRI Light Probe" },
            { step: 3, label: "Actor Marker Mesh" },
            { step: 4, label: "VFX Data Bundle" },
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
                    ? "rgba(132,204,22,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(132,204,22,0.3)"
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
                    activeStep === item.step ? "#84cc16" : "rgba(255,255,255,0.1)",
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
          {/* STEP 1: CAMERA & LENS META */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Camera Sensor Rig
                  </label>
                  <input
                    type="text"
                    value={cameraSensor}
                    onChange={(e) => setCameraSensor(e.target.value)}
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
                    Lens Model &amp; Focal Length
                  </label>
                  <input
                    type="text"
                    value={lensModel}
                    onChange={(e) => setLensModel(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#84cc16",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                  Matchmove Spatial Telemetry (Height &amp; Tilt)
                </label>
                <input
                  type="text"
                  value={cameraHeight}
                  onChange={(e) => setCameraHeight(e.target.value)}
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

          {/* STEP 2: HDRI LIGHT PROBE */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(132,204,22,0.05)",
                  border: "1px solid rgba(132,204,22,0.2)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
                    360° Studio Lighting Probe EXR
                  </div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "2px" }}>
                    Captured at 18 EV Stops Dynamic Range • Chrome Ball &amp; Macbeth Color Checker
                  </div>
                </div>
                <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#84cc16", padding: "4px 8px", background: "rgba(132,204,22,0.15)", borderRadius: "6px" }}>
                  CALIBRATED
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: ACTOR MARKER MESH */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                  Performer Tracking Constellation: {markerCount}
                </div>
                <div style={{ fontSize: "12px", color: "#a0a0b0", lineHeight: 1.6 }}>
                  • 72 Facial retro-reflective markers tracked on Tanya Deshmukh for prosthetic wound CGI blending.<br/>
                  • Green-screen backdrop keying spill suppressed via on-set amber bounce.
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: VFX DATA BUNDLE */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(132,204,22,0.15)",
                  border: "1px solid rgba(132,204,22,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#84cc16",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                On-Set VFX Matchmove Package Exported
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Packaged into OpenEXR bundle with Cooke /i lens telemetry metadata, HDRI lighting spherical map, and 3D camera tracking locators.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH ON-SET VFX DATA SHEET\nProject: ${defaultProject}\nCamera: ${cameraSensor}\nLens: ${lensModel}\nSpatial: ${cameraHeight}\nTracking Markers: ${markerCount}\nLight Probe: ${hdriProbe}\nExport Formats: FBX Camera Tracking + OpenEXR 32-bit\nTimestamp: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `VFX_Matchmove_${defaultProject.replace(/\s+/g, "_")}_Scene54.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD VFX MATCHMOVE DOSSIER (.TXT / .JSON)
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
            Step {activeStep} of 4 • VFX Supervision Suite
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
                SEAL VFX DOSSIER ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

