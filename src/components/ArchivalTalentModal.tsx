"use client";

import React, { useState } from "react";
import {
  X,
  Archive,
  Search,
  Star,
  Film,
  Award,
  Video,
  Send,
  UserCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Shield,
  Lock,
} from "lucide-react";
import Image from "next/image";

interface ArchivalTalentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFastTrackInvite?: (actorName: string) => void;
}

export default function ArchivalTalentModal({
  isOpen,
  onClose,
  onFastTrackInvite,
}: ArchivalTalentModalProps) {
  // 4-Step Reference Stepper:
  // Step 1: Vault Search (Query, Look Tags & Rating Filters)
  // Step 2: Historical Records (Audition Vault Roster)
  // Step 3: Director Evaluation (Critique, Dialect & Performance Dossier)
  // Step 4: Fast-Track Invite (Direct Pipeline Re-invite)
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [minRating, setMinRating] = useState<number>(4.0);
  const [selectedActorId, setSelectedActorId] = useState<string>("arch-1");
  const [invitedActors, setInvitedActors] = useState<string[]>([]);
  const [justInvited, setJustInvited] = useState(false);

  const ARCHIVAL_RECORDS = [
    {
      id: "arch-1",
      name: "Ananya Sharma",
      age: 24,
      photo: "/photos/real_01.png",
      rating: 4.9,
      tags: ["Period Drama Face", "Classical Dancer", "FTII Graduate", "Urdu Diction"],
      pastAudition: {
        project: "Kaarvan (2023)",
        roleAuditioned: "Zoya — Freedom Fighter",
        director: "Shoojit Sircar",
        auditionDate: "March 2023",
        directorNotes:
          "Exceptional stillness and vocal control. Nailed the emotional break in take 2 without over-emoting. Recommended for historical and high-tension roles.",
        tapeDuration: "03:42",
        tapeThumbnail: "/photos/real_01.png",
      },
      skills: ["Hindustani Classical Singing", "Kathak", "Horse Riding"],
      languages: ["Hindi (Native)", "Urdu (Fluent)", "English (Fluent)"],
      status: "Available for Direct Callback",
      directorScore: {
        screenPresence: 98,
        diction: 95,
        emotionalDepth: 97,
        lookMatch: 96,
      },
    },
    {
      id: "arch-2",
      name: "Shivam Jadhav",
      age: 25,
      photo: "/photos/real_03.jpg",
      rating: 4.8,
      tags: ["Raw Look", "Athletic", "Intense Presence", "Marathi Native"],
      pastAudition: {
        project: "Dhoop Ki Deewar (2024)",
        roleAuditioned: "Inspector Kabir Rao",
        director: "Neeraj Pandey",
        auditionDate: "January 2024",
        directorNotes:
          "Commanding physical stance. Highly disciplined dialogue delivery in gritty action scenes. Excellent physical agility.",
        tapeDuration: "04:15",
        tapeThumbnail: "/photos/real_03.jpg",
      },
      skills: ["MMA / Stage Combat", "Bike Stunts", "Method Acting"],
      languages: ["Hindi", "Marathi", "English"],
      status: "Available for Direct Callback",
      directorScore: {
        screenPresence: 96,
        diction: 93,
        emotionalDepth: 94,
        lookMatch: 97,
      },
    },
    {
      id: "arch-3",
      name: "Meera Nair",
      age: 26,
      photo: "/photos/real_02.png",
      rating: 4.7,
      tags: ["Classical Dancer", "Subtle Expressiveness", "South Accents"],
      pastAudition: {
        project: "The Silent Valley (2023)",
        roleAuditioned: "Kalyani — Botanist",
        director: "Mani Ratnam",
        auditionDate: "August 2023",
        directorNotes:
          "Eyes convey volumes. Rare classical grounding that makes high-concept period and literary adaptations authentic.",
        tapeDuration: "03:10",
        tapeThumbnail: "/photos/real_02.png",
      },
      skills: ["Bharatanatyam", "Carnatic Vocals", "Archery"],
      languages: ["Malayalam", "Tamil", "Hindi", "English"],
      status: "Available for Direct Callback",
      directorScore: {
        screenPresence: 94,
        diction: 96,
        emotionalDepth: 95,
        lookMatch: 95,
      },
    },
    {
      id: "arch-4",
      name: "Rohan Kapoor",
      age: 28,
      photo: "/photos/real_07.jpg",
      rating: 4.6,
      tags: ["Baritone Voice", "NSD Alumnus", "Character Actor", "Stagecraft"],
      pastAudition: {
        project: "Hollow Nights (2022)",
        roleAuditioned: "Malik — Guild Enforcer",
        director: "Anurag Kashyap",
        auditionDate: "November 2022",
        directorNotes:
          "Baritone resonance fills the room. Intense gaze and natural stage restraint. Can play complex grey shades effortlessly.",
        tapeDuration: "05:01",
        tapeThumbnail: "/photos/real_07.jpg",
      },
      skills: ["Theatre Direction", "Voice Modulation", "Fencing"],
      languages: ["Hindi", "Punjabi", "Urdu", "English"],
      status: "Available for Direct Callback",
      directorScore: {
        screenPresence: 95,
        diction: 98,
        emotionalDepth: 92,
        lookMatch: 93,
      },
    },
  ];

  if (!isOpen) return null;

  const filteredRecords = ARCHIVAL_RECORDS.filter((rec) => {
    const matchesQuery =
      searchQuery === "" ||
      rec.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.pastAudition.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = !selectedTag || rec.tags.includes(selectedTag);
    const matchesRating = rec.rating >= minRating;

    return matchesQuery && matchesTag && matchesRating;
  });

  const selectedRecord =
    ARCHIVAL_RECORDS.find((r) => r.id === selectedActorId) || ARCHIVAL_RECORDS[0];

  const handleInvite = (id: string, name: string) => {
    if (!invitedActors.includes(id)) {
      setInvitedActors([...invitedActors, id]);
      setJustInvited(true);
      setTimeout(() => setJustInvited(false), 2500);
      if (onFastTrackInvite) onFastTrackInvite(name);
    }
  };

  const ALL_TAGS = [
    "Period Drama Face",
    "Raw Look",
    "Classical Dancer",
    "Baritone Voice",
    "FTII Graduate",
    "NSD Alumnus",
  ];

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "740px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(212, 175, 97, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(212,175,97,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Gold Gradient Trim */}
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
                boxShadow: "0 0 20px rgba(212,175,97,0.15)",
                flexShrink: 0,
              }}
            >
              <Archive size={24} />
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
                  color: "#d4af61",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                <span>✦ MODULE M030</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                <span style={{ color: "#34d399" }}>TALENT ARCHIVE</span>
              </div>
              <h2
                className="font-cinema"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Private Studio Archival Performer Database
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#9a9aa8",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
              e.currentTarget.style.color = "#9a9aa8";
            }}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* 4-Step Interactive Visual Stepper */}
        <div
          style={{
            padding: "16px 32px",
            backgroundColor: "#07070c",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
            {[
              { n: 1, label: "Vault Search", sub: "Filters & Tags" },
              { n: 2, label: "Audition Records", sub: "Tapes & Ratings" },
              { n: 3, label: "Director Dossier", sub: "Evaluation Notes" },
              { n: 4, label: "Fast-Track", sub: "Direct Pipeline" },
            ].map((s, idx, arr) => {
              const isCurrent = step === s.n;
              const isDone = step > s.n;
              return (
                <div
                  key={s.n}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flex: idx === arr.length - 1 ? "0 0 auto" : 1,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: 700,
                        fontFamily: "monospace",
                        backgroundColor: isDone
                          ? "#059669"
                          : isCurrent
                          ? "rgba(212,175,97,0.2)"
                          : "#14141e",
                        border: isDone
                          ? "2px solid #10b981"
                          : isCurrent
                          ? "2px solid #d4af61"
                          : "1px solid rgba(255,255,255,0.12)",
                        color: isDone ? "#ffffff" : isCurrent ? "#f4e2b8" : "#606070",
                        boxShadow: isCurrent ? "0 0 15px rgba(212,175,97,0.4)" : "none",
                        transition: "all 0.3s ease",
                        flexShrink: 0,
                      }}
                    >
                      {isDone ? <Check size={14} /> : s.n}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: isCurrent ? 700 : 500,
                          color: isDone ? "#34d399" : isCurrent ? "#ffffff" : "#606070",
                          lineHeight: 1.2,
                        }}
                      >
                        {s.label}
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: isCurrent ? "#d4af61" : "#4a4a58",
                          fontFamily: "monospace",
                        }}
                      >
                        {s.sub}
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {idx < arr.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        height: "2px",
                        margin: "0 14px",
                        backgroundColor: isDone ? "#10b981" : "rgba(255,255,255,0.08)",
                        transition: "background-color 0.3s ease",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Body */}
        <div
          className="modal-body"
          style={{
            padding: "28px 32px",
            maxHeight: "58vh",
            overflowY: "auto",
            backgroundColor: "#0d0d14",
          }}
        >
          {/* STEP 1: Vault Search */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {/* Highlight Banner */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(212,175,97,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(212,175,97,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontFamily: "monospace",
                      letterSpacing: "0.15em",
                      color: "#d4af61",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    STUDIO AUDITION ARCHIVE
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}
                  >
                    Internal Performer Intelligence &amp; Prior Screen Tests
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(212,175,97,0.15)",
                    color: "#f4e2b8",
                    border: "1px solid rgba(212,175,97,0.35)",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                  }}
                >
                  CONFIDENTIAL VAULT
                </span>
              </div>

              {/* Search Bar Input */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#9a9aa8",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  QUERY ARCHIVE BY ACTOR, PROJECT, OR ATTRIBUTE
                </label>
                <div
                  style={{
                    backgroundColor: "#14141e",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "12px",
                    padding: "2px 14px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Search size={16} color="#d4af61" style={{ marginRight: "10px", flexShrink: 0 }} />
                  <input
                    type="text"
                    placeholder="Search by actor name (e.g., Ananya), past project (e.g., Kaarvan), or skill..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 0",
                      backgroundColor: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  />
                </div>
              </div>

              {/* Tag Filters */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#9a9aa8",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  CURATED LOOK &amp; TRAINING TAGS
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <button
                    type="button"
                    onClick={() => setSelectedTag(null)}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "8px",
                      fontSize: "11px",
                      fontFamily: "monospace",
                      backgroundColor: selectedTag === null ? "#d4af61" : "#14141e",
                      color: selectedTag === null ? "#000000" : "#a0a0b2",
                      border: "1px solid rgba(255,255,255,0.1)",
                      cursor: "pointer",
                      fontWeight: selectedTag === null ? 700 : 500,
                    }}
                  >
                    All Tags
                  </button>
                  {ALL_TAGS.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "8px",
                        fontSize: "11px",
                        fontFamily: "monospace",
                        backgroundColor: selectedTag === tag ? "#d4af61" : "#14141e",
                        color: selectedTag === tag ? "#000000" : "#a0a0b2",
                        border: "1px solid rgba(255,255,255,0.1)",
                        cursor: "pointer",
                        fontWeight: selectedTag === tag ? 700 : 500,
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Minimum Rating Selector */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#9a9aa8",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  MINIMUM DIRECTOR HISTORICAL RATING
                </label>
                <div style={{ display: "flex", gap: "10px" }}>
                  {[4.0, 4.5, 4.8].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setMinRating(r)}
                      style={{
                        flex: 1,
                        padding: "10px",
                        borderRadius: "10px",
                        backgroundColor: minRating === r ? "rgba(212,175,97,0.18)" : "#14141e",
                        border: minRating === r ? "1px solid #d4af61" : "1px solid rgba(255,255,255,0.1)",
                        color: minRating === r ? "#f4e2b8" : "#9a9aa8",
                        fontSize: "12px",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      <Star size={13} fill={minRating === r ? "#d4af61" : "none"} color="#d4af61" />
                      {r}+ Stars
                    </button>
                  ))}
                </div>
              </div>

              {/* Statutory Legal Notice Card */}
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(212,175,97,0.06) 0%, rgba(14,14,20,0.6) 100%)",
                  border: "1px solid rgba(212,175,97,0.22)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#d4af61",
                      fontWeight: 700,
                      fontSize: "12px",
                    }}
                  >
                    <Lock size={14} />
                    <span>Internal Studio Data Governance (DPDP Act 2023)</span>
                  </div>
                  <span
                    style={{
                      fontSize: "9px",
                      fontFamily: "monospace",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(212,175,97,0.15)",
                      color: "#f4e2b8",
                      border: "1px solid rgba(212,175,97,0.3)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    PRIVATE VAULT
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "11px", color: "#8e8e98", lineHeight: 1.6 }}>
                  Historical audition footage and director scores stored in this archive are private intellectual property of Starlight Casting Co. and affiliated production studios.
                </p>
              </div>
            </div>
          )}

          {/* STEP 2: Historical Records */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: "12px",
                  backgroundColor: "#12121c",
                  border: "1px solid rgba(212,175,97,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                    Archived Screen Tests ({filteredRecords.length} Matches)
                  </div>
                  <div style={{ fontSize: "11px", color: "#8e8e98" }}>
                    Select an actor to inspect their historical audition notes and director critique.
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "monospace",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(52,211,153,0.1)",
                    color: "#34d399",
                    border: "1px solid rgba(52,211,153,0.3)",
                  }}
                >
                  VERIFIED AUDITIONS
                </span>
              </div>

              {/* Records List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {filteredRecords.map((rec) => (
                  <div
                    key={rec.id}
                    onClick={() => setSelectedActorId(rec.id)}
                    style={{
                      padding: "14px 18px",
                      borderRadius: "14px",
                      backgroundColor: selectedActorId === rec.id ? "#141424" : "#0d0d14",
                      border:
                        selectedActorId === rec.id
                          ? "2px solid #d4af61"
                          : "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div
                        style={{
                          position: "relative",
                          width: "50px",
                          height: "50px",
                          borderRadius: "12px",
                          overflow: "hidden",
                          border: "1px solid rgba(212,175,97,0.3)",
                          flexShrink: 0,
                        }}
                      >
                        <Image src={rec.photo} alt={rec.name} fill className="object-cover" />
                      </div>

                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                            {rec.name}
                          </span>
                          <span
                            style={{
                              fontSize: "10px",
                              fontFamily: "monospace",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              backgroundColor: "rgba(212,175,97,0.15)",
                              color: "#d4af61",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "3px",
                            }}
                          >
                            <Star size={10} fill="#d4af61" color="#d4af61" /> {rec.rating}
                          </span>
                        </div>
                        <div style={{ fontSize: "11px", color: "#34d399", fontWeight: 600 }}>
                          Past Project: {rec.pastAudition.project} ({rec.pastAudition.roleAuditioned})
                        </div>
                        <div style={{ fontSize: "10px", color: "#8e8e98" }}>
                          Director: {rec.pastAudition.director} • {rec.pastAudition.auditionDate}
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <span
                        style={{
                          fontSize: "10px",
                          fontFamily: "monospace",
                          padding: "3px 8px",
                          borderRadius: "4px",
                          backgroundColor:
                            selectedActorId === rec.id
                              ? "rgba(212,175,97,0.2)"
                              : "rgba(255,255,255,0.06)",
                          color: selectedActorId === rec.id ? "#f4e2b8" : "#8e8e98",
                        }}
                      >
                        {selectedActorId === rec.id ? "SELECTED" : "CLICK TO VIEW"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Director Evaluation Dossier */}
          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(212,175,97,0.08) 0%, rgba(14,14,20,0.8) 100%)",
                  border: "1px solid rgba(212,175,97,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={selectedRecord.photo}
                      alt={selectedRecord.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}>
                      {selectedRecord.name} ({selectedRecord.age} Yrs)
                    </div>
                    <div style={{ fontSize: "11px", color: "#d4af61", fontFamily: "monospace" }}>
                      Audition Record: {selectedRecord.pastAudition.project}
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontFamily: "monospace",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(52,211,153,0.15)",
                    color: "#34d399",
                    border: "1px solid rgba(52,211,153,0.3)",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                  }}
                >
                  DIRECTOR VERIFIED
                </span>
              </div>

              {/* Director Critique Note */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#9a9aa8",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  HISTORICAL DIRECTOR CRITIQUE ({selectedRecord.pastAudition.director})
                </label>
                <div
                  style={{
                    padding: "14px 16px",
                    borderRadius: "12px",
                    backgroundColor: "#14141e",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#e2e2ec",
                    fontSize: "12px",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{selectedRecord.pastAudition.directorNotes}&rdquo;
                </div>
              </div>

              {/* Quantitative Metrics Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px" }}>
                {[
                  { label: "Screen Presence", val: selectedRecord.directorScore.screenPresence },
                  { label: "Dialect Diction", val: selectedRecord.directorScore.diction },
                  { label: "Emotional Depth", val: selectedRecord.directorScore.emotionalDepth },
                  { label: "Look Match", val: selectedRecord.directorScore.lookMatch },
                ].map((m) => (
                  <div
                    key={m.label}
                    style={{
                      padding: "12px",
                      borderRadius: "10px",
                      backgroundColor: "#12121c",
                      border: "1px solid rgba(255,255,255,0.08)",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "18px", fontWeight: 800, color: "#d4af61" }}>
                      {m.val}%
                    </div>
                    <div style={{ fontSize: "9px", color: "#8e8e98", fontFamily: "monospace" }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Dialects and Skills */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div
                  style={{
                    padding: "12px 14px",
                    borderRadius: "10px",
                    backgroundColor: "#0d0d14",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div style={{ fontSize: "10px", color: "#9a9aa8", fontFamily: "monospace", marginBottom: "4px" }}>
                    LANGUAGES &amp; DIALECTS
                  </div>
                  <div style={{ fontSize: "12px", color: "#ffffff" }}>
                    {selectedRecord.languages.join(" • ")}
                  </div>
                </div>

                <div
                  style={{
                    padding: "12px 14px",
                    borderRadius: "10px",
                    backgroundColor: "#0d0d14",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div style={{ fontSize: "10px", color: "#9a9aa8", fontFamily: "monospace", marginBottom: "4px" }}>
                    PERFORMANCE SKILLS
                  </div>
                  <div style={{ fontSize: "12px", color: "#ffffff" }}>
                    {selectedRecord.skills.join(" • ")}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Fast-Track Invite */}
          {step === 4 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <div
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, rgba(212,175,97,0.12) 0%, rgba(14,14,20,0.85) 100%)",
                  border: "1px solid rgba(212,175,97,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "9px",
                      fontFamily: "monospace",
                      letterSpacing: "0.15em",
                      color: "#34d399",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <CheckCircle2 size={12} color="#34d399" />
                    FAST-TRACK AUDITION INVITATION PIPELINE
                  </div>
                  <div
                    className="font-cinema"
                    style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff" }}
                  >
                    Invite {selectedRecord.name} to Active Production
                  </div>
                  <div style={{ fontSize: "12px", color: "#a0a0b2", marginTop: "4px" }}>
                    Bypasses Round 1 public screening and directly books into Round 2 callbacks.
                  </div>
                </div>
              </div>

              {/* Fast Track Action Card */}
              <div
                onClick={() => handleInvite(selectedRecord.id, selectedRecord.name)}
                style={{
                  padding: "24px",
                  borderRadius: "14px",
                  backgroundColor: invitedActors.includes(selectedRecord.id)
                    ? "rgba(52,211,153,0.12)"
                    : "#141422",
                  border: invitedActors.includes(selectedRecord.id)
                    ? "1px solid #10b981"
                    : "1px solid rgba(212,175,97,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.2s",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    backgroundColor: invitedActors.includes(selectedRecord.id)
                      ? "rgba(52,211,153,0.2)"
                      : "rgba(212,175,97,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: invitedActors.includes(selectedRecord.id) ? "#34d399" : "#d4af61",
                  }}
                >
                  {invitedActors.includes(selectedRecord.id) ? (
                    <Check size={24} />
                  ) : (
                    <Send size={22} />
                  )}
                </div>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>
                    {invitedActors.includes(selectedRecord.id)
                      ? "Fast-Track Invitation Dispatched!"
                      : `Issue Fast-Track Audition Invite to ${selectedRecord.name}`}
                  </div>
                  <div style={{ fontSize: "12px", color: "#8e8e98", marginTop: "4px" }}>
                    Transfers performer history directly to active callback shortlisted pool.
                  </div>
                </div>
              </div>

              {/* Studio Compliance Footer Notice */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: "12px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Shield size={16} color="#d4af61" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: "11px", color: "#8e8e98", lineHeight: 1.5 }}>
                  Fast-track invitations are recorded on the performer&apos;s verified Rangmanch ledger and comply with CINTAA fair casting regulations.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: "20px 32px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "#0d0d14",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "11px",
              fontFamily: "monospace",
              color: "#8e8e98",
            }}
          >
            <Shield size={14} color="#d4af61" />
            <span>PRIVATE STUDIO AUDITION VAULT</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev - 1) as any)}
                style={{
                  height: "44px",
                  padding: "0 20px",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#d0d0dc",
                  borderRadius: "999px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                }}
              >
                <ArrowLeft size={14} /> BACK
              </button>
            )}

            {step < 4 && (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev + 1) as any)}
                className="btn-cinema-gold"
                style={{
                  height: "44px",
                  padding: "0 28px",
                  fontSize: "12px",
                }}
              >
                {step === 1 && "PROCEED TO AUDITION RECORDS"}
                {step === 2 && "PROCEED TO DIRECTOR DOSSIER"}
                {step === 3 && "PROCEED TO FAST-TRACK INVITE"}
                <ArrowRight size={14} />
              </button>
            )}

            {step === 4 && (
              <button
                type="button"
                onClick={onClose}
                className="btn-cinema-gold"
                style={{
                  height: "44px",
                  padding: "0 28px",
                  fontSize: "12px",
                }}
              >
                CLOSE TALENT VAULT
                <CheckCircle2 size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
