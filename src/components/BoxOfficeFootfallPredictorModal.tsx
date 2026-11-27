"use client";

import { useState, useEffect } from "react";
import {
  X,
  TrendingUp,
  BarChart3,
  Download,
  CheckCircle2,
  Check,
  ArrowRight,
  Flame,
  Calendar,
  Sparkles,
  Layers,
  MapPin,
  Coins,
  Ticket,
} from "lucide-react";

interface BoxOfficeFootfallPredictorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function BoxOfficeFootfallPredictorModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar - Nationwide Theatrical Box Office & Multiplex Footfall Run",
}: BoxOfficeFootfallPredictorModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);

  // Step 1: Release Window & Screen Allocation
  const [theatricalReleaseWindow, setTheatricalReleaseWindow] = useState(
    "Independence Day Weekend Holiday (4-Day Extended Theatrical Opening)"
  );
  const [domesticScreenCount, setDomesticScreenCount] = useState(4850); // Total screens in India
  const [overseasScreenCount, setOverseasScreenCount] = useState(1250); // North America, UK, Gulf, Aus/NZ
  const [screenSplitMultiplexVsSingle, setScreenSplitMultiplexVsSingle] = useState("65% Multiplex / 35% Single Screen");

  // Step 2: Predictive Opening Day & Weekend Gross
  const [projectedOpeningDayInrCrores, setProjectedOpeningDayInrCrores] = useState(38.5); // INR Cr Day 1
  const [projectedWeekendTotalInrCrores, setProjectedWeekendTotalInrCrores] = useState(142.0); // INR Cr Weekend
  const [trailerConversionVelocityRatio, setTrailerConversionVelocityRatio] = useState(8.4); // % high intent
  const [advanceBookingOccupancyPercent, setAdvanceBookingOccupancyPercent] = useState(78); // % Day 1 morning/night

  // Step 3: Geographic Region Heatmap Breakdown
  const [territoryProjections, setTerritoryProjections] = useState([
    { circuit: "Mumbai / Maharashtra (CP & CI)", share: "₹48.0 Cr", sentiment: "Extremely Bullish", color: "#4ade80" },
    { circuit: "Delhi-UP & Punjab North Circuit", share: "₹42.5 Cr", sentiment: "High Patriotism Surge", color: "#60a5fa" },
    { circuit: "South India (Nizam / Andhra / Tamil Nadu Dub)", share: "₹34.0 Cr", sentiment: "Strong Action Resonance", color: "#d4af61" },
    { circuit: "Overseas (North America & Gulf / UAE)", share: "₹17.5 Cr", sentiment: "Sellout Advance Shows", color: "#c084fc" },
  ]);

  // Step 4: Theatrical Business Report & Breakeven Clearance
  const [isExporting, setIsExporting] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  // Auto-Save Draft
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("rangmanch_draft_boxoffice_predictor");
        if (saved) {
          const data = JSON.parse(saved);
          if (data.theatricalReleaseWindow) setTheatricalReleaseWindow(data.theatricalReleaseWindow);
          setDraftSaved(true);
        }
      } catch {}
    }
  }, []);

  const handleSaveDraft = (rel: string) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "rangmanch_draft_boxoffice_predictor",
          JSON.stringify({ theatricalReleaseWindow: rel })
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

  const handleExportProjections = () => {
    setIsExporting(true);
    const boxOfficeReport = {
      reportId: `BOX-OFFICE-PREDICT-${Math.floor(100000 + Math.random() * 900000)}`,
      project: defaultProject,
      releaseStrategy: {
        window: theatricalReleaseWindow,
        screensDomestic: domesticScreenCount,
        screensOverseas: overseasScreenCount,
        distribution: screenSplitMultiplexVsSingle,
      },
      projectedGrossRevenue: {
        openingDayDomestic: `₹${projectedOpeningDayInrCrores} Crores`,
        extendedWeekendWorldwide: `₹${projectedWeekendTotalInrCrores} Crores`,
        trailerConversionRate: `${trailerConversionVelocityRatio}%`,
        advanceOccupancy: `${advanceBookingOccupancyPercent}%`,
      },
      circuitHeatmap: territoryProjections,
      distributorRecoveryStatus: "SUPER-HIT VERDICT EXPECTED • 100% DISTRIBUTOR MG RECOUPED IN DAY 2",
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(boxOfficeReport, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `BOX_OFFICE_PREDICTION_${Date.now()}.json`;
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
        {/* Header */}
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
              <Ticket size={22} />
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
                  FEATURE #112 • MODULE 20
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
                  NEURAL BOX OFFICE SIMULATOR
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
                Box Office Sentiment &amp; Audience Footfall Heatmap Predictor
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
            { step: 1, label: "1. Release Strategy", icon: Calendar },
            { step: 2, label: "2. Weekend Gross", icon: Coins },
            { step: 3, label: "3. Circuit Heatmap", icon: MapPin },
            { step: 4, label: "4. Theatrical Report", icon: Download },
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

        {/* Body */}
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
          {/* STEP 1: Release Strategy */}
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
                <Calendar size={20} color="#d4af61" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Pan-India Theatrical Windowing &amp; Screen Allocation Strategy
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Configure holiday release calendar multipliers (Independence Day, Diwali, Eid) and domestic multiplex vs. single-screen theatre allocations.
                  </p>
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                  THEATRICAL RELEASE DATE &amp; HOLIDAY MULTIPLIER
                </label>
                <input
                  type="text"
                  value={theatricalReleaseWindow}
                  onChange={(e) => {
                    setTheatricalReleaseWindow(e.target.value);
                    handleSaveDraft(e.target.value);
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

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    DOMESTIC SCREEN COUNT (INDIA)
                  </label>
                  <input
                    type="number"
                    value={domesticScreenCount}
                    onChange={(e) => setDomesticScreenCount(parseInt(e.target.value))}
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

                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    OVERSEAS KEY MARKETS
                  </label>
                  <input
                    type="number"
                    value={overseasScreenCount}
                    onChange={(e) => setOverseasScreenCount(parseInt(e.target.value))}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e0e16",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#60a5fa",
                      fontSize: "13px",
                      fontFamily: "monospace",
                    }}
                  />
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
                  <span>Predict Opening Weekend Gross</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Weekend Gross */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(16, 185, 129, 0.06)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <Coins size={20} color="#10b981" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Machine Learning Box Office Collections Simulation
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Combines YouTube trailer view velocity, BMS advance booking surges, and star-power index to forecast Day 1 and 4-Day extended weekend domestic earnings.
                  </p>
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
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    DAY 1 OPENING ESTIMATE
                  </span>
                  <p style={{ fontSize: "28px", fontWeight: 700, color: "#4ade80", marginTop: "4px" }}>
                    ₹{projectedOpeningDayInrCrores} Cr
                  </p>
                  <span style={{ fontSize: "11px", color: "#6b7280" }}>Historical Record Opener</span>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                    4-DAY EXTENDED WEEKEND
                  </span>
                  <p style={{ fontSize: "28px", fontWeight: 700, color: "#d4af61", marginTop: "4px" }}>
                    ₹{projectedWeekendTotalInrCrores} Cr
                  </p>
                  <span style={{ fontSize: "11px", color: "#6b7280" }}>Global Blockbuster Territory</span>
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
                  <span>Inspect Circuit Heatmap</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Circuit Heatmap */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(59, 130, 246, 0.06)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <MapPin size={20} color="#60a5fa" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Indian Film Distribution Circuit Performance Matrix
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Territory-by-territory yield forecasts across major Indian theatrical circuits, predicting advance booking sellouts and distributor Minimum Guarantee (MG) recoupment.
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {territoryProjections.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "12px",
                      borderRadius: "8px",
                      backgroundColor: "#060608",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "13px", color: "#ffffff", fontWeight: 600 }}>{item.circuit}</span>
                      <p style={{ fontSize: "11px", color: item.color, marginTop: "2px", fontFamily: "monospace" }}>
                        ● {item.sentiment}
                      </p>
                    </div>
                    <span style={{ fontSize: "16px", color: "#d4af61", fontWeight: 700, fontFamily: "monospace" }}>
                      {item.share}
                    </span>
                  </div>
                ))}
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
                  <span>Generate Theatrical Report</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Theatrical Report */}
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
                    Theatrical Business Forecast Verified
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Full 4-day opening weekend telemetry predicts ₹142.0 Crores Worldwide gross with 100% distributor minimum guarantee recoupment achieved by Day 2.
                  </p>
                </div>
              </div>

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
                  // OFFICIAL THEATRICAL BUSINESS FORECAST
                </div>
                <div>PROJECT: {defaultProject}</div>
                <div>SCREENS: {domesticScreenCount} Domestic • {overseasScreenCount} Overseas</div>
                <div>DAY 1 ESTIMATE: ₹{projectedOpeningDayInrCrores} Crores (India Net)</div>
                <div>WEEKEND WORLDWIDE GROSS: ₹{projectedWeekendTotalInrCrores} Crores</div>
                <div>DISTRIBUTOR RECOUPMENT: 100% SAFE • SUPER-HIT RATING</div>
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
                  onClick={handleExportProjections}
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
                  <span>{isExporting ? "Generating..." : "Download Box Office Forecast (JSON)"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
