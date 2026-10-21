"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { DEMO_TALENT } from "@/lib/data";
import {
  ChevronLeft,
  Video,
  Mic,
  Film,
  Share2,
  Play,
  CheckCircle,
  MapPin,
  Lock,
} from "lucide-react";

export default function TalentProfileDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0c]" />}>
      <TalentProfileDetailContent />
    </Suspense>
  );
}

function TalentProfileDetailContent() {
  const params = useParams();
  const id = params?.id as string;

  const initialTalent = DEMO_TALENT.find((t) => t.id === id) || DEMO_TALENT[0];
  const [talent, setTalent] = useState(initialTalent);
  const [activePhoto, setActivePhoto] = useState(talent.profilePhoto || "/talent1.jpg");
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isPlayingReel, setIsPlayingReel] = useState(false);

  const gallery = [
    talent.profilePhoto || "/talent1.jpg",
    "/talent2.jpg",
    "/talent3.jpg",
    "/talent4.jpg",
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0c] text-[#f8f8f6] pt-10 pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          
          {/* Top Breadcrumb & Share Actions */}
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
            <Link
              href="/talent"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
            >
              <ChevronLeft size={14} />
              <span>THE ROSTER</span>
            </Link>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Portfolio URL copied to clipboard.");
                }}
                className="btn-editorial py-2 px-4 text-[10px]"
              >
                <Share2 size={12} />
                <span>SHARE</span>
              </button>

              <button
                onClick={() => setIsInviteModalOpen(true)}
                className="btn-editorial-solid py-2 px-5 text-[10px]"
              >
                INVITE TO AUDITION
              </button>
            </div>
          </div>

          {/* ── 1. EDITORIAL PORTFOLIO HERO ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Prominent Portrait Gallery (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-900 border border-white/[0.08] relative group">
                <img
                  src={activePhoto}
                  alt={talent.displayName}
                  className="w-full h-full object-cover object-top filter grayscale-[15%] group-hover:scale-102 transition-all duration-700 ease-out"
                />
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/70 text-[9px] font-mono uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
                  {talent.availability}
                </div>
              </div>

              {/* Angle thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {gallery.map((imgSrc, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(imgSrc)}
                    className={`aspect-[3/4] overflow-hidden border transition-all ${
                      activePhoto === imgSrc
                        ? "border-[#c5a059] opacity-100"
                        : "border-white/10 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img src={imgSrc} alt="" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Editorial Bio, Specs & Typography (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059] mb-3">
                  ✦ VERIFIED PERFORMER • ID: {talent.id.toUpperCase()}
                </p>
                <h1 className="font-editorial text-4xl sm:text-6xl font-light text-white tracking-tight leading-tight">
                  {talent.displayName}
                </h1>
                <p className="text-sm font-mono uppercase tracking-widest text-neutral-400 mt-2 flex items-center gap-2">
                  <span>{talent.skills.acting || "Actor & Screen Performer"}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} className="text-[#c5a059]" />
                    {talent.city}, {talent.state}
                  </span>
                </p>
              </div>

              {/* Physical Specifications & Languages Table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-white/[0.08] text-xs font-mono">
                <div>
                  <span className="text-neutral-500 text-[10px] uppercase block mb-1">HEIGHT</span>
                  <span className="text-white">5&apos;10&quot; (178 cm)</span>
                </div>
                <div>
                  <span className="text-neutral-500 text-[10px] uppercase block mb-1">SCREEN AGE</span>
                  <span className="text-white">{talent.ageMin} – {talent.ageMax} Years</span>
                </div>
                <div>
                  <span className="text-neutral-500 text-[10px] uppercase block mb-1">GUILD</span>
                  <span className="text-emerald-400">CINTAA Verified</span>
                </div>
                <div>
                  <span className="text-neutral-500 text-[10px] uppercase block mb-1">STATUS</span>
                  <span className="text-white capitalize">{talent.availability}</span>
                </div>
              </div>

              {/* Biography in Editorial Prose */}
              <div className="space-y-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                  REPRESENTATION &amp; ARTISTIC BACKGROUND
                </p>
                <p className="font-editorial text-xl sm:text-2xl text-neutral-200 font-light leading-relaxed">
                  &ldquo;{talent.bio}&rdquo;
                </p>
              </div>

              {/* Spoken Dialects */}
              <div className="space-y-2 pt-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                  LANGUAGES &amp; DIALECT PROFICIENCY:
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {talent.languages.map((l) => (
                    <span key={l} className="border border-white/15 px-3 py-1 text-white">
                      {l} — Native / Fluent
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              {talent.education && (
                <div className="pt-2 text-xs font-mono text-neutral-400">
                  <span className="text-neutral-500 uppercase">Training: </span>
                  <span className="text-white">{talent.education}</span>
                </div>
              )}
            </div>

          </div>

          {/* ── 2. PROMINENT AUDITION SHOWREEL ── */}
          <div className="pt-12 border-t border-white/[0.08] space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059] mb-1">
                  ✦ MEDIA VAULT
                </p>
                <h2 className="font-editorial text-2xl sm:text-3xl font-light text-white">
                  Audition Showreel &amp; Monologue
                </h2>
              </div>
              <span className="text-xs font-mono text-neutral-500 uppercase">1080P HD • 2M 14S</span>
            </div>

            <div className="relative aspect-video w-full max-w-4xl bg-neutral-900 border border-white/[0.08] overflow-hidden group flex items-center justify-center">
              <img
                src="/hero.jpg"
                alt="Showreel Preview"
                className="w-full h-full object-cover opacity-40 filter grayscale"
              />
              <button
                onClick={() => setIsPlayingReel(!isPlayingReel)}
                className="absolute w-20 h-20 rounded-full border border-white/40 bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:scale-105 hover:border-white transition-all"
                aria-label="Play showreel"
              >
                <Play size={24} className="ml-1 fill-current" />
              </button>
              <div className="absolute bottom-4 left-6 text-xs font-mono text-neutral-300">
                {talent.displayName} — Dramatic Monologue &amp; Interrogation Scene Cuts (2024)
              </div>
            </div>
          </div>

          {/* ── 3. VERIFIED CREDITS & EXPERIENCE ── */}
          <div className="pt-12 border-t border-white/[0.08] space-y-6">
            <h2 className="font-editorial text-2xl sm:text-3xl font-light text-white">
              Verified Filmography &amp; Stage
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] text-xs font-mono">
              <div className="space-y-4">
                <p className="text-neutral-500 uppercase tracking-widest text-[10px]">SCREEN CREDITS</p>
                <div className="space-y-3">
                  {(talent.experience?.film || []).map((f, idx) => (
                    <div key={idx} className="pb-3 border-b border-white/[0.04] text-neutral-200">
                      {f}
                    </div>
                  ))}
                  {(talent.experience?.webSeries || []).map((w, idx) => (
                    <div key={idx} className="pb-3 border-b border-white/[0.04] text-neutral-200">
                      {w}
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:pl-8 pt-6 md:pt-0 space-y-4">
                <p className="text-neutral-500 uppercase tracking-widest text-[10px]">THEATRE &amp; STAGE WORKS</p>
                <div className="space-y-3">
                  {(talent.experience?.theatre || []).length > 0 ? (
                    talent.experience.theatre.map((t, idx) => (
                      <div key={idx} className="pb-3 border-b border-white/[0.04] text-neutral-200">
                        {t}
                      </div>
                    ))
                  ) : (
                    <div className="text-neutral-400">Prithvi Theatre Circuit &amp; National School of Drama repertory productions.</div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Invite Modal */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="w-full max-w-md p-8 border border-white/20 bg-[#0a0a0c] space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="font-editorial text-2xl text-white">Audition Invitation</h3>
              <button onClick={() => setIsInviteModalOpen(false)} className="text-neutral-400 hover:text-white">✕</button>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Send an official casting invitation to <span className="text-white font-medium">{talent.displayName}</span> for an upcoming production.
            </p>
            <div className="space-y-4 text-xs font-mono">
              <div>
                <label className="text-neutral-500 uppercase block mb-1">Production</label>
                <select className="w-full p-3 bg-transparent border border-white/15 text-white">
                  <option className="bg-[#0a0a0c]">Antim Prahar — Feature Film</option>
                  <option className="bg-[#0a0a0c]">Dhoop Ki Deewar — OTT Series</option>
                </select>
              </div>
              <div>
                <label className="text-neutral-500 uppercase block mb-1">Director Note</label>
                <textarea
                  rows={3}
                  placeholder="Include scene notes or sides instructions..."
                  className="w-full p-3 bg-transparent border border-white/15 text-white"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button onClick={() => setIsInviteModalOpen(false)} className="btn-editorial py-2 px-4 text-[10px]">
                CANCEL
              </button>
              <button
                onClick={() => {
                  alert(`Audition invitation transmitted to ${talent.displayName}.`);
                  setIsInviteModalOpen(false);
                }}
                className="btn-editorial-solid py-2 px-5 text-[10px]"
              >
                SEND INVITATION
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
