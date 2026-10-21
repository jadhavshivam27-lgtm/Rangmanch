"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Play,
  Star,
  Sparkles,
  Search,
  Video,
  Users,
  Shield,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  Zap,
  Award,
  Globe,
  CheckCircle,
  Film,
  Mic,
  Music,
  Palette,
} from "lucide-react";
import {
  DEMO_CASTING_CALLS,
  DEMO_TALENT,
  DEMO_FAQ,
} from "@/lib/data";
import { getStatusColor, getStatusLabel, formatDate, daysUntil, truncate, getInitials } from "@/lib/utils";

function TalentCard({ talent }: { talent: typeof DEMO_TALENT[0] }) {
  return (
    <div className="card-premium overflow-hidden group">
      <div className="relative h-52 overflow-hidden">
        {talent.profilePhoto ? (
          <img
            src={talent.profilePhoto}
            alt={talent.displayName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-4xl font-bold"
            style={{ background: "var(--charcoal-700)", color: "var(--gold-400)" }}
          >
            {getInitials(talent.displayName)}
          </div>
        )}
        <div className="cinematic-overlay absolute inset-0" />
        <div className="absolute bottom-3 left-3 right-3">
          <span className={`badge ${talent.availability === "available" ? "badge-green" : "badge-amber"}`}>
            {getStatusLabel(talent.availability)}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-semibold text-sm" style={{ color: "var(--ivory)" }}>
            {talent.displayName}
          </h3>
          {talent.skills.acting && (
            <span className="badge badge-subtle text-xs capitalize">{talent.skills.acting}</span>
          )}
        </div>
        <div className="flex items-center gap-1 mb-3">
          <MapPin size={11} style={{ color: "var(--text-muted)" }} />
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {talent.city}, {talent.state}
          </span>
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {talent.languages.slice(0, 3).map((lang) => (
            <span key={lang} className="skill-tag">{lang}</span>
          ))}
        </div>
        <Link
          href={`/talent/${talent.id}`}
          className="btn-secondary w-full text-xs py-2 justify-center"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

function CastingCallCard({ call }: { call: typeof DEMO_CASTING_CALLS[0] }) {
  const days = daysUntil(call.applicationDeadline);
  const isUrgent = days <= 7 && days > 0;

  return (
    <div
      className="card-premium p-6 rounded-2xl border flex flex-col justify-between h-full transition-all duration-300 hover:scale-[1.01]"
      style={{
        background: "var(--charcoal-800)",
        borderColor: "rgba(201, 168, 76, 0.18)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
      }}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`badge ${getStatusColor(call.projectType)} capitalize text-[10px]`}>
            {getStatusLabel(call.projectType)}
          </span>
          {isUrgent ? (
            <span className="badge badge-coral text-[10px] flex items-center gap-1 font-mono">
              <Clock size={10} /> {days}d left
            </span>
          ) : (
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Escrow Verified
            </span>
          )}
        </div>

        {/* Title & Organization */}
        <h3
          className="font-display font-bold text-base leading-snug mb-1.5 text-[var(--ivory)] hover:text-[var(--gold-300)] transition-colors line-clamp-2"
        >
          {call.title}
        </h3>

        {call.organization && (
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-3">
            <Users size={12} className="text-[var(--gold-400)] shrink-0" />
            <span className="truncate">{call.organization.name}</span>
          </div>
        )}

        <p className="text-xs leading-relaxed text-[var(--text-secondary)] line-clamp-2 mb-4">
          {call.description}
        </p>

        {/* Open Roles Pill */}
        {call.roles && call.roles.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {call.roles.slice(0, 2).map((r) => (
              <span
                key={r.id}
                className="text-[10px] px-2 py-0.5 rounded-md bg-black/40 border border-white/5 text-[var(--gold-200)]"
              >
                {r.roleName}
              </span>
            ))}
            {call.roles.length > 2 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-black/30 text-[var(--text-muted)]">
                +{call.roles.length - 2} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Bottom Meta & Action */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
        <div className="text-xs text-[var(--text-muted)] flex items-center gap-1 truncate">
          <MapPin size={12} className="text-[var(--gold-400)] shrink-0" />
          <span className="truncate">{call.location}</span>
        </div>
        <Link
          href={`/casting-calls/${call.id}`}
          className="btn-primary text-xs py-2 px-3.5 shrink-0 font-semibold"
        >
          View &amp; Audition
        </Link>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl overflow-hidden transition-all"
      style={{
        background: "var(--charcoal-700)",
        border: `1px solid ${open ? "rgba(201,168,76,0.2)" : "var(--border-subtle)"}`,
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        onClick={() => setOpen((p) => !p)}
      >
        <span className="text-sm font-semibold" style={{ color: "var(--ivory)" }}>
          {q}
        </span>
        {open ? (
          <ChevronUp size={16} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
        ) : (
          <ChevronDown size={16} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
        )}
      </button>
      {open && (
        <div
          className="px-5 pb-5 text-sm leading-relaxed border-t"
          style={{ color: "var(--text-secondary)", borderColor: "var(--border-subtle)" }}
        >
          <div className="pt-4">{a}</div>
        </div>
      )}
    </div>
  );
}

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Create Your Profile",
    description:
      "Build a professional digital portfolio with photos, videos, skills, and experience. Your profile is your audition card.",
    icon: <Users size={24} />,
    color: "var(--gold-500)",
  },
  {
    step: "02",
    title: "Discover Opportunities",
    description:
      "Browse hundreds of authentic casting calls across film, TV, OTT, theatre, and commercial productions across India.",
    icon: <Search size={24} />,
    color: "var(--coral-500)",
  },
  {
    step: "03",
    title: "Apply & Audition",
    description:
      "Apply directly and submit your audition from anywhere in India. No travel required for initial selections.",
    icon: <Video size={24} />,
    color: "var(--purple-500)",
  },
  {
    step: "04",
    title: "Get Cast",
    description:
      "Receive updates, callbacks, and offers directly on the platform. Track your journey from application to selection.",
    icon: <Award size={24} />,
    color: "var(--emerald-500)",
  },
];

const FEATURES_TALENT = [
  "Professional digital portfolio",
  "Casting call discovery",
  "Remote audition submissions",
  "Application tracking",
  "Shortlist & callback notifications",
  "Industry connect directory",
];

const FEATURES_CASTING = [
  "AI-assisted talent search",
  "Natural language discovery",
  "Audition video review studio",
  "Shortlists & comparisons",
  "Application management",
  "Scheduling & calendar",
];

const SKILL_CATEGORIES = [
  { label: "Acting", icon: <Film size={20} />, count: "2,400+" },
  { label: "Dance", icon: <Music size={20} />, count: "1,100+" },
  { label: "Voice", icon: <Mic size={20} />, count: "480+" },
  { label: "Theatre", icon: <Palette size={20} />, count: "890+" },
];

export default function HomePageClient() {
  return (
    <main className="min-h-screen bg-[var(--charcoal-950)] text-[var(--ivory)]">
      {/* ── HERO SECTION (BALANCED 2-COLUMN DESKTOP / FLUID MOBILE) ── */}
      <section
        className="relative overflow-hidden spotlight-glow border-b border-white/5"
        style={{ background: "var(--charcoal-950)" }}
      >
        {/* Background ambient texture */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/hero.jpg"
            alt="Rangmanch stage background"
            className="w-full h-full object-cover opacity-15 filter blur-[1px]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 15%, rgba(201,168,76,0.12) 0%, rgba(12,12,14,0.92) 60%, rgba(12,12,14,0.98) 100%)",
            }}
          />
        </div>

        {/* Top radial spotlight */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.15) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-16 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* ── LEFT COLUMN: VALUE PROPOSITION & ACTIONS (7 cols) ── */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Premier Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[rgba(201,168,76,0.14)] to-[rgba(139,92,246,0.14)] border border-[rgba(201,168,76,0.3)] text-[var(--gold-300)] shadow-sm mb-6">
                <Sparkles size={13} className="text-[var(--gold-400)] shrink-0" />
                <span>India&apos;s Premier AI Casting &amp; Audition Platform</span>
              </div>

              {/* Master Headline (Proportional & Cinematic) */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.14] tracking-tight mb-5">
                <span className="gradient-hero">Where Talent</span>
                <br />
                <span className="text-[var(--ivory)]">Meets Opportunity.</span>
              </h1>

              {/* Refined Narrative Subtitle */}
              <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] max-w-xl mb-7">
                Connecting actors, dancers, vocalists, and performers directly with verified Bollywood, South Cinema, and OTT casting directors. Audition with AI scene partners from anywhere in India.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
                <Link
                  href="/casting-calls"
                  className="btn-primary min-h-[48px] px-7 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[rgba(201,168,76,0.25)] hover:shadow-[rgba(201,168,76,0.4)] transition-all"
                >
                  <span>Explore Casting Calls</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/signup?role=talent"
                  className="btn-secondary min-h-[48px] px-7 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  <span>Join as Talent</span>
                </Link>
              </div>

              {/* Trust Indicators Row */}
              <div className="w-full flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[var(--text-muted)] pt-4 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                  <span>100% CINTAA Fair-Play</span>
                </div>
                <div className="flex items-center gap-1.5 text-sky-400 font-medium">
                  <Shield size={14} className="text-sky-400 shrink-0" />
                  <span>DigiLocker KYC Verified</span>
                </div>
                <div className="flex items-center gap-1.5 text-[var(--gold-300)] font-medium">
                  <Sparkles size={14} className="text-[var(--gold-400)] shrink-0" />
                  <span>Escrow Protected Payouts</span>
                </div>
              </div>

              {/* Quiet Demo Platform Notice */}
              <div className="mt-4 flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <Zap size={13} className="text-[var(--gold-400)] shrink-0" />
                <span>Evaluating the platform?</span>
                <Link
                  href="/login"
                  className="text-[var(--gold-300)] underline hover:text-[var(--gold-200)] font-medium"
                >
                  Sign in with 1-click Demo Profiles
                </Link>
              </div>
            </div>

            {/* ── RIGHT COLUMN: LIVE CASTING SPOTLIGHT CARD (5 cols) ── */}
            <div className="lg:col-span-5 w-full">
              <div
                className="relative rounded-3xl p-6 sm:p-7 border border-[rgba(201,168,76,0.25)] bg-gradient-to-b from-[#1b1b22]/90 to-[#121216]/95 shadow-2xl shadow-black/80 backdrop-blur-xl"
              >
                {/* Live Status Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                    </span>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-rose-400 font-mono">
                      Live Casting Spotlight
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.3)] text-[var(--gold-300)]">
                    Verified Production
                  </span>
                </div>

                {/* Film Production Visual Banner */}
                <div className="relative h-44 rounded-2xl overflow-hidden mb-4 border border-white/10 group">
                  <img
                    src="/hero.jpg"
                    alt="Antim Prahar Production Poster"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-400)] block mb-0.5">
                        Feature Film • Pan-India Release
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight drop-shadow">
                        Antim Prahar — The Final Strike
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-semibold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30">
                      ₹4.5L Escrow
                    </span>
                  </div>
                </div>

                {/* Casting Metadata & Requirements */}
                <div className="space-y-3 mb-5">
                  <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                    <span className="flex items-center gap-1.5 truncate">
                      <Film size={13} className="text-[var(--gold-400)] shrink-0" />
                      Excel Entertainment &amp; Dharma Ent.
                    </span>
                    <span className="flex items-center gap-1 shrink-0">
                      <MapPin size={12} className="text-rose-400 shrink-0" /> Mumbai / Delhi
                    </span>
                  </div>

                  {/* Open Roles Badges */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[var(--text-muted)] font-medium">Open Character Sides:</span>
                      <span className="text-emerald-400 font-mono font-semibold">Accepting Self-Tapes</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[11px] px-2.5 py-1 rounded-lg bg-[rgba(201,168,76,0.1)] text-[var(--gold-200)] border border-[rgba(201,168,76,0.2)] font-medium">
                        Lead Antagonist (28–35 yrs)
                      </span>
                      <span className="text-[11px] px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-200 border border-purple-500/20 font-medium">
                        Supporting Cop (35–45 yrs)
                      </span>
                    </div>
                  </div>

                  {/* AI Match Feature Pill */}
                  <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-gradient-to-r from-purple-950/40 to-transparent border border-purple-500/20 text-xs">
                    <div className="flex items-center gap-2">
                      <Sparkles size={13} className="text-purple-400 shrink-0" />
                      <span className="text-purple-200 font-medium">AI Dialect &amp; Archetype Match</span>
                    </div>
                    <span className="font-mono font-bold text-purple-300">98% Fit</span>
                  </div>
                </div>

                {/* Instant Audition Action */}
                <Link
                  href="/casting-calls/cc-001"
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md hover:brightness-110"
                  style={{
                    background: "linear-gradient(135deg, var(--gold-500), var(--gold-400))",
                    color: "var(--charcoal-950)",
                  }}
                >
                  <span>View Call &amp; Record Audition</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4-METRIC PLATFORM STATS BAR (AMAZON / NETFLIX TIER) ── */}
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div
          className="rounded-2xl p-6 sm:p-7 border border-[rgba(201,168,76,0.22)] shadow-2xl shadow-black/80 backdrop-blur-xl"
          style={{ background: "linear-gradient(180deg, rgba(28,28,33,0.95) 0%, rgba(20,20,24,0.98) 100%)" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {/* Stat 1 */}
            <div className="pt-3 sm:pt-0 sm:px-4 text-center sm:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[var(--gold-300)] mb-1">
                50,000+
              </div>
              <p className="text-xs sm:text-sm text-[var(--ivory)] font-medium">Verified Indian Artists</p>
              <p className="text-[11px] text-[var(--text-muted)] mt-0.5">Across 18 States &amp; 12 Regional Tongues</p>
            </div>

            {/* Stat 2 */}
            <div className="pt-3 sm:pt-0 sm:px-4 text-center sm:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-1">
                42
              </div>
              <p className="text-xs sm:text-sm text-[var(--ivory)] font-medium">Active Casting Calls</p>
              <p className="text-[11px] text-[var(--text-muted)] mt-0.5">Feature Films, OTT Series &amp; Commercials</p>
            </div>

            {/* Stat 3 */}
            <div className="pt-3 sm:pt-0 sm:px-4 text-center sm:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-emerald-400 mb-1">
                ₹1.8 Cr+
              </div>
              <p className="text-xs sm:text-sm text-[var(--ivory)] font-medium">Escrow Protected Pay</p>
              <p className="text-[11px] text-[var(--text-muted)] mt-0.5">Guaranteed Compensation for Performers</p>
            </div>

            {/* Stat 4 */}
            <div className="pt-3 sm:pt-0 sm:px-4 text-center sm:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-sky-400 mb-1">
                100%
              </div>
              <p className="text-xs sm:text-sm text-[var(--ivory)] font-medium">CINTAA &amp; DPDP 2023</p>
              <p className="text-[11px] text-[var(--text-muted)] mt-0.5">Fair-Play Guild Compliant Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTIST CATEGORY EXPLORER BAR ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--gold-400)]">
              Talent Directory by Discipline
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Browse top-rated performers by primary creative craft
            </p>
          </div>
          <Link
            href="/talent"
            className="text-xs text-[var(--gold-300)] hover:text-[var(--gold-200)] flex items-center gap-1 font-medium"
          >
            <span>Explore All Categories</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {SKILL_CATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              href="/talent"
              className="flex items-center gap-3.5 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[rgba(201,168,76,0.3)] transition-all group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                style={{
                  background: "rgba(201,168,76,0.12)",
                  color: "var(--gold-400)",
                  border: "1px solid rgba(201,168,76,0.25)",
                }}
              >
                {cat.icon}
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--ivory)] group-hover:text-[var(--gold-300)] transition-colors">
                  {cat.label}
                </div>
                <div className="text-xs text-[var(--text-muted)]">
                  {cat.count} Artists
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── DEMONSTRATION PLATFORM NOTICE ── */}
      <div
        className="py-2.5 px-4 text-center text-xs border-y"
        style={{
          background: "rgba(201, 168, 76, 0.04)",
          borderColor: "rgba(201, 168, 76, 0.12)",
          color: "var(--text-muted)",
        }}
      >
        <span className="font-semibold text-[var(--gold-400)]">Demonstration Platform: </span>
        <span>The casting calls and talent profiles shown below are fictional sample content for demonstration purposes only.</span>
      </div>

      {/* ── FEATURED CASTING CALLS ──────────────────────── */}
      <section
        className="py-20"
        style={{ background: "var(--charcoal-900)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
                Featured Casting Calls
              </h2>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Sample opportunities across India&apos;s entertainment industry
              </p>
            </div>
            <Link href="/casting-calls" className="btn-secondary hidden sm:flex text-sm">
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEMO_CASTING_CALLS.slice(0, 6).map((call) => (
              <CastingCallCard key={call.id} call={call} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/casting-calls" className="btn-primary">
              Explore All Casting Calls <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── DISCOVER TALENT ─────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "var(--charcoal-800)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
                Discover Amazing Talent
              </h2>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Explore sample performer profiles from across India
              </p>
            </div>
            <Link href="/talent" className="btn-secondary hidden sm:flex text-sm">
              Discover More <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {DEMO_TALENT.slice(0, 6).map((talent) => (
              <TalentCard key={talent.id} talent={talent} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/talent" className="btn-secondary">
              View All Talent <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "var(--charcoal-900)" }}
        id="how-it-works"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
              How Rangmanch Works
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              A simple, professional workflow designed for India&apos;s entertainment industry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.step}
                className="card-premium p-6 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 text-7xl font-bold opacity-5 leading-none"
                  style={{ color: step.color }}
                >
                  {step.step}
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${step.color}18`, color: step.color }}
                >
                  {step.icon}
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "var(--ivory)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR ACTORS + FOR CASTING ─────────────────────── */}
      <section
        className="py-20"
        style={{ background: "var(--charcoal-800)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* For Actors */}
            <div
              className="rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between h-full border transition-all hover:border-[var(--gold-500)]/40"
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(20,20,24,0.95) 100%)",
                borderColor: "rgba(201, 168, 76, 0.2)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div>
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-5 pointer-events-none"
                  style={{ background: "var(--gold-500)", transform: "translate(25%, -25%)" }}
                />
                <div className="ai-chip mb-4 inline-flex" style={{ background: "rgba(201,168,76,0.1)", borderColor: "rgba(201,168,76,0.25)", color: "var(--gold-300)" }}>
                  <Film size={12} /> For Actors &amp; Performers
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-[var(--ivory)]">
                  Your Stage Awaits
                </h3>
                <p className="text-sm leading-relaxed mb-6 text-[var(--text-secondary)]">
                  Build a professional portfolio, discover authentic casting opportunities, and submit
                  auditions from anywhere in India. No more expensive travel for initial selections.
                </p>
                <ul className="space-y-3 mb-8">
                  {FEATURES_TALENT.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                      <CheckCircle size={15} className="text-[var(--gold-400)] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/signup?role=talent" className="btn-primary w-full sm:w-auto self-start flex items-center justify-center gap-2">
                <span>Join as Talent</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* For Casting Directors */}
            <div
              className="rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between h-full border transition-all hover:border-[var(--purple-500)]/40"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(20,20,24,0.95) 100%)",
                borderColor: "rgba(139, 92, 246, 0.2)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div>
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-5 pointer-events-none"
                  style={{ background: "var(--purple-500)", transform: "translate(25%, -25%)" }}
                />
                <div className="ai-chip mb-4 inline-flex">
                  <Sparkles size={12} /> For Casting Directors &amp; Producers
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-[var(--ivory)]">
                  Find the Perfect Cast
                </h3>
                <p className="text-sm leading-relaxed mb-6 text-[var(--text-secondary)]">
                  AI-assisted talent discovery, video audition review, shortlisting, and candidate
                  comparison — everything you need to find the right performers efficiently.
                </p>
                <ul className="space-y-3 mb-8">
                  {FEATURES_CASTING.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                      <CheckCircle size={15} className="text-[var(--purple-400)] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/signup?role=casting_director"
                className="btn-primary w-full sm:w-auto self-start flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(135deg, var(--purple-600), var(--purple-500))", color: "white" }}
              >
                <span>Join as Casting Director</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI FEATURE HIGHLIGHT ────────────────────────── */}
      <section
        className="py-24 border-y"
        style={{
          background: "linear-gradient(180deg, var(--charcoal-900) 0%, rgba(18,18,24,0.98) 100%)",
          borderColor: "rgba(139, 92, 246, 0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Aligned Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="ai-chip inline-flex">
              <Sparkles size={13} /> AI-Powered Casting Suite
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--ivory)]">
              AI-Assisted Talent Discovery
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              Search across regional Indian cinema using natural dialect and archetype parameters —{" "}
              <em className="text-[var(--gold-300)] font-medium">
                &ldquo;Find performers aged 25–30 who speak Hindi &amp; Awadhi, with theatre training, available in Mumbai&rdquo;
              </em>{" "}
              — instantly resolved into verified profiles.
            </p>
          </div>

          {/* Full-width 3-Column Desktop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-stretch">
            {[
              {
                icon: <Search size={22} />,
                title: "Natural Language Search",
                desc: "Describe characters in conversational cinematic language. AI vectors match emotional range, regional dialects, and physical attributes accurately.",
                tag: "Semantic Match Engine",
              },
              {
                icon: <Sparkles size={22} />,
                title: "AI Audition Analysis",
                desc: "Automated dialogue teleprompter synchronization, acoustic voice analysis, and emotional arc heatmap evaluation to accelerate audition triage.",
                tag: "Speech & Expression AI",
              },
              {
                icon: <Users size={22} />,
                title: "Smart Shortlisting",
                desc: "Side-by-side comparative analytics evaluating character sides compatibility, past repertoire, and verified union standing in 1 click.",
                tag: "Candidate Comparison",
              },
            ].map((feat) => (
              <div
                key={feat.title}
                className="p-7 rounded-3xl text-left flex flex-col justify-between h-full border transition-all hover:scale-[1.01]"
                style={{
                  background: "var(--charcoal-800)",
                  borderColor: "rgba(139, 92, 246, 0.22)",
                  boxShadow: "0 12px 36px rgba(0,0,0,0.45)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center"
                      style={{ background: "rgba(139,92,246,0.15)", color: "var(--purple-400)", border: "1px solid rgba(139,92,246,0.3)" }}
                    >
                      {feat.icon}
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      {feat.tag}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-lg mb-2 text-[var(--ivory)]">{feat.title}</h4>
                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{feat.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-[var(--purple-400)] font-medium">
                  <Sparkles size={12} />
                  <span>Integrated in Audition Studio</span>
                </div>
              </div>
            ))}
          </div>

          {/* Responsible AI Disclaimer */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-center max-w-3xl mx-auto">
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              <strong className="text-[var(--ivory)] font-semibold">Responsible AI Pledge: </strong>
              AI suggestions are assistive tools for directors. Final casting decisions always require human discretion. We strictly adhere to DPDP Act 2023 principles and never conduct unauthorized biometrics or discriminatory scoring.
            </p>
          </div>
        </div>
      </section>

      {/* ── SAFETY ──────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "var(--charcoal-800)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
              style={{ background: "rgba(5, 150, 105, 0.12)", color: "#10b981" }}
            >
              <Shield size={24} />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Safety & Trust
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              Rangmanch is designed with performer safety and privacy at its core.
              Verified casting professionals, safe minor workflows, and clear
              reporting tools.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-8">
              {[
                { title: "Verified Professionals", desc: "Casting directors and organizations go through a verification process before accessing talent profiles." },
                { title: "Safe Minor Workflows", desc: "Minor profiles are guardian-managed. Private information is never publicly displayed." },
                { title: "Report & Block", desc: "Report suspicious listings immediately. Our safety team reviews all reports promptly." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl"
                  style={{
                    background: "rgba(5, 150, 105, 0.05)",
                    border: "1px solid rgba(5, 150, 105, 0.12)",
                  }}
                >
                  <h4 className="font-semibold text-sm mb-2" style={{ color: "var(--ivory)" }}>
                    <CheckCircle size={13} className="inline mr-1.5" style={{ color: "#10b981" }} />
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/safety" className="btn-secondary">
              Visit Safety Centre <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "var(--charcoal-900)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Common questions about Rangmanch
            </p>
          </div>
          <div className="space-y-3">
            {DEMO_FAQ.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/help" className="btn-secondary text-sm">
              Visit Help Centre <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────── */}
      <section
        className="py-20 spotlight-glow"
        style={{ background: "var(--charcoal-950)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4">
            <span className="gradient-gold">Ready to step into the spotlight?</span>
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            Join thousands of performers and casting professionals already on Rangmanch.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/signup" className="btn-primary text-base px-8 py-3.5">
              Get Started Free <ArrowRight size={18} />
            </Link>
            <Link href="/casting-calls" className="btn-secondary text-base px-8 py-3.5">
              Browse Opportunities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
