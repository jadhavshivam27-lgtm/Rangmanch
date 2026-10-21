"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import WatermarkedSides from "@/components/WatermarkedSides";
import AuditionStudioModal from "@/components/AuditionStudioModal";
import { DEMO_CASTING_CALLS } from "@/lib/data";
import {
  ChevronLeft,
  Video,
  Lock,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { daysUntil, getStatusLabel } from "@/lib/utils";

export default function CastingCallDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0c]" />}>
      <CastingCallDetailContent />
    </Suspense>
  );
}

function CastingCallDetailContent() {
  const params = useParams();
  const id = params?.id as string;

  const call = DEMO_CASTING_CALLS.find((c) => c.id === id) || DEMO_CASTING_CALLS[0];
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  const selectedRole = call.roles[selectedRoleIndex] || call.roles[0];

  const [isSidesModalOpen, setIsSidesModalOpen] = useState(false);
  const [isAuditionStudioOpen, setIsAuditionStudioOpen] = useState(false);

  const daysLeft = daysUntil(call.applicationDeadline || "2024-11-30T23:59:59Z");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0c] text-[#f8f8f6] pt-10 pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          
          {/* Back Navigation Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
            <Link
              href="/casting-calls"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
            >
              <ChevronLeft size={14} />
              <span>ALL PRODUCTIONS</span>
            </Link>

            <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              <span className="text-[#c5a059]">{getStatusLabel(call.projectType)}</span>
              <span>•</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck size={12} /> CINTAA FAIR-PLAY
              </span>
            </div>
          </div>

          {/* Editorial Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Production Details (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059] mb-3">
                  ✦ {call.organization?.name || "STUDIO PRODUCTION"} • REF: {call.id.toUpperCase()}
                </p>
                <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
                  {call.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 mt-4 text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-[#c5a059]" />
                    {call.location}, {call.state}
                  </span>
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <Clock size={12} />
                    {daysLeft > 0 ? `${daysLeft} DAYS UNTIL DEADLINE` : "CLOSING TODAY"}
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Lock size={11} /> ESCROW SECURED
                  </span>
                </div>
              </div>

              {/* Synopsis */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                  PROJECT SYNOPSIS &amp; BACKGROUND
                </p>
                <p className="font-editorial text-xl sm:text-2xl text-neutral-200 font-light leading-relaxed">
                  &ldquo;{call.description}&rdquo;
                </p>
              </div>

              {/* Character Roles Selection Tabs */}
              <div className="space-y-6 pt-6 border-t border-white/[0.08]">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                    AVAILABLE CHARACTER SIDES ({call.roles.length})
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 font-mono text-xs">
                  {call.roles.map((role, idx) => (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRoleIndex(idx)}
                      className={`px-4 py-2 border transition-colors uppercase tracking-wider ${
                        selectedRoleIndex === idx
                          ? "border-white bg-white/10 text-white font-semibold"
                          : "border-white/10 text-neutral-500 hover:border-white/20 hover:text-neutral-300"
                      }`}
                    >
                      {role.roleName}
                    </button>
                  ))}
                </div>

                {/* Selected Character Breakdown Box */}
                <div className="p-8 border border-white/[0.08] bg-[#0e0e12] space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.08]">
                    <div>
                      <h2 className="font-editorial text-2xl text-white font-normal">
                        {selectedRole.roleName}
                      </h2>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#c5a059]">
                        {selectedRole.roleType} ROLE • {selectedRole.compensation}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-neutral-400">
                      Screen Age: {selectedRole.ageMin} – {selectedRole.ageMax} Years
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {selectedRole.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono">
                    <div>
                      <span className="text-neutral-500 text-[10px] uppercase block">GENDER</span>
                      <span className="text-white">{selectedRole.genderPreference || "Open"}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 text-[10px] uppercase block">LANGUAGES</span>
                      <span className="text-white">{selectedRole.languages.join(", ")}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 text-[10px] uppercase block">EXPERIENCE</span>
                      <span className="text-white capitalize">{selectedRole.experience}</span>
                    </div>
                  </div>

                  {/* Acting Note */}
                  <div className="p-4 border border-white/5 bg-white/[0.02] text-xs font-light text-neutral-300 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059] block">DIRECTOR SIDES NOTE:</span>
                    <p>
                      Deliver natural, unvarnished dramatic pacing. The scene emphasizes internal tension and moral compromise over loud projection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Actions & Production Banner (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Production Poster */}
              <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-900 border border-white/[0.08]">
                <img
                  src="/hero.jpg"
                  alt={call.title}
                  className="w-full h-full object-cover filter grayscale-[25%] contrast-[1.05]"
                />
              </div>

              {/* Action Box */}
              <div className="p-6 border border-white/[0.08] bg-[#0e0e12] space-y-4">
                <button
                  onClick={() => setIsAuditionStudioOpen(true)}
                  className="w-full btn-editorial-solid py-3.5 justify-center text-xs tracking-widest uppercase"
                >
                  <Video size={14} />
                  <span>RECORD AUDITION (AI STUDIO)</span>
                </button>

                <button
                  onClick={() => setIsSidesModalOpen(true)}
                  className="w-full btn-editorial py-3 justify-center text-xs tracking-widest uppercase"
                >
                  <Lock size={12} />
                  <span>VIEW DRM SCRIPT SIDES</span>
                </button>

                <p className="text-[10px] font-mono text-neutral-500 leading-normal text-center pt-2">
                  Browser-based teleprompter reads opposing cues in real-time. No video software required.
                </p>
              </div>

              {/* Studio Info Card */}
              <div className="p-6 border border-white/[0.08] text-xs font-mono space-y-2">
                <span className="text-neutral-500 text-[10px] uppercase tracking-wider block">PRODUCTION ENTITY</span>
                <p className="text-white font-semibold">{call.organization?.name || "Accredited Producer"}</p>
                <p className="text-neutral-400 text-[11px]">{call.organization?.description}</p>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Modals */}
      <WatermarkedSides
        isOpen={isSidesModalOpen}
        onClose={() => setIsSidesModalOpen(false)}
        roleName={selectedRole.roleName}
        projectTitle={call.title}
      />

      <AuditionStudioModal
        isOpen={isAuditionStudioOpen}
        onClose={() => setIsAuditionStudioOpen(false)}
        roleName={selectedRole.roleName}
        projectTitle={call.title}
      />
    </>
  );
}
