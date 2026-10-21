"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WatermarkedSides from "@/components/WatermarkedSides";
import AuditionStudioModal from "@/components/AuditionStudioModal";
import { DEMO_CASTING_CALLS } from "@/lib/data";
import {
  ChevronLeft,
  Shield,
  Lock,
  Video,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle,
  FileText,
  DollarSign,
  Calendar,
  AlertCircle,
  Share2,
} from "lucide-react";
import { daysUntil } from "@/lib/utils";

export default function CastingCallDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--charcoal-900)]" />}>
      <CastingCallDetailContent />
    </Suspense>
  );
}

function CastingCallDetailContent() {
  const params = useParams();
  const id = params?.id as string;

  // Find casting call or fallback to first
  const call = DEMO_CASTING_CALLS.find((c) => c.id === id) || DEMO_CASTING_CALLS[0];
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  const selectedRole = call.roles[selectedRoleIndex] || call.roles[0];

  // Modals state
  const [isSidesModalOpen, setIsSidesModalOpen] = useState(false);
  const [isAuditionStudioOpen, setIsAuditionStudioOpen] = useState(false);

  const daysLeft = daysUntil(call.applicationDeadline || call.auditionDate || "2026-11-30T00:00:00Z");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--charcoal-900)] text-[var(--ivory)] pt-8 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Back Navigation Bar */}
          <div className="flex items-center justify-between">
            <Link
              href="/casting-calls"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--gold-300)] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Casting Calls Directory</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="badge badge-gold uppercase text-[10px] tracking-wider">
                {call.projectType.replace("_", " ")}
              </span>
              <span className="badge badge-green flex items-center gap-1 text-[10px]">
                <Shield className="w-3 h-3" /> CINTAA Fair-Play
              </span>
            </div>
          </div>

          {/* Project Hero Banner Card */}
          <div
            className="p-8 rounded-3xl border relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(20,20,24,0.95), rgba(35,35,42,0.9))",
              borderColor: "rgba(201, 168, 76, 0.25)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2 text-xs text-[var(--gold-400)] font-semibold uppercase tracking-wider">
                  <span>{call.organization?.name}</span>
                  {call.organization?.verificationStatus === "verified" && (
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  )}
                </div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-[var(--ivory)] leading-tight">
                  {call.title}
                </h1>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {call.description}
                </p>

                {/* Key Metrics Pill */}
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[var(--gold-400)]" />
                    {call.location}, {call.state}
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-400 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    Audition Closes in {daysLeft} Days
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                    <DollarSign className="w-3.5 h-3.5" />
                    Escrow Pay Guaranteed
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <button
                  onClick={() => setIsAuditionStudioOpen(true)}
                  className="btn-primary py-3.5 px-6 rounded-xl font-bold text-sm shadow-xl shadow-[var(--gold-500)]/20 flex items-center justify-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  <span>Launch AI Audition Studio</span>
                </button>
                <button
                  onClick={() => setIsSidesModalOpen(true)}
                  className="btn-secondary py-3 px-6 rounded-xl text-xs flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4 text-[var(--gold-400)]" />
                  <span>View DRM Script Sides</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main 2-Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Character Breakdown & Role Selector (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Role Selection Tabs */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xl text-[var(--ivory)] flex items-center gap-2">
                  <span>Available Character Roles</span>
                  <span className="text-xs font-mono font-normal text-[var(--gold-400)]">
                    ({call.roles.length} Roles Open)
                  </span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {call.roles.map((role, idx) => (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRoleIndex(idx)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        selectedRoleIndex === idx
                          ? "bg-[var(--gold-500)] text-[var(--charcoal-900)] shadow-lg shadow-[var(--gold-500)]/25"
                          : "bg-[var(--charcoal-800)] text-[var(--text-secondary)] border border-white/5 hover:border-[var(--gold-500)]/30 hover:text-white"
                      }`}
                    >
                      {role.roleName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Role Breakdown Card */}
              <div
                className="p-6 rounded-2xl border space-y-6"
                style={{
                  background: "var(--charcoal-800)",
                  borderColor: "rgba(201, 168, 76, 0.2)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="badge badge-gold uppercase text-[10px]">
                      {selectedRole.roleType} ROLE
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      Compensation: {selectedRole.compensation}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-2xl text-[var(--ivory)] mt-2">
                    {selectedRole.roleName}
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-2">
                    {selectedRole.description}
                  </p>
                </div>

                {/* Character Requirements Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-black/30 border border-white/5 text-xs">
                  <div>
                    <div className="text-[var(--text-muted)] text-[11px]">Playable Screen Age</div>
                    <div className="font-semibold text-[var(--ivory)] mt-0.5">
                      {selectedRole.ageMin} – {selectedRole.ageMax} Years
                    </div>
                  </div>
                  <div>
                    <div className="text-[var(--text-muted)] text-[11px]">Gender Preference</div>
                    <div className="font-semibold text-[var(--ivory)] mt-0.5">
                      {selectedRole.genderPreference || "Open to All"}
                    </div>
                  </div>
                  <div>
                    <div className="text-[var(--text-muted)] text-[11px]">Required Languages</div>
                    <div className="font-semibold text-[var(--gold-300)] mt-0.5">
                      {selectedRole.languages.join(", ")}
                    </div>
                  </div>
                </div>

                {/* Director's Vision & Acting Sides Callout */}
                <div className="p-4 rounded-xl bg-[var(--purple-500)]/10 border border-[var(--purple-500)]/20 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--purple-300)]">
                    <Sparkles className="w-4 h-4" /> Director&apos;s Acting Note for Audition:
                  </div>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    &quot;We are seeking a performer with natural internal gravity and raw, unvarnished intensity. Avoid melodrama; let the silence carry the weight of the character&apos;s moral dilemma before speaking.&quot;
                  </p>
                </div>

                {/* DRM Protected Sides CTA Box */}
                <div className="p-5 rounded-xl bg-black/40 border border-[var(--gold-500)]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--gold-500)]/15 border border-[var(--gold-500)]/30 flex items-center justify-center text-[var(--gold-300)]">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[var(--ivory)]">
                        Scene Monologue Script Sides (Encrypted)
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">
                        Watermarked dynamically with your name to protect confidentiality
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsSidesModalOpen(true)}
                    className="btn-secondary text-xs py-2 px-4 whitespace-nowrap"
                  >
                    Open Watermarked Script
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: AI Compatibility & Safety Escrow Pillars (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Live AI Match Score Card */}
              <div
                className="p-6 rounded-2xl border space-y-4"
                style={{
                  background: "var(--charcoal-800)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="badge badge-purple text-[10px]">AI MATCH ENGINE</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">92% Match</span>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-[var(--ivory)]">
                    Your Profile Compatibility
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    Evaluated against character requirements
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[var(--text-secondary)]">Language &amp; Dialect (Hindi)</span>
                      <span className="text-emerald-400 font-bold">96%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-emerald-400 w-[96%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[var(--text-secondary)]">Playable Age Match</span>
                      <span className="text-[var(--gold-300)] font-bold">100%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-[var(--gold-500)] w-[100%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[var(--text-secondary)]">Theatre / Screen Experience</span>
                      <span className="text-purple-300 font-bold">88%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-purple-500 w-[88%]" />
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <button
                    onClick={() => setIsAuditionStudioOpen(true)}
                    className="btn-primary w-full py-2.5 text-xs font-bold"
                  >
                    Start Audition for {selectedRole.roleName}
                  </button>
                </div>
              </div>

              {/* Escrow & Anti-Casting Couch Safety Box */}
              <div
                className="p-6 rounded-2xl border space-y-4"
                style={{
                  background: "var(--charcoal-800)",
                  borderColor: "rgba(201, 168, 76, 0.2)",
                }}
              >
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <Shield className="w-4 h-4" />
                  <span>Rangmanch Zero-Fraud Shield</span>
                </div>

                <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Zero Fee:</strong> Never pay for auditions or artist cards.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Escrow Protection:</strong> Actor payment deposited before shoot day.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Verified Studio:</strong> Auditions held exclusively at commercial offices.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Watermarked DRM Script Sides Modal */}
      <WatermarkedSides
        isOpen={isSidesModalOpen}
        onClose={() => setIsSidesModalOpen(false)}
        projectTitle={call.title}
        roleName={selectedRole.roleName}
        scriptLines={[
          {
            speaker: selectedRole.roleName.toUpperCase(),
            dialogue: "You think I wanted to be here at midnight, digging through files? Three families are waiting for answers. I am not leaving until I get them.",
            direction: "tense, leaning across the wooden table",
          },
          {
            speaker: "SUPERINTENDENT VERMA",
            dialogue: "The law works on jurisdiction, not your personal crusade. Stand down.",
            direction: "authoritative, stern",
          },
          {
            speaker: selectedRole.roleName.toUpperCase(),
            dialogue: "My jurisdiction begins where people's hope ends. Sign the order, Sir.",
            direction: "unwavering conviction",
          },
        ]}
      />

      {/* AI Audition Studio Modal with Line Reader */}
      <AuditionStudioModal
        isOpen={isAuditionStudioOpen}
        onClose={() => setIsAuditionStudioOpen(false)}
        projectTitle={call.title}
        roleName={selectedRole.roleName}
        characterBio={selectedRole.description}
      />

      <Footer />
    </>
  );
}
