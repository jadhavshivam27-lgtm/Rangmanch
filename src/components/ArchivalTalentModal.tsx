"use client";

import React, { useState } from "react";
import {
  X,
  Search,
  Star,
  Archive,
  History,
  Tag,
  Film,
  Building2,
  Send,
  Plus,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  Shield,
  Eye,
  Lock,
} from "lucide-react";
import Image from "next/image";

interface ArchivalTalentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ArchivalTalentModal({
  isOpen,
  onClose,
}: ArchivalTalentModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [minRating, setMinRating] = useState(4.0);
  const [reinviteSuccess, setReinviteSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const ARCHIVAL_RECORDS = [
    {
      id: "arc-1",
      name: "Ananya Sharma",
      gender: "Female",
      screenAge: "22–28",
      photo: "/photos/real_01.png",
      guild: "CINTAA Verified",
      pastRating: 4.9,
      tags: ["Classical Dancer", "Period Drama Face", "Awadhi Dialect", "FTII Alum"],
      pastAuditions: [
        { project: "Kaarvan (Feature, 2023)", role: "Lead Finalist", result: "Runner Up (Screen Age Match)" },
        { project: "Dhoop Ki Deewar (Short, 2022)", role: "Lead", result: "Cast & Booked" },
      ],
      confidentialNotes: "Exceptional emotional stillness. In 2023 audition she held a 3-minute silent scene with remarkable eye micro-expressions. First priority recommendation for any period drama or historical epic.",
      location: "Mumbai / Pune",
    },
    {
      id: "arc-2",
      name: "Shivam Jadhav",
      gender: "Male",
      screenAge: "22–29",
      photo: "/photos/real_03.jpg",
      guild: "CINTAA Verified",
      pastRating: 4.8,
      tags: ["Raw Look", "Urban Grit", "Contemporary Hindi", "Action Stunts"],
      pastAuditions: [
        { project: "Antim Prahar (Feature, 2024)", role: "Dev / Inspector", result: "Shortlisted" },
        { project: "Dhoop Ki Deewar (Short, 2023)", role: "Lead Male", result: "Cast & Booked" },
      ],
      confidentialNotes: "Naturalistic street-level grit. Does not overplay dramatic scenes; grounded dialogue delivery. Strong physicality for pursuit/combat choreography.",
      location: "Mumbai",
    },
    {
      id: "arc-3",
      name: "Meera Nair",
      gender: "Female",
      screenAge: "24–32",
      photo: "/photos/real_02.png",
      guild: "CINTAA Verified",
      pastRating: 4.85,
      tags: ["Kathakali Virtuoso", "South Regional", "Malayalam/Tamil", "Intense Stillness"],
      pastAuditions: [
        { project: "Neel (Pan-India Feature, 2024)", role: "IPS Officer", result: "Top 3 Finalist" },
        { project: "State Award Production (2023)", role: "Lead", result: "Winner" },
      ],
      confidentialNotes: "Rare blend of classical performance technique and contemporary cinematic pacing. Highly versatile for pan-India bilingual projects.",
      location: "Kochi / Mumbai",
    },
    {
      id: "arc-4",
      name: "Rohan Kapoor",
      gender: "Male",
      screenAge: "25–34",
      photo: "/photos/real_07.jpg",
      guild: "CINTAA Verified",
      pastRating: 4.7,
      tags: ["Baritone Voice", "Antagonist", "NSD Trained", "Stage Monologue"],
      pastAuditions: [
        { project: "Hollow Nights (OTT, 2024)", role: "Cyber Forensics", result: "Shortlisted" },
        { project: "Manto Ki Duniya (Theatre, 2023)", role: "Lead Male", result: "Touring Lead" },
      ],
      confidentialNotes: "Imposing stage presence with deep vocal resonance. Great at playing characters with hidden moral ambiguity.",
      location: "Delhi NCR",
    },
    {
      id: "arc-5",
      name: "Priya Krishnamurthy",
      gender: "Female",
      screenAge: "22–28",
      photo: "/photos/female_03_headshot.jpg",
      guild: "CINTAA Verified",
      pastRating: 4.6,
      tags: ["Bilingual Presenter", "Telugu/Hindi", "Expressive Eyes", "Screen Charisma"],
      pastAuditions: [
        { project: "Hyderabad Web Series (2024)", role: "Anchor / Host", result: "Cast & Booked" },
        { project: "Noor (Short Film, 2024)", role: "Lead", result: "Shortlisted" },
      ],
      confidentialNotes: "Warm, articulate camera presence. Strong diction in Telugu, Tamil, and Hindi. Ideal for corporate ads, festival films, and sophisticated drama.",
      location: "Hyderabad / Mumbai",
    },
  ];

  const TAGS = [
    { id: "all", label: "All Tags" },
    { id: "Period Drama Face", label: "Period Drama Face" },
    { id: "Raw Look", label: "Raw Look" },
    { id: "Classical Dancer", label: "Classical Dancer" },
    { id: "Baritone Voice", label: "Baritone Voice" },
    { id: "FTII Alum", label: "FTII / NSD" },
  ];

  const filteredRecords = ARCHIVAL_RECORDS.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      r.pastAuditions.some((p) => p.project.toLowerCase().includes(searchQuery.toLowerCase())) ||
      r.confidentialNotes.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag === "all" || r.tags.includes(selectedTag);
    const matchesRating = r.pastRating >= minRating;

    return matchesSearch && matchesTag && matchesRating;
  });

  const handleReinvite = (talentName: string) => {
    setReinviteSuccess(talentName);
    setTimeout(() => setReinviteSuccess(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-5xl bg-[#0e0e14] border border-[#d4af61]/40 rounded-2xl shadow-[0_0_60px_rgba(212,175,97,0.18)] flex flex-col max-h-[92vh] overflow-hidden text-neutral-200">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#12121c]/90">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#d4af61]/20 to-[#d4af61]/5 border border-[#d4af61]/40 flex items-center justify-center text-[#d4af61]">
              <Archive size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-[#d4af61] uppercase font-bold">
                  Feature #30 • Studio Talent Archive
                </span>
                <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-mono">
                  CONFIDENTIAL STUDIO DATABASE
                </span>
              </div>
              <h2 className="text-lg font-cinema font-bold text-white tracking-wide">
                Studio Archival Talent Database &amp; Historical Auditions
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

        {/* Search & Filter Header Bar */}
        <div className="p-6 bg-[#141420] border-b border-neutral-800 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500"
              />
              <input
                type="text"
                placeholder="Search archive by actor name, past project (e.g. Kaarvan, Dhoop Ki Deewar), or tags (e.g. Raw Look, Awadhi)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0e0e14] border border-neutral-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af61]"
              />
            </div>

            {/* Minimum Rating Filter */}
            <div className="flex items-center gap-2 bg-[#0e0e14] border border-neutral-700 rounded-xl px-3 py-2 text-xs">
              <Star size={14} className="text-[#d4af61] fill-[#d4af61]" />
              <span className="text-neutral-400">Min Rating:</span>
              <select
                value={minRating}
                onChange={(e) => setMinRating(parseFloat(e.target.value))}
                className="bg-transparent text-[#d4af61] font-bold focus:outline-none"
              >
                <option value={4.0} className="bg-[#12121a]">4.0+ Stars</option>
                <option value={4.5} className="bg-[#12121a]">4.5+ Stars</option>
                <option value={4.8} className="bg-[#12121a]">4.8+ Stars</option>
              </select>
            </div>
          </div>

          {/* Tag Pills */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-neutral-500 font-mono text-[11px] uppercase mr-1">
              Quick Filter:
            </span>
            {TAGS.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTag(t.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  selectedTag === t.id
                    ? "bg-[#d4af61] text-black font-semibold"
                    : "bg-[#1d1d2b] text-neutral-300 hover:bg-[#28283c] border border-neutral-800"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Talent List Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {reinviteSuccess && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-2 text-xs text-emerald-400">
              <CheckCircle2 size={16} />
              <span>
                Priority Audition Invitation dispatched to <strong>{reinviteSuccess}</strong> with fast-track callback status!
              </span>
            </div>
          )}

          <div className="flex justify-between items-center text-xs text-neutral-400">
            <span>
              Showing <strong>{filteredRecords.length}</strong> archived studio performers
            </span>
            <span className="font-mono text-[#d4af61]">
              Encrypted Studio Internal Records • 2022–2026 Archive
            </span>
          </div>

          <div className="space-y-4">
            {filteredRecords.map((r) => (
              <div
                key={r.id}
                className="p-5 rounded-2xl border border-neutral-800 bg-[#12121c] hover:border-[#d4af61]/40 transition-all flex flex-col md:flex-row gap-5 items-start justify-between group"
              >
                {/* Left: Performer Snapshot */}
                <div className="flex gap-4 items-start flex-1">
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 flex-shrink-0">
                    <Image src={r.photo} alt={r.name} fill className="object-cover object-top" />
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-white text-base leading-none">{r.name}</h3>
                      <span className="text-[11px] text-neutral-400">({r.gender}, Age {r.screenAge})</span>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">
                        {r.guild}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-[#d4af61] font-bold ml-auto sm:ml-0">
                        <Star size={13} className="fill-[#d4af61]" />
                        <span>{r.pastRating.toFixed(1)} / 5.0</span>
                      </div>
                    </div>

                    {/* Tag Pills */}
                    <div className="flex gap-1.5 flex-wrap">
                      {r.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-[#1a1a28] text-neutral-300 border border-neutral-800 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Past Audition Records */}
                    <div className="pt-2 text-xs">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                        Historical Audition Records:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {r.pastAuditions.map((aud, i) => (
                          <div
                            key={i}
                            className="text-[11px] bg-[#181826] px-2.5 py-1 rounded-lg border border-neutral-800/80 flex items-center gap-1.5"
                          >
                            <Film size={11} className="text-[#d4af61]" />
                            <span className="text-white font-medium">{aud.project}</span>
                            <span className="text-neutral-400 font-mono">({aud.role})</span>
                            <span className="text-emerald-400 text-[10px] font-semibold font-mono">
                              • {aud.result}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Director Confidential Note */}
                    <div className="text-xs bg-[#171724] p-3 rounded-xl border border-neutral-800/70 text-neutral-300 leading-relaxed italic flex items-start gap-2">
                      <Lock size={12} className="text-[#d4af61] mt-0.5 flex-shrink-0" />
                      <span>&ldquo;{r.confidentialNotes}&rdquo;</span>
                    </div>
                  </div>
                </div>

                {/* Right: Direct Re-Invite Action */}
                <div className="flex flex-col gap-2 w-full md:w-auto flex-shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-neutral-800">
                  <button
                    onClick={() => handleReinvite(r.name)}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af61] to-[#b38e42] hover:from-[#e2be72] hover:to-[#c49d4f] text-black font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(212,175,97,0.2)] transition-all"
                  >
                    <Send size={13} />
                    <span>Fast-Track Invite</span>
                  </button>

                  <div className="text-[10px] font-mono text-neutral-500 text-center">
                    Auto-attaches historical scorecard
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-[#12121a] flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-emerald-400" />
            <span>DPDPA 2023 &amp; CINTAA Confidentiality Protected. Internal Casting Directors Only.</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-semibold transition-colors"
          >
            Close Archive
          </button>
        </div>
      </div>
    </div>
  );
}
