"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import {
  Sparkles,
  CheckCircle,
  Clock,
  Video,
  FileText,
  Calendar,
  AlertCircle,
  ChevronRight,
  TrendingUp,
  Award,
  Bell,
  Sliders,
} from "lucide-react";

export default function TalentDashboardPage() {
  const [activeTab, setActiveTab] = useState<"applications" | "recommended" | "calendar">("applications");

  // Demo active submissions
  const submissions = [
    {
      id: "sub-1",
      projectTitle: "Antim Prahar (Feature Film)",
      roleName: "Neha Sinha — Female Lead",
      productionHouse: "Starlight Casting Co.",
      dateSubmitted: "Oct 15, 2024",
      status: "Shortlisted",
      stage: 3, // 1: Submitted, 2: Under Review, 3: Shortlisted, 4: Callback, 5: Selected
      aiScore: 94,
      directorNote: "Exceptional Awadhi dialogue delivery. Callback scheduled for Wednesday.",
    },
    {
      id: "sub-2",
      projectTitle: "Hollow Nights Season 2 (OTT Web Series)",
      roleName: "Rohan — Cyber Forensic Specialist",
      productionHouse: "Spectrum Productions",
      dateSubmitted: "Oct 18, 2024",
      status: "Under Review",
      stage: 2,
      aiScore: 89,
      directorNote: "Tape received. Review in progress by senior casting associate.",
    },
    {
      id: "sub-3",
      projectTitle: "Tata Motors Commercial (Ad Film)",
      roleName: "Modern Father",
      productionHouse: "NovaCast India",
      dateSubmitted: "Oct 12, 2024",
      status: "Callback Scheduled",
      stage: 4,
      aiScore: 96,
      directorNote: "Live Virtual Green Room audition invitation confirmed for 3:30 PM.",
    },
  ];

  const stages = ["Submitted", "Under Review", "Shortlisted", "Callback", "Selected"];

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-[var(--charcoal-900)] text-[var(--ivory)] pt-20">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-8 lg:p-10 space-y-8 max-w-7xl">
          {/* Welcome & Profile Strength Banner */}
          <div
            className="p-6 sm:p-8 rounded-3xl border relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(20,20,25,0.95), rgba(35,30,45,0.9))",
              borderColor: "rgba(201, 168, 76, 0.25)",
              boxShadow: "0 15px 50px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="badge badge-gold">TALENT PORTAL</span>
                  <span className="text-xs text-[var(--gold-400)] font-mono">ID: RM-8849-IN</span>
                </div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl text-[var(--ivory)]">
                  Welcome back, Priya Sharma
                </h1>
                <p className="text-xs text-[var(--text-secondary)]">
                  You have <strong className="text-emerald-400">1 Virtual Callback</strong> scheduled and{" "}
                  <strong className="text-[var(--gold-300)]">2 Active Audition Submissions</strong> under review.
                </p>
              </div>

              {/* Profile Strength Gauge */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center gap-4 shrink-0">
                <div className="w-14 h-14 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 flex items-center justify-center font-bold text-base font-mono text-emerald-400">
                  92%
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--ivory)] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--gold-400)]" /> Profile Readiness
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-0.5">
                    Add 1 audio dialect sample to reach 100%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[var(--charcoal-800)] border border-white/5 space-y-1">
              <div className="text-[11px] text-[var(--text-muted)] font-mono uppercase">Submitted Tapes</div>
              <div className="text-2xl font-bold font-display text-[var(--ivory)]">14</div>
              <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +3 this month
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--charcoal-800)] border border-white/5 space-y-1">
              <div className="text-[11px] text-[var(--text-muted)] font-mono uppercase">Shortlists</div>
              <div className="text-2xl font-bold font-display text-[var(--gold-300)]">5</div>
              <div className="text-[10px] text-[var(--text-muted)]">35% conversion rate</div>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--charcoal-800)] border border-white/5 space-y-1">
              <div className="text-[11px] text-[var(--text-muted)] font-mono uppercase">Live Callbacks</div>
              <div className="text-2xl font-bold font-display text-purple-400">2</div>
              <div className="text-[10px] text-purple-300">Next: Wednesday 3:30 PM</div>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--charcoal-800)] border border-white/5 space-y-1">
              <div className="text-[11px] text-[var(--text-muted)] font-mono uppercase">Escrow Protected</div>
              <div className="text-2xl font-bold font-display text-emerald-400">₹85,000</div>
              <div className="text-[10px] text-emerald-400">Guaranteed on selection</div>
            </div>
          </div>

          {/* Submissions Pipeline / Applications Tracker */}
          <div
            className="p-6 sm:p-8 rounded-3xl border space-y-6"
            style={{
              background: "var(--charcoal-800)",
              borderColor: "rgba(201, 168, 76, 0.2)",
            }}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div>
                <h3 className="font-display font-bold text-xl text-[var(--ivory)]">
                  Live Audition Status Pipeline
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Real-time tracking of your submitted self-tapes across casting directors
                </p>
              </div>

              <Link href="/casting-calls" className="btn-primary text-xs py-2 px-4 font-semibold">
                Explore Open Calls
              </Link>
            </div>

            {/* Submissions List */}
            <div className="space-y-6">
              {submissions.map((sub) => (
                <div
                  key={sub.id}
                  className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-4 hover:border-[var(--gold-500)]/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base text-[var(--ivory)]">
                          {sub.projectTitle}
                        </span>
                        <span className="badge badge-purple text-[10px]">
                          AI Match: {sub.aiScore}%
                        </span>
                      </div>
                      <p className="text-xs text-[var(--gold-300)] font-medium">
                        Role: {sub.roleName} • {sub.productionHouse}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[var(--text-muted)]">
                        Submitted: {sub.dateSubmitted}
                      </span>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                          sub.stage >= 3
                            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                            : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                        }`}
                      >
                        {sub.status}
                      </span>
                    </div>
                  </div>

                  {/* Visual 5-Stage Step Tracker */}
                  <div className="space-y-2 pt-1">
                    <div className="grid grid-cols-5 gap-1.5">
                      {stages.map((st, i) => {
                        const isDone = i + 1 <= sub.stage;
                        const isCurrent = i + 1 === sub.stage;

                        return (
                          <div key={i} className="space-y-1">
                            <div
                              className={`h-2 rounded-full transition-all ${
                                isDone
                                  ? "bg-gradient-to-r from-emerald-500 to-teal-400"
                                  : "bg-white/10"
                              }`}
                            />
                            <div
                              className={`text-[10px] font-mono truncate ${
                                isCurrent
                                  ? "text-emerald-400 font-bold"
                                  : isDone
                                  ? "text-gray-300"
                                  : "text-[var(--text-muted)]"
                              }`}
                            >
                              {st}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Director's Internal Feedback Note */}
                  {sub.directorNote && (
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-[var(--gold-400)] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[var(--gold-300)]">Casting Team Note: </span>
                        {sub.directorNote}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* AI Recommended Roles Card */}
          <div
            className="p-6 sm:p-8 rounded-3xl border space-y-4"
            style={{
              background: "var(--charcoal-800)",
              borderColor: "rgba(139, 92, 246, 0.25)",
            }}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[var(--purple-400)]" />
                <h3 className="font-display font-bold text-xl text-[var(--ivory)]">
                  AI Recommended Casting Opportunities
                </h3>
              </div>
              <span className="text-xs text-[var(--text-muted)]">Matched to your Screen Age &amp; Dialects</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Dhoop Ki Deewar (Historical OTT Drama)",
                  role: "Zahira — Parallel Lead (Awadhi / Urdu Diction)",
                  match: "96%",
                  deadline: "3 days left",
                  pay: "₹1,20,000 / schedule",
                },
                {
                  title: "Aram Nagar Nights (Indie Feature)",
                  role: "Simran — Mumbai Theatre Director",
                  match: "92%",
                  deadline: "Closing tonight",
                  pay: "₹75,000 / schedule",
                },
              ].map((rec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between hover:border-purple-500/30 transition-all"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[var(--ivory)]">{rec.title}</span>
                      <span className="badge badge-purple text-[10px]">{rec.match} Match</span>
                    </div>
                    <div className="text-xs text-[var(--gold-300)]">{rec.role}</div>
                    <div className="text-[11px] text-[var(--text-muted)] font-mono">
                      {rec.deadline} • {rec.pay}
                    </div>
                  </div>

                  <Link href="/casting-calls" className="btn-primary text-xs py-2 px-3 shrink-0 ml-3">
                    View Call
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
