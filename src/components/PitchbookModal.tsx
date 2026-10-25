"use client";

import React, { useState } from "react";
import {
  X,
  FileText,
  Download,
  Share2,
  CheckCircle2,
  Building2,
  Lock,
  Eye,
  Sliders,
  Sparkles,
  ChevronRight,
  Shield,
  Film,
  Award,
  Calendar,
  DollarSign,
  Printer,
  Copy,
  Check,
} from "lucide-react";
import Image from "next/image";

interface PitchbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function PitchbookModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: PitchbookModalProps) {
  const [selectedProject, setSelectedProject] = useState(defaultProject);
  const [studioWatermark, setStudioWatermark] = useState<"netflix" | "prime" | "nfdc" | "zee">("prime");
  const [includeFinancials, setIncludeFinancials] = useState(true);
  const [includeAuditionNotes, setIncludeAuditionNotes] = useState(true);
  const [confidentialNDA, setConfidentialNDA] = useState(true);
  const [activeSlide, setActiveSlide] = useState<"cover" | "grid" | "deep-dive">("cover");
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const PROJECTS = [
    {
      id: "p1",
      title: "Antim Prahar",
      type: "Feature Film",
      director: "Imtiaz Ali",
      studio: "Starlight Casting Co. × NFDC",
      shortlistCount: 4,
    },
    {
      id: "p2",
      title: "Uncharted Waters",
      type: "OTT Web Series",
      director: "Zoya Akhtar",
      studio: "Spectrum Productions",
      shortlistCount: 6,
    },
    {
      id: "p3",
      title: "Noor",
      type: "Regional Hindi Short Film",
      director: "Shailja Singh",
      studio: "Starlight Casting Co.",
      shortlistCount: 3,
    },
    {
      id: "p4",
      title: "Manto Ki Duniya",
      type: "Theatre Production",
      director: "Resonance Theatre",
      studio: "NCPA / Prithvi",
      shortlistCount: 4,
    },
  ];

  const CANDIDATES = [
    {
      name: "Ananya Sharma",
      role: "Neha Sinha — Female Lead",
      age: "24",
      score: "96%",
      match: "Strong Dramatic Resonance",
      photo: "/photos/real_01.png",
      priorCredits: "FTII Gold Medalist • 4 Feature Films • OTT Drama Lead",
      expectedComp: "₹85 Lakh – ₹1.1 Cr",
      directorVerdict: "Remarkable restraint. Expresses emotional vulnerability with subtle eye movement without over-emoting.",
      guildStatus: "CINTAA Verified #A-4821",
    },
    {
      name: "Shivam Jadhav",
      role: "Dev — Protagonist / Inspector",
      age: "25",
      score: "94%",
      match: "Physical & Intense Presence",
      photo: "/photos/real_03.jpg",
      priorCredits: "Lead — OTT Thriller Anthology (2024) • Mumbai Theatre Circuit",
      expectedComp: "₹65 – ₹80 Lakh",
      directorVerdict: "Commanding screen presence. Strong dialogue delivery in contemporary Hindi and raw street-level realism.",
      guildStatus: "CINTAA Verified #S-2910",
    },
    {
      name: "Meera Nair",
      role: "Razia / Supporting Lead",
      age: "26",
      score: "92%",
      match: "Classical Stillness & Depth",
      photo: "/photos/real_02.png",
      priorCredits: "State Award Nominee • 6 Regional Features • Kalamandalam",
      expectedComp: "₹40 – ₹55 Lakh",
      directorVerdict: "Unmatched classical posture and stillness. Perfect for period or high-stakes historical drama.",
      guildStatus: "CINTAA Verified #M-1094",
    },
    {
      name: "Rohan Kapoor",
      role: "Antagonist / Key Counterpart",
      age: "28",
      score: "91%",
      match: "Deep Vocal Timbre & Stagecraft",
      photo: "/photos/real_07.jpg",
      priorCredits: "NSD Alumnus • 8+ Years Live Stage • Hollow Nights S2",
      expectedComp: "₹35 – ₹50 Lakh",
      directorVerdict: "Baritone resonance creates instant intimidation. Carries internal conflict naturally.",
      guildStatus: "CINTAA Verified #R-3811",
    },
  ];

  const handleCopyLink = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-5xl bg-[#0e0e14] border border-[#d4af61]/40 rounded-2xl shadow-[0_0_60px_rgba(212,175,97,0.18)] flex flex-col max-h-[92vh] overflow-hidden text-neutral-200">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#12121c]/90">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#d4af61]/20 to-[#d4af61]/5 border border-[#d4af61]/40 flex items-center justify-center text-[#d4af61]">
              <FileText size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-[#d4af61] uppercase font-bold">
                  Feature #28 • Pitchbook Generator
                </span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono">
                  EXECUTIVE READY
                </span>
              </div>
              <h2 className="text-lg font-cinema font-bold text-white tracking-wide">
                Shortlist PDF Pitchbook for Producers &amp; Network Execs
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Studio & Project Selector Bar */}
        <div className="px-6 py-3 bg-[#161622] border-b border-neutral-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-neutral-400 font-medium">Select Production:</span>
            <div className="flex gap-2">
              {PROJECTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProject(p.title)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    selectedProject === p.title
                      ? "bg-[#d4af61] text-black font-semibold shadow-md"
                      : "bg-[#1c1c2b] text-neutral-300 hover:bg-[#252538] border border-neutral-800"
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-neutral-400 font-medium">Network Watermark:</span>
            <div className="flex gap-1.5 bg-[#101018] p-1 rounded-lg border border-neutral-800">
              {[
                { id: "prime", label: "Prime Video" },
                { id: "netflix", label: "Netflix" },
                { id: "nfdc", label: "NFDC India" },
                { id: "zee", label: "Zee Studios" },
              ].map((w) => (
                <button
                  key={w.id}
                  onClick={() => setStudioWatermark(w.id as any)}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                    studioWatermark === w.id
                      ? "bg-neutral-800 text-[#d4af61] font-bold"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {w.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="px-6 py-2 bg-[#0e0e14] border-b border-neutral-800/60 flex items-center justify-between">
          <div className="flex gap-2 text-xs">
            <button
              onClick={() => setActiveSlide("cover")}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                activeSlide === "cover"
                  ? "bg-[#d4af61]/15 text-[#d4af61] border border-[#d4af61]/30 font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Film size={13} /> Slide 1: Cover Presentation
            </button>
            <button
              onClick={() => setActiveSlide("grid")}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                activeSlide === "grid"
                  ? "bg-[#d4af61]/15 text-[#d4af61] border border-[#d4af61]/30 font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Building2 size={13} /> Slide 2: Shortlist Overview Grid
            </button>
            <button
              onClick={() => setActiveSlide("deep-dive")}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                activeSlide === "deep-dive"
                  ? "bg-[#d4af61]/15 text-[#d4af61] border border-[#d4af61]/30 font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Award size={13} /> Slide 3: Candidate Evaluation
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs text-neutral-400">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={includeFinancials}
                onChange={(e) => setIncludeFinancials(e.target.checked)}
                className="accent-[#d4af61] rounded"
              />
              <span>Remuneration Estimates</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={confidentialNDA}
                onChange={(e) => setConfidentialNDA(e.target.checked)}
                className="accent-[#d4af61] rounded"
              />
              <span>Confidential Watermark</span>
            </label>
          </div>
        </div>

        {/* Pitchbook Canvas Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Slide 1: Executive Cover */}
          {activeSlide === "cover" && (
            <div className="relative rounded-2xl border border-neutral-800 bg-gradient-to-br from-[#12121f] via-[#0b0b12] to-[#141018] p-10 min-h-[420px] flex flex-col justify-between overflow-hidden shadow-2xl">
              {confidentialNDA && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] text-white font-black text-7xl rotate-[-25deg] select-none tracking-widest uppercase">
                  CONFIDENTIAL • {studioWatermark.toUpperCase()} • DO NOT DISTRIBUTE
                </div>
              )}

              {/* Top Meta */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#d4af61]/15 border border-[#d4af61]/40 rounded-full text-xs font-mono text-[#d4af61] tracking-widest uppercase font-bold">
                    OFFICIAL SHORTLIST PITCHBOOK
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    REF: RM-PITCH-2024-098
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    TARGET PLATFORM
                  </div>
                  <div className="text-sm font-bold text-white uppercase tracking-wider">
                    {studioWatermark === "prime" && "Amazon Prime Video Original"}
                    {studioWatermark === "netflix" && "Netflix Global Studios"}
                    {studioWatermark === "nfdc" && "NFDC Feature Co-Production"}
                    {studioWatermark === "zee" && "Zee Studios Theatrical"}
                  </div>
                </div>
              </div>

              {/* Main Headline */}
              <div className="my-8">
                <h1 className="text-4xl sm:text-5xl font-cinema font-black text-white tracking-wide leading-none mb-3">
                  {selectedProject}
                </h1>
                <p className="text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Confidential Executive Casting Presentation for Network Producers, Showrunners, and Studio Heads.
                  Comprehensive evaluation of shortlisted talent with screen test metrics, guild verification, and schedule locks.
                </p>
              </div>

              {/* Bottom Presentation Signoff */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-800/80 text-xs">
                <div>
                  <span className="text-neutral-500 uppercase tracking-wider font-mono block text-[10px]">Prepared By</span>
                  <span className="text-white font-semibold">Starlight Casting Co.</span>
                </div>
                <div>
                  <span className="text-neutral-500 uppercase tracking-wider font-mono block text-[10px]">Shortlisted Candidates</span>
                  <span className="text-[#d4af61] font-bold">4 Principal Performers</span>
                </div>
                <div>
                  <span className="text-neutral-500 uppercase tracking-wider font-mono block text-[10px]">Audit Clearance</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={12} /> CINTAA Guild 100%
                  </span>
                </div>
                <div>
                  <span className="text-neutral-500 uppercase tracking-wider font-mono block text-[10px]">Issue Date</span>
                  <span className="text-neutral-300 font-mono">October 26, 2026</span>
                </div>
              </div>
            </div>
          )}

          {/* Slide 2: Shortlist Overview Grid */}
          {activeSlide === "grid" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400">
                  Principal shortlisted candidates for <strong className="text-white">{selectedProject}</strong>
                </span>
                <span className="text-xs font-mono text-[#d4af61]">
                  4 Candidates • Ready for Producer Approval
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {CANDIDATES.map((c, i) => (
                  <div
                    key={i}
                    className="bg-[#12121a] border border-neutral-800 rounded-xl overflow-hidden hover:border-[#d4af61]/50 transition-all flex flex-col justify-between p-4 group"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-neutral-900 mb-3">
                        <Image
                          src={c.photo}
                          alt={c.name}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#d4af61] border border-[#d4af61]/30">
                          {c.score} MATCH
                        </div>
                      </div>

                      {/* Info */}
                      <h3 className="font-bold text-white text-sm leading-snug">{c.name}</h3>
                      <div className="text-[11px] text-[#d4af61] font-medium mb-1">{c.role}</div>
                      <div className="text-[10px] text-neutral-400 line-clamp-2 leading-relaxed mb-2">
                        {c.priorCredits}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-neutral-800/80 text-[11px] space-y-1">
                      <div className="flex justify-between text-neutral-400">
                        <span>Guild:</span>
                        <span className="text-neutral-200 font-mono">{c.guildStatus.split(" ")[0]}</span>
                      </div>
                      {includeFinancials && (
                        <div className="flex justify-between text-neutral-400">
                          <span>Est. Bracket:</span>
                          <span className="text-emerald-400 font-semibold">{c.expectedComp}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 3: Candidate Deep-Dive */}
          {activeSlide === "deep-dive" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400">Detailed Casting Director Scorecard &amp; Notes</span>
                <span className="text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 size={13} /> Audition Tapes Logged in Media Vault
                </span>
              </div>

              <div className="space-y-4">
                {CANDIDATES.map((c, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-neutral-800 bg-[#12121a] flex flex-col md:flex-row gap-5 items-start justify-between"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-neutral-900 flex-shrink-0 border border-neutral-800">
                        <Image src={c.photo} alt={c.name} fill className="object-cover object-top" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-white text-base">{c.name}</h4>
                          <span className="text-[10px] bg-[#d4af61]/15 text-[#d4af61] border border-[#d4af61]/30 px-2 py-0.5 rounded font-mono font-bold">
                            {c.score} Screen Match
                          </span>
                        </div>
                        <div className="text-xs text-[#d4af61] font-semibold">{c.role}</div>
                        <div className="text-xs text-neutral-400">{c.priorCredits}</div>
                        {includeAuditionNotes && (
                          <div className="mt-2 text-xs text-neutral-300 italic bg-[#171724] p-2.5 rounded-lg border border-neutral-800/60">
                            &ldquo;{c.directorVerdict}&rdquo;
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col md:items-end justify-between flex-shrink-0 text-xs md:text-right space-y-2 border-t md:border-t-0 pt-3 md:pt-0 border-neutral-800">
                      <div>
                        <span className="text-neutral-500 block text-[10px] font-mono">STATUS</span>
                        <span className="text-emerald-400 font-medium">Shortlisted for Round 2</span>
                      </div>
                      {includeFinancials && (
                        <div>
                          <span className="text-neutral-500 block text-[10px] font-mono">INDICATIVE FEE</span>
                          <span className="text-[#d4af61] font-mono font-bold">{c.expectedComp}</span>
                        </div>
                      )}
                      <div className="text-[10px] text-neutral-400 font-mono">
                        {c.guildStatus}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions Bar */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-[#12121a] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <Lock size={14} className="text-[#d4af61]" />
            <span>Encrypted PDF format with dynamic watermark protection.</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-semibold text-white flex items-center gap-2 transition-colors"
            >
              {copiedLink ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copiedLink ? "Link Copied!" : "Copy Executive Link"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#d4af61] to-[#b38e42] hover:from-[#e2be72] hover:to-[#c49d4f] text-black font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,97,0.3)] transition-all"
            >
              <Download size={14} />
              <span>Export Pitchbook PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
