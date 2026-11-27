"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Search,
  X,
  ArrowRight,
  Sparkles,
  Command,
  Film,
  Shield,
  FileSignature,
  Camera,
  Coins,
  Globe2,
  HardDrive,
  Wand2,
} from "lucide-react";

export interface ToolItem {
  id: string;
  name: string;
  module: number;
  category: string;
  actionKey: string;
  badge: string;
  keywords: string;
}

export const ALL_STUDIO_TOOLS: ToolItem[] = [
  // Module 3
  { id: "t-33", name: "Pitchbook PDF Auto-Compiler", module: 3, category: "Pre-Production", actionKey: "pitchbook", badge: "FEATURE 33", keywords: "pitch deck financing presentation budget casting summary" },
  { id: "t-34", name: "Audition Callback Automated Dispatcher", module: 3, category: "Pre-Production", actionKey: "callback", badge: "FEATURE 34", keywords: "callbacks calendar zoom whatsapp sms invites" },
  { id: "t-35", name: "Archival Talent Search & Historical Matcher", module: 3, category: "Pre-Production", actionKey: "archival", badge: "FEATURE 35", keywords: "veteran actors period films vintage retro lookalike" },
  // Module 4
  { id: "t-36", name: "Role Breakdown Generator", module: 4, category: "Packaging", actionKey: "breakdown", badge: "FEATURE 36", keywords: "cpm breakdown script scenes characters emotional arc" },
  { id: "t-37", name: "Project Codename Shield", module: 4, category: "Packaging", actionKey: "codename", badge: "FEATURE 37", keywords: "stealth privacy leak protection confidential" },
  { id: "t-38", name: "Script Sides Dynamic Encryption", module: 4, category: "Packaging", actionKey: "sides_encryption", badge: "FEATURE 38", keywords: "watermarked sides dialogue pages security" },
  // Module 5
  { id: "t-39", name: "Shooting Schedule Conflict Resolver", module: 5, category: "Scheduling", actionKey: "shooting_schedule", badge: "FEATURE 39", keywords: "call times call sheets calendar overlaps delays" },
  { id: "t-40", name: "Remuneration Escrow Lock", module: 5, category: "Legal & Finance", actionKey: "escrow", badge: "FEATURE 40", keywords: "cintaa milestone payment advance bank guarantee" },
  { id: "t-41", name: "Applicant Kanban Pipeline", module: 5, category: "Auditions", actionKey: "kanban", badge: "FEATURE 41", keywords: "pipeline shortlist audition callback hired rejected" },
  // Module 16
  { id: "t-89", name: "Film Commission Tax Rebate Calculator", module: 16, category: "International", actionKey: "tax_rebate", badge: "FEATURE 89", keywords: "bfi abu dhabi 30% rebate cash grant subsidies" },
  { id: "t-90", name: "ATA Carnet Gear Customs Logistics", module: 16, category: "International", actionKey: "carnet", badge: "FEATURE 90", keywords: "customs camera drones lenses import export carnet" },
  { id: "t-91", name: "Foreign Cast & Crew Expedited Visa", module: 16, category: "International", actionKey: "crew_visa", badge: "FEATURE 91", keywords: "work permit consular fast-track hod petitions" },
  { id: "t-92", name: "Multi-Language Subtitle & Dub QC", module: 16, category: "International", actionKey: "subtitle_qc", badge: "FEATURE 92", keywords: "dubbing srt vtt audio sync translation timing" },
  { id: "t-93", name: "Global Sales Agent & Rights Vault", module: 16, category: "International", actionKey: "sales_rights", badge: "FEATURE 93", keywords: "cannes marche eFM territory pre-sales mg" },
  { id: "t-94", name: "Film Completion Guarantor Bond Escrow", module: 16, category: "Finance", actionKey: "completion_guarantor", badge: "FEATURE 94", keywords: "ffi bond completion guarantee contingency takeover" },
  // Module 17
  { id: "t-95", name: "Zero-Trust Forensic Screener & Watermark Vault", module: 17, category: "Security", actionKey: "forensic_screener", badge: "FEATURE 95", keywords: "pixel dna watermark anti-piracy drm time-bombed leak trace" },
  { id: "t-96", name: "4K/8K Archival Film Restoration & Stock Preserver", module: 17, category: "Archival", actionKey: "film_restoration", badge: "FEATURE 96", keywords: "35mm 70mm dpx inpainting kodak grain lto-9 scan restoration" },
  { id: "t-97", name: "Transmedia Franchise Canon & Multiverse Bible", module: 17, category: "Franchise", actionKey: "franchise_canon", badge: "FEATURE 97", keywords: "cinematic universe continuity timeline scars lore spinoff" },
  // Module 18
  { id: "t-98", name: "Cryptographic PKI eSign & Tamper-Proof Contract", module: 18, category: "Legal", actionKey: "crypto_esign", badge: "FEATURE 98", keywords: "pki digital signature free docusign sha-256 qr audit certificate" },
  { id: "t-99", name: "DIT Camera Mag Offload & Checksum Verification", module: 18, category: "Camera & DIT", actionKey: "camera_offload", badge: "FEATURE 99", keywords: "arri red codex xxhash64 mhl camera card wipe offload" },
  { id: "t-100", name: "Global Territory Sales & Revenue Waterfall Ledger", module: 18, category: "Finance", actionKey: "territory_waterfall", badge: "FEATURE 100", keywords: "cama minimum guarantee waterfall recoupment dtaa currency hedge" },
  { id: "t-101", name: "AI Screenplay Dialogue Punch-Up & Subtext Studio", module: 18, category: "Script Room", actionKey: "dialogue_punchup", badge: "FEATURE 101", keywords: "dialogue punch up subtext sentiment exposition script polish fdx" },
  // Module 19: AI Virtual Production, Metaverse Auditions & Post-Theatrical Monetization
  { id: "t-102", name: "NeRF & 3D Gaussian Splatting Virtual Location Scout", module: 19, category: "Virtual Production", actionKey: "nerf_scout", badge: "FEATURE 102", keywords: "nerf gaussian splatting point cloud lidar unreal engine 5 drone scout solar path" },
  { id: "t-103", name: "AI Intimacy & Stunt Choreography Safety Blueprint", module: 19, category: "Stunt & Wellness", actionKey: "intimacy_stunt", badge: "FEATURE 103", keywords: "cintaa intimacy coordinator stunt safety wire tension pyro trauma medical closed set" },
  { id: "t-104", name: "AI Micro-Expression & Dramatic Tension Heatmap", module: 19, category: "Affective AI", actionKey: "micro_expression", badge: "FEATURE 104", keywords: "navarasa affective computing facs micro expressions pupil dilation tension heatmap audition" },
  { id: "t-105", name: "Dynamic OTT Bitrate & Multi-Device Color Fidelity", module: 19, category: "Post & OTT", actionKey: "ott_qc", badge: "FEATURE 105", keywords: "vmaf netflix prime video ott cellular bitrate ladder dolby vision dci-p3 tone mapping" },
  { id: "t-106", name: "Post-Theatrical Ancillary Merchandising & IP Hub", module: 19, category: "IP & Merch", actionKey: "ancillary_merch", badge: "FEATURE 106", keywords: "merchandising bgmi gaming skins action figures likeness rights anti ai cloning royalty waterfall" },
  // Module 20: AI Screenplay Rights, Defamation Shield & Box Office Predictor
  { id: "t-107", name: "WGA & SWA Screenplay Cryptographic Timestamp Vault", module: 20, category: "Copyright", actionKey: "screenplay_copyright", badge: "FEATURE 107", keywords: "swa wga screenplay copyright timestamp sha-256 plagiarism proof certificate origin" },
  { id: "t-108", name: "AI Deepfake & Voice Clone Defamation Interceptor", module: 20, category: "Legal & Anti-Fraud", actionKey: "deepfake_shield", badge: "FEATURE 108", keywords: "deepfake voice clone defamation section 79 it act dmca takedown biometric voiceprint" },
  { id: "t-109", name: "Multilingual Regional Lip-Sync Dubbing Synthesizer", module: 20, category: "Dubbing & Audio", actionKey: "regional_dub", badge: "FEATURE 109", keywords: "dubbing lip sync tamil telugu malayalam viseme phoneme voice resonance actor timbre" },
  { id: "t-110", name: "On-Set Drone & Aerial Pyro Clearance Radar", module: 20, category: "Drone Logistics", actionKey: "drone_clearance", badge: "FEATURE 110", keywords: "dgca drone digital sky pyro altitude buffer airspace uin clearance aerial" },
  { id: "t-111", name: "Automated Music Cue Sheet & IPRS Royalty Engine", module: 20, category: "Music & Rights", actionKey: "music_cue_iprs", badge: "FEATURE 111", keywords: "music cue sheet iprs ppl ascap background score royalty acoustic fingerprint" },
  { id: "t-112", name: "Box Office Sentiment & Footfall Heatmap Predictor", module: 20, category: "Theatrical Analytics", actionKey: "boxoffice_predictor", badge: "FEATURE 112", keywords: "box office footfall opening day weekend gross multiplex single screen distributor recoupment" },
];

interface CommandKModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTool: (actionKey: string) => void;
}

export default function CommandKModal({
  isOpen,
  onClose,
  onSelectTool,
}: CommandKModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Global shortcut Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open via parent
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredTools = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return ALL_STUDIO_TOOLS.slice(0, 8);
    return ALL_STUDIO_TOOLS.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.badge.toLowerCase().includes(q) ||
        t.keywords.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(14px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "12vh",
        zIndex: 10000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "680px",
          backgroundColor: "#0d0c0a",
          border: "1px solid rgba(212, 175, 55, 0.45)",
          borderRadius: "18px",
          boxShadow: "0 25px 70px rgba(0,0,0,0.95), 0 0 40px rgba(212, 175, 55, 0.2)",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px 20px",
            borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
            background: "linear-gradient(180deg, rgba(212, 175, 55, 0.08) 0%, rgba(13, 12, 10, 0.6) 100%)",
          }}
        >
          <Search size={20} color="#d4af37" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type any studio tool: 'watermark', 'cannes', 'punch up', 'escrow', 'dit'..."
            style={{
              flex: 1,
              background: "none",
              border: "none",
              outline: "none",
              color: "#ffffff",
              fontSize: "15px",
              fontFamily: "monospace",
            }}
          />
          <kbd
            style={{
              fontSize: "11px",
              padding: "3px 8px",
              borderRadius: "6px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#888",
              fontFamily: "monospace",
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: "380px", overflowY: "auto", padding: "8px" }}>
          {filteredTools.length === 0 ? (
            <div style={{ padding: "32px 20px", textAlign: "center", color: "#777", fontSize: "13px" }}>
              No studio tools matching &ldquo;{query}&rdquo;. Try &ldquo;contract&rdquo;, &ldquo;watermark&rdquo;, or &ldquo;restoration&rdquo;.
            </div>
          ) : (
            filteredTools.map((tool, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={tool.id}
                  onClick={() => {
                    onSelectTool(tool.actionKey);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    padding: "12px 16px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: isSelected ? "rgba(212, 175, 55, 0.12)" : "transparent",
                    border: isSelected ? "1px solid rgba(212, 175, 55, 0.3)" : "1px solid transparent",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(212, 175, 55, 0.1)",
                        border: "1px solid rgba(212, 175, 55, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#d4af37",
                        fontSize: "11px",
                        fontWeight: 700,
                      }}
                    >
                      M{tool.module}
                    </div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: isSelected ? "#fff" : "#eee" }}>
                        {tool.name}
                      </div>
                      <div style={{ fontSize: "11px", color: "#888", marginTop: "2px" }}>
                        {tool.category} • Module {tool.module}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span
                      style={{
                        fontSize: "9px",
                        fontFamily: "monospace",
                        padding: "3px 8px",
                        borderRadius: "999px",
                        backgroundColor: "rgba(212, 175, 55, 0.15)",
                        color: "#f7e7c4",
                        border: "1px solid rgba(212, 175, 55, 0.3)",
                      }}
                    >
                      {tool.badge}
                    </span>
                    <ArrowRight size={14} color={isSelected ? "#d4af37" : "#555"} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div
          style={{
            padding: "10px 18px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "11px",
            color: "#666",
            fontFamily: "monospace",
          }}
        >
          <span>Quick Launcher • 74 Studio Tools Indexed</span>
          <span>Press ↵ to Open Tool</span>
        </div>
      </div>
    </div>
  );
}
