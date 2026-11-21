"use client";

import { useState, useEffect } from "react";
import {
  X,
  ShoppingBag,
  Coins,
  Download,
  CheckCircle2,
  Check,
  ArrowRight,
  Shield,
  Percent,
  Sparkles,
  Layers,
  Globe2,
  Award,
  DollarSign,
  TrendingUp,
} from "lucide-react";

interface AncillaryMerchandisingHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function AncillaryMerchandisingHubModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar - Global Franchise IP & Merchandising Rights",
}: AncillaryMerchandisingHubModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);

  // Step 1: Merchandising SKU Categories & Likeness Clearance
  const [leadLikenessProtection, setLeadLikenessProtection] = useState(
    "Kabir Oberoi (Full Biometric 3D Scan Protected; 15% Net Merch Royalty)"
  );
  const [licensedSkuCategories, setLicensedSkuCategories] = useState([
    "Unreal Engine / Battlegrounds Mobile India (BGMI) In-Game Character Skins",
    "Limited Edition 1:6 Scale Die-Cast Action Figures (Hot Toys License)",
    "Graphic Novel & Comic Spin-Off Publication Rights (Raj Comics / Graphic India)",
    "Original Sound Track (OST) Vinyl Master & Dolby Atmos NFT Collector Box",
  ]);
  const [antiAiCloningClauseActive, setAntiAiCloningClauseActive] = useState(true);

  // Step 2: Revenue Waterfall & Royalty Distribution Splits
  const [producerNetShare, setProducerNetShare] = useState(55); // %
  const [leadPerformerShare, setLeadPerformerShare] = useState(20); // %
  const [musicDirectorShare, setMusicDirectorShare] = useState(15); // %
  const [ipSyndicationAgencyShare, setIpSyndicationAgencyShare] = useState(10); // %
  const [projectedMerchGrossInrCrores, setProjectedMerchGrossInrCrores] = useState(18.5); // INR Cr

  // Step 3: Ancillary Windowing & Territory Licensing
  const [inflightEntertainmentLicensing, setInflightEntertainmentLicensing] = useState(
    "Air India, Emirates, Singapore Airlines (World Ex-India Inflight Rights)"
  );
  const [linearSatelliteTvPremiere, setLinearSatelliteTvPremiere] = useState(
    "Zee Cinema / Star Gold High-Definition World Television Premiere (Window: 90 Days Post-Theatrical)"
  );
  const [avodFastChannelSyndication, setAvodFastChannelSyndication] = useState(
    "Pluto TV / Samsung TV Plus / JioCinema Free Ad-Supported TV (180 Days Window)"
  );

  // Step 4: IP Licensing Deed & Smart Royalty Contract
  const [isExporting, setIsExporting] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  // Auto-Save Draft to LocalStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("rangmanch_draft_merchandising_hub");
        if (saved) {
          const data = JSON.parse(saved);
          if (data.leadLikenessProtection) setLeadLikenessProtection(data.leadLikenessProtection);
          if (data.projectedMerchGrossInrCrores) setProjectedMerchGrossInrCrores(data.projectedMerchGrossInrCrores);
          setDraftSaved(true);
        }
      } catch {}
    }
  }, []);

  const handleSaveDraft = (likeness: string, gross: number) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "rangmanch_draft_merchandising_hub",
          JSON.stringify({ leadLikenessProtection: likeness, projectedMerchGrossInrCrores: gross })
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

  const handleExportLicensingDeed = () => {
    setIsExporting(true);
    const licensingContract = {
      deedId: `IP-DEED-${Math.floor(100000 + Math.random() * 900000)}`,
      project: defaultProject,
      likenessClearance: {
        talentName: leadLikenessProtection,
        antiGenAiCloningWarranty: antiAiCloningClauseActive ? "ENFORCED - ZERO GENERATIVE CLONING" : "WAIVED",
        approvedCategories: licensedSkuCategories,
      },
      royaltyWaterfallSplits: {
        producerSplit: `${producerNetShare}%`,
        talentSplit: `${leadPerformerShare}%`,
        musicComposerSplit: `${musicDirectorShare}%`,
        agencySyndicationSplit: `${ipSyndicationAgencyShare}%`,
        projectedGrossInr: `₹${projectedMerchGrossInrCrores} Crores`,
      },
      ancillaryWindows: {
        inflightRights: inflightEntertainmentLicensing,
        satelliteLinearTv: linearSatelliteTvPremiere,
        avodFastChannels: avodFastChannelSyndication,
      },
      governingLaw: "Indian Copyright Act, 1957 (As Amended) & High Court of Bombay",
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(licensingContract, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ANCILLARY_IP_LICENSING_DEED_${Date.now()}.json`;
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
              <ShoppingBag size={22} />
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
                  FEATURE #106 • MODULE 19
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(212, 175, 97, 0.15)",
                    border: "1px solid rgba(212, 175, 97, 0.3)",
                    color: "#d4af61",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                >
                  IP SYNDICATION & MERCHANDISING
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
                Post-Theatrical Ancillary Merchandising & IP Licensing Hub
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
            { step: 1, label: "1. Likeness & SKUs", icon: ShoppingBag },
            { step: 2, label: "2. Royalty Waterfall", icon: Percent },
            { step: 3, label: "3. Ancillary Windows", icon: Globe2 },
            { step: 4, label: "4. Licensing Contract", icon: Download },
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
          {/* STEP 1: Likeness & SKUs */}
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
                <Shield size={20} color="#d4af61" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Performer Likeness Safeguard & Commercial Merchandising Roster
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Package physical and digital merchandise (BGMI game skins, action figures, apparel) while guaranteeing strict anti-AI likeness cloning protections for the cast.
                  </p>
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                  LEAD TALENT LIKENESS CLEARANCE
                </label>
                <input
                  type="text"
                  value={leadLikenessProtection}
                  onChange={(e) => {
                    setLeadLikenessProtection(e.target.value);
                    handleSaveDraft(e.target.value, projectedMerchGrossInrCrores);
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

              {/* SKU List */}
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#0a0a10",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>
                  APPROVED LICENSED PRODUCT CATEGORIES
                </span>
                {licensedSkuCategories.map((sku, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      backgroundColor: "#060608",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <CheckCircle2 size={14} color="#4ade80" />
                    <span style={{ fontSize: "12px", color: "#e5e7eb" }}>{sku}</span>
                  </div>
                ))}
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
                  <span>Configure Royalty Waterfall</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Royalty Waterfall */}
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
                <Percent size={20} color="#10b981" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Automated Merchandising & Ancillary Net Royalty Waterfall
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Contractual profit-sharing splits allocated directly from gross retail receipts, preventing opaque accounting disputes.
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
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "14px",
                }}
              >
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>PRODUCER SHARE</span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#d4af61", marginTop: "4px" }}>
                    {producerNetShare}%
                  </p>
                  <span style={{ fontSize: "10px", color: "#6b7280" }}>Studio Equity</span>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>LEAD TALENT</span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#4ade80", marginTop: "4px" }}>
                    {leadPerformerShare}%
                  </p>
                  <span style={{ fontSize: "10px", color: "#6b7280" }}>Direct Likeness</span>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>MUSIC & SOUND</span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#60a5fa", marginTop: "4px" }}>
                    {musicDirectorShare}%
                  </p>
                  <span style={{ fontSize: "10px", color: "#6b7280" }}>Publishing IPR</span>
                </div>
                <div>
                  <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>SYNDICATION AGENCY</span>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#f87171", marginTop: "4px" }}>
                    {ipSyndicationAgencyShare}%
                  </p>
                  <span style={{ fontSize: "10px", color: "#6b7280" }}>Retail Distribution</span>
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
                  <span>Review Ancillary Windows</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Ancillary Windows */}
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
                <Globe2 size={20} color="#60a5fa" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                    Global Ancillary Windowing Schedule
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    Synchronize staggered licensing release dates across Inflight, Linear Satellite, and Free Ad-Supported TV (FAST) channels to maximize long-tail valuation.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "#d4af61", fontFamily: "monospace", fontWeight: 600 }}>
                    IN-FLIGHT ENTERTAINMENT (IFE) RIGHTS
                  </label>
                  <input
                    type="text"
                    value={inflightEntertainmentLicensing}
                    onChange={(e) => setInflightEntertainmentLicensing(e.target.value)}
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
                    LINEAR SATELLITE TV BROADCAST PREMIERE
                  </label>
                  <input
                    type="text"
                    value={linearSatelliteTvPremiere}
                    onChange={(e) => setLinearSatelliteTvPremiere(e.target.value)}
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
                  <span>Generate Licensing Deed</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Licensing Contract */}
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
                    IP Licensing Master Agreement Formatted
                  </h4>
                  <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
                    The complete ancillary licensing deed, biometric protection covenant, and royalty waterfall splits have been synchronized and prepared for multi-party execution.
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
                  // ANCILLARY IP MASTER AGREEMENT SPEC
                </div>
                <div>PROJECT: {defaultProject}</div>
                <div>PROTECTED TALENT: {leadLikenessProtection}</div>
                <div>ANTI-AI CLONING: STRICT ZERO TOLERANCE COVENANT</div>
                <div>WATERFALL: Studio {producerNetShare}% | Talent {leadPerformerShare}% | Music {musicDirectorShare}%</div>
                <div>PROJECTED REVENUE: ₹{projectedMerchGrossInrCrores} Crores</div>
                <div>JURISDICTION: Bombay High Court / Indian Copyright Act 1957</div>
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
                  onClick={handleExportLicensingDeed}
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
                  <span>{isExporting ? "Compiling..." : "Export Official IP Deed (JSON)"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
