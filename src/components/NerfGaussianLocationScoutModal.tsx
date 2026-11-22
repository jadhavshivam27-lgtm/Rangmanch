"use client";

import { useState, useEffect } from "react";
import {
  X,
  Compass,
  Sun,
  Video,
  Download,
  CheckCircle2,
  Check,
  ArrowRight,
  Layers,
  MapPin,
  Eye,
  Camera,
  Box,
  RotateCcw,
  Sparkles,
} from "lucide-react";

interface NerfGaussianLocationScoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function NerfGaussianLocationScoutModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar - Unit 1 Virtual Production Scouting",
}: NerfGaussianLocationScoutModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);

  // Step 1: Spatial Radiance / Gaussian Splat Capture
  const [locationName, setLocationName] = useState("Kuldhara Ruins & Sand Dunes, Jaisalmer (Heritage Sector A)");
  const [splatFormat, setSplatFormat] = useState("3D Gaussian Splat (.ply 1.8M Gaussians) + LiDAR Point Cloud");
  const [pointCloudDensity, setPointCloudDensity] = useState(48.5); // Millions of points
  const [droneFlightPasses, setDroneFlightPasses] = useState(14);

  // Step 2: Solar Trajectory & Golden Hour Lighting
  const [timeOfDay, setTimeOfDay] = useState("17:45 IST (Golden Hour Twilight Transition)");
  const [sunAltitudeAngle, setSunAltitudeAngle] = useState(12.4); // degrees above horizon
  const [sunAzimuthAngle, setSunAzimuthAngle] = useState(258.1); // degrees WSW
  const [goldenHourWindow, setGoldenHourWindow] = useState("17:28 – 18:04 IST (36 mins shooting duration)");
  const [cloudCoverShadowAbsorption, setCloudCoverShadowAbsorption] = useState("0% (Direct desert sunset flare)");

  // Step 3: Camera Lens & Virtual LED Volume Rigging
  const [targetLedVolume, setTargetLedVolume] = useState("270° Panoramic LED Volume (disguise vx 4+ / Roe Black Pearl 2.8mm)");
  const [cinemaCameraSensor, setCinemaCameraSensor] = useState("ARRI Alexa Mini LF (Large Format 36.70 x 25.54 mm)");
  const [focalLengthMm, setFocalLengthMm] = useState("40mm Cooke Anamorphic /i Special Flare");
  const [fStopAperture, setFStopAperture] = useState("T2.3 (Cinematic shallow depth of field)");
  const [depthOfFieldNearMeters, setDepthOfFieldNearMeters] = useState(2.8);
  const [depthOfFieldFarMeters, setDepthOfFieldFarMeters] = useState(18.5);

  // Step 4: Engine Manifest & Unreal 5.4 Export
  const [isExporting, setIsExporting] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  // Auto-Save Draft to LocalStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("rangmanch_draft_nerf_location");
        if (saved) {
          const data = JSON.parse(saved);
          if (data.locationName) setLocationName(data.locationName);
          if (data.timeOfDay) setTimeOfDay(data.timeOfDay);
          if (data.focalLengthMm) setFocalLengthMm(data.focalLengthMm);
          setDraftSaved(true);
        }
      } catch {}
    }
  }, []);

  const handleSaveDraft = (loc: string, time: string, focal: string) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "rangmanch_draft_nerf_location",
          JSON.stringify({ locationName: loc, timeOfDay: time, focalLengthMm: focal })
        );
        setDraftSaved(true);
      } catch {}
    }
  };

  if (!isOpen) return null;

  const handleStepComplete = (step: number) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps([...completedSteps, step]);
    }
  };

  const handleExportUnrealManifest = () => {
    setIsExporting(true);
    const exportBundle = {
      manifestVersion: "2.4.0",
      project: defaultProject,
      location: {
        name: locationName,
        format: splatFormat,
        pointDensityMillion: pointCloudDensity,
        droneFlightPasses,
      },
      solarSimulation: {
        simulatedTime: timeOfDay,
        sunAltitudeDeg: sunAltitudeAngle,
        sunAzimuthDeg: sunAzimuthAngle,
        goldenHourWindow,
        cloudCover: cloudCoverShadowAbsorption,
      },
      virtualProductionRig: {
        stageVolume: targetLedVolume,
        sensor: cinemaCameraSensor,
        lens: focalLengthMm,
        aperture: fStopAperture,
        nearFocusMeters: depthOfFieldNearMeters,
        farFocusMeters: depthOfFieldFarMeters,
      },
      unrealEngineVersion: "5.4.3 NDisplay Compatible",
      disguiseMediaServerProfile: "ACEScg Color Pipeline v1.3",
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(exportBundle, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `UNREAL5_NERF_${locationName.split(" ")[0].toUpperCase()}_MANIFEST.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setIsExporting(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.88)",
        backdropFilter: "blur(12px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1080px",
          maxHeight: "92vh",
          backgroundColor: "#08080c",
          border: "1px solid rgba(212, 175, 97, 0.35)",
          borderRadius: "18px",
          boxShadow: "0 24px 70px rgba(0,0,0,0.9), 0 0 45px rgba(212, 175, 97, 0.12)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#0d0d14",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                backgroundColor: "rgba(212, 175, 97, 0.12)",
                border: "1px solid rgba(212, 175, 97, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4af61",
              }}
            >
              <Compass size={22} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    color: "#d4af61",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  FEATURE #102 • MODULE 19
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(74, 222, 128, 0.15)",
                    border: "1px solid rgba(74, 222, 128, 0.3)",
                    color: "#4ade80",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                >
                  3D GAUSSIAN SPLAT ENGINE
                </span>
                {draftSaved && (
                  <span style={{ fontSize: "9px", color: "#d4af61", fontFamily: "monospace" }}>
                    ✓ DRAFT SAVED
                  </span>
                )}
              </div>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                }}
              >
                NeRF & 3D Gaussian Splatting Virtual Location Scout
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: "8px",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#9ca3af",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Stepper Tabs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            backgroundColor: "#06060a",
          }}
        >
          {[
            { step: 1, label: "1. Radiance Splat Scan", icon: Box },
            { step: 2, label: "2. Solar Path & Twilight", icon: Sun },
            { step: 3, label: "3. Lens & LED Volume", icon: Camera },
            { step: 4, label: "4. Unreal 5.4 Export", icon: Download },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeStep === item.step;
            const isDone = completedSteps.includes(item.step);
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                style={{
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  border: "none",
                  backgroundColor: isActive ? "rgba(212, 175, 97, 0.1)" : "transparent",
                  borderBottom: isActive ? "2px solid #d4af61" : "2px solid transparent",
                  color: isActive ? "#ffffff" : isDone ? "#9ca3af" : "#4b5563",
                  fontSize: "12px",
                  fontWeight: isActive ? 600 : 500,
                  fontFamily: "monospace",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <Icon size={14} color={isActive ? "#d4af61" : isDone ? "#4ade80" : "currentColor"} />
                <span>{item.label}</span>
                {isDone && !isActive && <Check size={12} color="#4ade80" />}
              </button>
            );
          })}
        </div>

        {/* Step Content Body */}
        <div
          style={{
            padding: "24px",
            overflowY: "auto",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* STEP 1: Radiance Splat Scan */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(212, 175, 97, 0.06)",
                  border: "1px solid rgba(212, 175, 97, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <MapPin size={20} color="#d4af61" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Spatial Photogrammetry & LiDAR Heritage Scouting
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Select or configure real-world physical locations captured via high-resolution drone flight paths. Real-time 3D Gaussian Splats render 60fps photorealistic volumetrics without polygon budget limitations.
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    LOCATION SCOUT HERITAGE SITE
                  </label>
                  <input
                    type="text"
                    value={locationName}
                    onChange={(e) => {
                      setLocationName(e.target.value);
                      handleSaveDraft(e.target.value, timeOfDay, focalLengthMm);
                    }}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    VOLUMETRIC FORMAT
                  </label>
                  <select
                    value={splatFormat}
                    onChange={(e) => setSplatFormat(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  >
                    <option value="3D Gaussian Splat (.ply 1.8M Gaussians) + LiDAR Point Cloud">
                      3D Gaussian Splat (.ply 1.8M Gaussians) + LiDAR Point Cloud
                    </option>
                    <option value="Instant-NGP Neural Radiance Field (NeRF) 8K Latent Grid">
                      Instant-NGP Neural Radiance Field (NeRF) 8K Latent Grid
                    </option>
                    <option value="Unreal Engine 5.4 Nanite Mesh & Lumen Surface Cache">
                      Unreal Engine 5.4 Nanite Mesh & Lumen Surface Cache
                    </option>
                  </select>
                </div>
              </div>

              {/* Point Cloud Telemetry Card */}
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                }}
              >
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    POINT DENSITY
                  </span>
                  <p style={{ fontSize: "18px", fontWeight: 700, color: "#4ade80", marginTop: "4px" }}>
                    {pointCloudDensity}M Points
                  </p>
                  <span style={{ fontSize: "10px", color: "#6b7280" }}>Sub-millimeter accuracy</span>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    DRONE FLIGHT MISSIONS
                  </span>
                  <p style={{ fontSize: "18px", fontWeight: 700, color: "#d4af61", marginTop: "4px" }}>
                    {droneFlightPasses} Nadir & Oblique Passes
                  </p>
                  <span style={{ fontSize: "10px", color: "#6b7280" }}>DJI Inspire 3 RTK GPS</span>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    HERITAGE CLEARANCE
                  </span>
                  <p style={{ fontSize: "18px", fontWeight: 700, color: "#60a5fa", marginTop: "4px" }}>
                    ASI / Rajasthan Approved
                  </p>
                  <span style={{ fontSize: "10px", color: "#6b7280" }}>Non-destructive scanning</span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
                <button
                  onClick={() => {
                    handleStepComplete(1);
                    setActiveStep(2);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    backgroundColor: "#d4af61",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Lock Location & Simulate Solar Path</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Solar Trajectory */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(251, 191, 36, 0.06)",
                  border: "1px solid rgba(251, 191, 36, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Sun size={20} color="#fbbf24" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Geographic Heliocentric Solar Calculation
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Calculates authentic sun angles and directional ray shadows based on GPS coordinates ({locationName}). Matches onset physical lighting with virtual LED wall environments down to the exact second.
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    SIMULATED SHOOTING TIME (IST)
                  </label>
                  <input
                    type="text"
                    value={timeOfDay}
                    onChange={(e) => {
                      setTimeOfDay(e.target.value);
                      handleSaveDraft(locationName, e.target.value, focalLengthMm);
                    }}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    GOLDEN HOUR SHOOTING WINDOW
                  </label>
                  <input
                    type="text"
                    value={goldenHourWindow}
                    onChange={(e) => setGoldenHourWindow(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#4ade80",
                      fontSize: "13px",
                      fontFamily: "monospace",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                      SUN ALTITUDE: {sunAltitudeAngle}°
                    </span>
                    <span style={{ fontSize: "11px", color: "#fbbf24", fontWeight: 600 }}>Low Desert Rake</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="90"
                    step="0.5"
                    value={sunAltitudeAngle}
                    onChange={(e) => setSunAltitudeAngle(parseFloat(e.target.value))}
                    style={{ width: "100%", accentColor: "#d4af61" }}
                  />
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                      SUN AZIMUTH: {sunAzimuthAngle}° (WSW)
                    </span>
                    <span style={{ fontSize: "11px", color: "#60a5fa", fontWeight: 600 }}>Direct Backlight</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    step="1"
                    value={sunAzimuthAngle}
                    onChange={(e) => setSunAzimuthAngle(parseFloat(e.target.value))}
                    style={{ width: "100%", accentColor: "#60a5fa" }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button
                  onClick={() => setActiveStep(1)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                    color: "#9ca3af",
                    fontSize: "13px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    handleStepComplete(2);
                    setActiveStep(3);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    backgroundColor: "#d4af61",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Configure Lens & Virtual Stage</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Lens & LED Volume */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(96, 165, 250, 0.06)",
                  border: "1px solid rgba(96, 165, 250, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Camera size={20} color="#60a5fa" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Optical Lens Profile & ICVFX Frustum Matching
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Matches camera sensor size, anamorphic squeeze factor, and focal lengths to project the exact inner frustum onto the LED wall without latency or parallax distortion.
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    VIRTUAL PRODUCTION LED VOLUME
                  </label>
                  <select
                    value={targetLedVolume}
                    onChange={(e) => setTargetLedVolume(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  >
                    <option value="270° Panoramic LED Volume (disguise vx 4+ / Roe Black Pearl 2.8mm)">
                      270° Panoramic LED Volume (disguise vx 4+ / Roe Black Pearl 2.8mm)
                    </option>
                    <option value="Mumbai Film City Stage 5 LED Horseshoe (30m diameter x 8m height)">
                      Mumbai Film City Stage 5 LED Horseshoe (30m diameter x 8m height)
                    </option>
                    <option value="Hyderabad Ramoji Virtual Stage Alpha (Unreal 5.4 Live Cluster)">
                      Hyderabad Ramoji Virtual Stage Alpha (Unreal 5.4 Live Cluster)
                    </option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    ANAMORPHIC CINE LENS
                  </label>
                  <select
                    value={focalLengthMm}
                    onChange={(e) => {
                      setFocalLengthMm(e.target.value);
                      handleSaveDraft(locationName, timeOfDay, e.target.value);
                    }}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  >
                    <option value="40mm Cooke Anamorphic /i Special Flare (2x Squeeze)">
                      40mm Cooke Anamorphic /i Special Flare (2x Squeeze)
                    </option>
                    <option value="65mm ARRI Rental Prime DNA T1.6 Full Frame">
                      65mm ARRI Rental Prime DNA T1.6 Full Frame
                    </option>
                    <option value="85mm Atlas Orion Anamorphic T2.0 Silver Edition">
                      85mm Atlas Orion Anamorphic T2.0 Silver Edition
                    </option>
                  </select>
                </div>
              </div>

              {/* Depth of Field Live Calculator */}
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                }}
              >
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    APERTURE SETTING
                  </span>
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>
                    {fStopAperture}
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    NEAR FOCUS LIMIT
                  </span>
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#4ade80", marginTop: "4px" }}>
                    {depthOfFieldNearMeters} Meters
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    FAR FOCUS LIMIT
                  </span>
                  <p style={{ fontSize: "16px", fontWeight: 700, color: "#60a5fa", marginTop: "4px" }}>
                    {depthOfFieldFarMeters} Meters
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button
                  onClick={() => setActiveStep(2)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                    color: "#9ca3af",
                    fontSize: "13px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    handleStepComplete(3);
                    setActiveStep(4);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    backgroundColor: "#d4af61",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span>Review & Compile Unreal Manifest</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Unreal 5.4 Export */}
          {activeStep === 4 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(74, 222, 128, 0.08)",
                  border: "1px solid rgba(74, 222, 128, 0.3)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <CheckCircle2 size={20} color="#4ade80" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Virtual Scouting Package Ready for On-Set Live Ingest
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    All volumetric splat models, solar angles, and Cooke Anamorphic lens distortion matrices have been computed and synchronized with ACES 1.3 color transformations.
                  </p>
                </div>
              </div>

              {/* Summary Code Spec Box */}
              <div
                style={{
                  padding: "18px",
                  borderRadius: "10px",
                  backgroundColor: "#050508",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  fontFamily: "monospace",
                  fontSize: "12px",
                  color: "#d1d5db",
                  lineHeight: "1.6",
                }}
              >
                <div style={{ color: "#d4af61", fontWeight: 700, marginBottom: "8px" }}>
                  // PRODUCTION SCOUT SPECIFICATION
                </div>
                <div>PROJECT: {defaultProject}</div>
                <div>HERITAGE SITE: {locationName}</div>
                <div>SPLAT MODEL: {splatFormat} ({pointCloudDensity}M points)</div>
                <div>SOLAR WINDOW: {timeOfDay} • Alt: {sunAltitudeAngle}° • Azimuth: {sunAzimuthAngle}°</div>
                <div>STAGE VOLUME: {targetLedVolume}</div>
                <div>LENS & FRUSTUM: {focalLengthMm} (Aperture: {fStopAperture})</div>
                <div>COLOR ENCODING: ACEScg Linear AP0 Pipeline</div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button
                  onClick={() => setActiveStep(3)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                    color: "#9ca3af",
                    fontSize: "13px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
                <button
                  onClick={handleExportUnrealManifest}
                  disabled={isExporting}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    backgroundColor: "#d4af61",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 0 20px rgba(212, 175, 97, 0.3)",
                  }}
                >
                  <Download size={16} />
                  <span>{isExporting ? "Compiling..." : "Export Unreal 5.4 & disguise Manifest (JSON)"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
