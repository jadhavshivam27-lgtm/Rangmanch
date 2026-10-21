"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompCard from "@/components/CompCard";
import AIBioOptimizerModal from "@/components/AIBioOptimizerModal";
import { DEMO_TALENT } from "@/lib/data";
import {
  ChevronLeft,
  Video,
  Mic,
  Film,
  Award,
  Sparkles,
  Shield,
  Calendar,
  Mail,
  Share2,
  Play,
  CheckCircle,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export default function TalentProfileDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--charcoal-900)]" />}>
      <TalentProfileDetailContent />
    </Suspense>
  );
}

function TalentProfileDetailContent() {
  const params = useParams();
  const id = params?.id as string;

  // Find talent or fallback to first
  const initialTalent = DEMO_TALENT.find((t) => t.id === id) || DEMO_TALENT[0];
  const [talent, setTalent] = useState(initialTalent);

  // Modals state
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isPlayingReel, setIsPlayingReel] = useState(false);

  const handleApplyBio = (newBio: string) => {
    setTalent((prev) => ({ ...prev, bio: newBio }));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--charcoal-900)] text-[var(--ivory)] pt-8 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Top Nav Back Link & Actions */}
          <div className="flex items-center justify-between">
            <Link
              href="/talent"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--gold-300)] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Talent Directory</span>
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Actor Comp Card link copied to clipboard!");
                }}
                className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Profile</span>
              </button>

              <button
                onClick={() => setIsInviteModalOpen(true)}
                className="btn-primary text-xs py-1.5 px-4 font-bold flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Invite to Audition</span>
              </button>
            </div>
          </div>

          {/* 1. Digital Comp Card Component (4-Angle Headshots & Physical Specs) */}
          <CompCard
            displayName={talent.displayName}
            stageName={talent.stageName}
            headshots={[
              talent.profilePhoto || "/talent1.jpg",
              "/talent2.jpg",
              "/talent3.jpg",
              "/talent4.jpg",
            ]}
            heightFeet={'5\'9"'}
            heightCm={175}
            screenAgeRange={`${talent.ageMin} – ${talent.ageMax} Years`}
            eyeColor="Dark Brown"
            hairColor="Black / Natural Wave"
            bodyType="Athletic / Screen-Ready"
            dialects={talent.languages.map((l) => ({
              language: l,
              dialect: "Standard & Regional Register",
              fluency: "Native / Fluent",
            }))}
            cintaaVerified={true}
          />

          {/* 2. Interactive AI Bio Showcase */}
          <div
            className="p-6 sm:p-8 rounded-3xl border space-y-4"
            style={{
              background: "var(--charcoal-800)",
              borderColor: "rgba(201, 168, 76, 0.2)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="badge badge-gold text-[10px]">CASTING BIOGRAPHY</span>
                <span className="badge badge-purple flex items-center gap-1 text-[10px]">
                  <Sparkles className="w-3 h-3" /> AI Optimized Pitch
                </span>
              </div>

              <button
                onClick={() => setIsBioModalOpen(true)}
                className="text-xs text-[var(--gold-400)] hover:text-[var(--gold-300)] font-semibold flex items-center gap-1 underline underline-offset-4"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Re-craft with AI Bio Optimizer</span>
              </button>
            </div>

            <p className="text-sm text-gray-200 leading-relaxed font-sans max-w-4xl">
              {talent.bio}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[var(--text-muted)] border-t border-white/5">
              <span><strong>Training:</strong> {talent.education || "FTII Acting Intensive"}</span>
              <span><strong>Availability:</strong> {talent.availabilityNote || "Immediate / Multi-City"}</span>
              <span><strong>Representation:</strong> Independent Performer</span>
            </div>
          </div>

          {/* 3. Media Vault: Video Showreel & Voiceover Clips Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Video Monologue Showreel (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div
                className="p-6 rounded-3xl border space-y-4"
                style={{
                  background: "var(--charcoal-800)",
                  borderColor: "rgba(201, 168, 76, 0.2)",
                }}
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-[var(--gold-400)]" />
                    <h3 className="font-display font-bold text-lg text-[var(--ivory)]">
                      Primary Dramatic Showreel
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[var(--text-muted)]">2m 14s • 1080p HD</span>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/80 flex items-center justify-center border border-white/10 group">
                  <div className="text-center p-6 space-y-3">
                    <button
                      onClick={() => setIsPlayingReel(!isPlayingReel)}
                      className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-[var(--gold-500)] text-[var(--charcoal-900)] shadow-xl shadow-[var(--gold-500)]/30 hover:scale-110 transition-transform"
                    >
                      <Play className="w-7 h-7 ml-1 fill-current" />
                    </button>
                    <div>
                      <div className="font-bold text-sm text-[var(--ivory)]">
                        {talent.displayName} — Dramatic Monologue &amp; Scene Cuts (2024)
                      </div>
                      <div className="text-xs text-[var(--text-muted)] mt-0.5">
                        Includes Awadhi dialect police interrogation &amp; contemporary urban drama.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Audio Voice Vault & Dialect Clips (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div
                className="p-6 rounded-3xl border space-y-4 flex flex-col justify-between"
                style={{
                  background: "var(--charcoal-800)",
                  borderColor: "rgba(201, 168, 76, 0.2)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                    <div className="flex items-center gap-2">
                      <Mic className="w-4 h-4 text-purple-400" />
                      <h3 className="font-display font-bold text-lg text-[var(--ivory)]">
                        Voice Vault &amp; Dubbing
                      </h3>
                    </div>
                    <span className="badge badge-purple text-[10px]">3 SAMPLES</span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: "Hindi — Intense Dramatic Monologue", duration: "0:45", dialect: "Native Standard" },
                      { title: "Awadhi / Eastern UP Dialect Sample", duration: "0:38", dialect: "Rural Accent" },
                      { title: "English — Commercial & Corporate Voiceover", duration: "0:30", dialect: "Neutral Indian" },
                    ].map((clip, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between hover:border-purple-500/30 transition-all"
                      >
                        <div className="space-y-0.5">
                          <div className="font-semibold text-xs text-[var(--ivory)]">{clip.title}</div>
                          <div className="text-[11px] text-[var(--text-muted)] font-mono">{clip.dialect}</div>
                        </div>
                        <button
                          onClick={() => alert(`Playing: ${clip.title}`)}
                          className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all shrink-0 ml-3"
                        >
                          <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] text-[var(--text-muted)] flex items-center justify-between">
                  <span>Acoustic Frequency: 48kHz Stereo</span>
                  <span className="text-emerald-400">Available for Voiceover</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Filmography & Theatre Timeline */}
          <div
            className="p-6 sm:p-8 rounded-3xl border space-y-6"
            style={{
              background: "var(--charcoal-800)",
              borderColor: "rgba(201, 168, 76, 0.2)",
            }}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Film className="w-5 h-5 text-[var(--gold-400)]" />
                <h3 className="font-display font-bold text-xl text-[var(--ivory)]">
                  Verified Credits &amp; Filmography
                </h3>
              </div>
              <span className="badge badge-gold text-[10px]">CINTAA REGISTRATION ACTIVE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature Films & OTT */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[var(--gold-300)] uppercase tracking-wider">
                  Screen Productions:
                </h4>
                <div className="space-y-2.5">
                  {(talent.experience?.film || []).length > 0 ? (
                    talent.experience.film.map((credit, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-black/30 border border-white/5 text-xs text-gray-200">
                        {credit}
                      </div>
                    ))
                  ) : (
                    <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-xs text-gray-200">
                      Feature: &quot;Antar&quot; — Supporting Lead (Dir: S. Roy, 2023)
                    </div>
                  )}
                  {(talent.experience?.webSeries || []).map((credit, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-black/30 border border-white/5 text-xs text-gray-200">
                      {credit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Theatre & Stage */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                  Stage &amp; Theatre Works:
                </h4>
                <div className="space-y-2.5">
                  {(talent.experience?.theatre || []).length > 0 ? (
                    talent.experience.theatre.map((play, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-black/30 border border-white/5 text-xs text-gray-200">
                        {play}
                      </div>
                    ))
                  ) : (
                    <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-xs text-gray-200">
                      Resonance Theatre Group — 4 Productions (Prithvi Theatre, NCPA Mumbai)
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* AI Bio Optimizer Modal */}
      <AIBioOptimizerModal
        isOpen={isBioModalOpen}
        onClose={() => setIsBioModalOpen(false)}
        currentBio={talent.bio}
        onApplyBio={handleApplyBio}
      />

      {/* Invite to Audition Modal */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div
            className="w-full max-w-md p-6 rounded-2xl border space-y-4"
            style={{
              background: "var(--charcoal-900)",
              borderColor: "rgba(201, 168, 76, 0.3)",
            }}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h4 className="font-display font-bold text-lg text-[var(--ivory)]">
                Direct Audition Invitation
              </h4>
              <button onClick={() => setIsInviteModalOpen(false)} className="text-[var(--text-muted)] hover:text-white">
                ✕
              </button>
            </div>
            <p className="text-xs text-[var(--text-secondary)]">
              Send an official casting invitation to <strong className="text-[var(--gold-300)]">{talent.displayName}</strong>.
              They will receive script sides and notification via SMS &amp; Rangmanch portal.
            </p>
            <div className="space-y-3 text-xs">
              <div>
                <label className="text-[var(--text-muted)] block mb-1">Select Project:</label>
                <select className="w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-[var(--ivory)]">
                  <option>Antim Prahar — Feature Film (Mumbai)</option>
                  <option>Dhoop Ki Deewar — OTT Series (Delhi)</option>
                  <option>Ad Commercial — Tata Motors (Bengaluru)</option>
                </select>
              </div>
              <div>
                <label className="text-[var(--text-muted)] block mb-1">Director&apos;s Personal Note:</label>
                <textarea
                  rows={3}
                  placeholder="e.g. We loved your monologue in the showreel. We'd like you to test for the Lead role."
                  className="w-full p-2.5 rounded-xl bg-black/40 border border-white/10 text-[var(--ivory)]"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setIsInviteModalOpen(false)} className="btn-secondary text-xs py-2 px-3">
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`Direct audition invitation sent to ${talent.displayName}!`);
                  setIsInviteModalOpen(false);
                }}
                className="btn-primary text-xs py-2 px-5 font-bold"
              >
                Send Official Invitation
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
