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
    <div className="card-premium p-5">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`badge ${getStatusColor(call.projectType)}`}>
              {getStatusLabel(call.projectType)}
            </span>
            {isUrgent && (
              <span className="badge badge-coral">
                <Clock size={9} /> {days}d left
              </span>
            )}
          </div>
          <h3
            className="font-semibold text-sm leading-snug mb-1"
            style={{ color: "var(--ivory)" }}
          >
            {truncate(call.title, 60)}
          </h3>
        </div>
      </div>

      <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
        {truncate(call.description, 120)}
      </p>

      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <div className="flex items-center gap-1">
          <MapPin size={11} style={{ color: "var(--text-muted)" }} />
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {call.location}
          </span>
        </div>
        {call.organization && (
          <div className="flex items-center gap-1">
            <Users size={11} style={{ color: "var(--text-muted)" }} />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              {call.organization.name}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Deadline: {formatDate(call.applicationDeadline)}
          </span>
        </div>
        <Link
          href={`/casting-calls/${call.id}`}
          className="btn-primary text-xs px-3 py-1.5"
        >
          View Details
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
    <main>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden spotlight-glow"
        style={{ background: "var(--charcoal-950)" }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Rangmanch performers on stage"
            className="w-full h-full object-cover"
            style={{ opacity: 0.18 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(12,12,14,0.95) 0%, rgba(12,12,14,0.7) 50%, rgba(12,12,14,0.9) 100%)",
            }}
          />
        </div>

        {/* Decorative spotlight */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
          <div className="max-w-3xl">
            {/* AI chip */}
            <div className="ai-chip mb-6 inline-flex">
              <Sparkles size={12} />
              AI-Assisted Casting & Talent Discovery
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-hero">Where Talent</span>
              <br />
              <span style={{ color: "var(--ivory)" }}>Meets Opportunity.</span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              Discover casting opportunities, showcase your talent, and connect with
              entertainment professionals across India. Audition from anywhere.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              <Link href="/casting-calls" className="btn-primary text-base px-6 py-3">
                Explore Casting Calls <ArrowRight size={18} />
              </Link>
              <Link href="/signup?role=talent" className="btn-secondary text-base px-6 py-3">
                Join as Talent
              </Link>
            </div>

            {/* Demo credential hint */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs"
              style={{
                background: "rgba(201, 168, 76, 0.07)",
                border: "1px solid rgba(201, 168, 76, 0.15)",
                color: "var(--text-secondary)",
              }}
            >
              <Zap size={12} style={{ color: "var(--gold-400)" }} />
              <span>Demo platform — </span>
              <Link href="/login" className="font-medium hover:text-[var(--gold-400)] transition-colors" style={{ color: "var(--gold-300)" }}>
                sign in with demo credentials
              </Link>
              <span> to explore all features</span>
            </div>
          </div>

          {/* Skill category pills */}
          <div className="mt-16 flex flex-wrap gap-3">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-secondary)",
                }}
              >
                <span style={{ color: "var(--gold-400)" }}>{cat.icon}</span>
                <span className="font-medium">{cat.count}</span>
                <span>{cat.label} Artists</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO DISCLAIMER ────────────────────────────────── */}
      <div
        className="py-3 text-center text-xs"
        style={{
          background: "rgba(201, 168, 76, 0.05)",
          borderBottom: "1px solid rgba(201, 168, 76, 0.1)",
          color: "var(--text-muted)",
        }}
      >
        <strong style={{ color: "var(--gold-400)" }}>Demonstration Platform</strong>
        {" "}— The casting calls and talent profiles shown below are fictional sample content for demonstration purposes only.
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
            <Link href="/discover-talent" className="btn-secondary hidden sm:flex text-sm">
              Discover More <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {DEMO_TALENT.slice(0, 6).map((talent) => (
              <TalentCard key={talent.id} talent={talent} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/discover-talent" className="btn-secondary">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Actors */}
            <div
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(201,168,76,0.02) 100%)",
                border: "1px solid rgba(201, 168, 76, 0.15)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-5"
                style={{ background: "var(--gold-500)", transform: "translate(25%, -25%)" }}
              />
              <div className="ai-chip mb-4" style={{ background: "rgba(201,168,76,0.08)", borderColor: "rgba(201,168,76,0.2)", color: "var(--gold-300)" }}>
                <Film size={12} /> For Actors & Performers
              </div>
              <h3 className="font-display text-2xl font-bold mb-3" style={{ color: "var(--ivory)" }}>
                Your Stage Awaits
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                Build a professional portfolio, discover authentic casting opportunities, and submit
                auditions from anywhere in India. No more expensive travel for initial selections.
              </p>
              <ul className="space-y-2.5 mb-6">
                {FEATURES_TALENT.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <CheckCircle size={14} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup?role=talent" className="btn-primary">
                Join as Talent <ArrowRight size={16} />
              </Link>
            </div>

            {/* For Casting Directors */}
            <div
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(139,92,246,0.02) 100%)",
                border: "1px solid rgba(139, 92, 246, 0.15)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-5"
                style={{ background: "var(--purple-500)", transform: "translate(25%, -25%)" }}
              />
              <div className="ai-chip mb-4">
                <Sparkles size={12} /> For Casting Directors
              </div>
              <h3 className="font-display text-2xl font-bold mb-3" style={{ color: "var(--ivory)" }}>
                Find the Perfect Cast
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                AI-assisted talent discovery, video audition review, shortlisting, and candidate
                comparison — everything you need to find the right performers efficiently.
              </p>
              <ul className="space-y-2.5 mb-6">
                {FEATURES_CASTING.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <CheckCircle size={14} style={{ color: "var(--purple-400)", flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup?role=casting_director" className="btn-primary" style={{ background: "linear-gradient(135deg, var(--purple-600), var(--purple-500))", color: "white" }}>
                Join as Casting Director <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI FEATURE HIGHLIGHT ────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "var(--charcoal-900)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="ai-chip mb-6 inline-flex">
              <Sparkles size={12} /> AI-Powered Features
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              AI-Assisted Talent Discovery
            </h2>
            <p className="text-base leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Our AI helps casting professionals search for talent using natural language —{" "}
              <em style={{ color: "var(--gold-300)" }}>
                &ldquo;Find performers aged 25–30 who speak Hindi and English, with theatre experience,
                available in Mumbai&rdquo;
              </em>{" "}
              — and translates that into a filtered search using real profile data.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: <Search size={20} />, title: "Natural Language Search", desc: "Describe who you're looking for in plain language" },
                { icon: <Sparkles size={20} />, title: "AI Audition Analysis", desc: "Transcript, summary, and role-requirement comparison" },
                { icon: <Users size={20} />, title: "Smart Shortlisting", desc: "AI-assisted comparisons based on supplied profile data" },
              ].map((feat) => (
                <div
                  key={feat.title}
                  className="p-5 rounded-xl text-left"
                  style={{
                    background: "rgba(139,92,246,0.06)",
                    border: "1px solid rgba(139, 92, 246, 0.12)",
                  }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: "rgba(139,92,246,0.12)", color: "var(--purple-400)" }}>
                    {feat.icon}
                  </div>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--ivory)" }}>{feat.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{feat.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              AI suggestions are aids to human decision-making. All casting decisions require human review.
              We do not perform facial analysis, personality inference, or unsupported scoring.
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
