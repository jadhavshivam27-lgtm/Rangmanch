"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import {
  Sparkles,
  CheckCircle,
  Clock,
  TrendingUp,
  Lock,
} from "lucide-react";

export default function TalentDashboardPage() {
  const [activeTab, setActiveTab] = useState<"applications" | "recommended" | "calendar">("applications");

  const submissions = [
    {
      id: "sub-1",
      projectTitle: "Antim Prahar (Feature Film)",
      roleName: "Neha Sinha — Female Lead",
      productionHouse: "Starlight Casting Co.",
      dateSubmitted: "Oct 15, 2024",
      status: "Shortlisted",
      stage: 3,
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
      <div className="flex min-h-screen bg-[#0a0a0c] text-[#f8f8f6]">
        <Sidebar />

        <main className="flex-1 p-6 sm:p-10 lg:p-12 space-y-10 max-w-7xl">
          
          {/* Welcome Header */}
          <div className="p-8 sm:p-10 border border-white/[0.08] bg-[#0e0e12] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059]">
                ✦ ARTIST WORKSPACE • ID: RM-8849-IN
              </p>
              <h1 className="font-editorial text-3xl sm:text-4xl text-white font-light">
                Welcome back, Priya Sharma
              </h1>
              <p className="text-xs text-neutral-400 font-light">
                You have <span className="text-white font-medium">1 Virtual Callback</span> scheduled and <span className="text-white font-medium">2 Active Audition Submissions</span> under review.
              </p>
            </div>

            <div className="p-4 border border-white/10 flex items-center gap-4 shrink-0 font-mono text-xs">
              <div className="w-12 h-12 border border-emerald-400/50 flex items-center justify-center font-bold text-emerald-400">
                92%
              </div>
              <div>
                <div className="text-white uppercase tracking-wider font-semibold">Profile Readiness</div>
                <div className="text-[10px] text-neutral-500 mt-0.5">Add 1 voice sample for 100%</div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-5 border border-white/[0.08] bg-white/[0.015] space-y-1">
              <div className="text-neutral-500 uppercase tracking-widest text-[10px]">SUBMITTED TAPES</div>
              <div className="text-2xl font-editorial text-white">14</div>
              <div className="text-[10px] text-emerald-400">+3 this month</div>
            </div>
            <div className="p-5 border border-white/[0.08] bg-white/[0.015] space-y-1">
              <div className="text-neutral-500 uppercase tracking-widest text-[10px]">SHORTLISTS</div>
              <div className="text-2xl font-editorial text-[#c5a059]">5</div>
              <div className="text-[10px] text-neutral-500">35% conversion</div>
            </div>
            <div className="p-5 border border-white/[0.08] bg-white/[0.015] space-y-1">
              <div className="text-neutral-500 uppercase tracking-widest text-[10px]">CALLBACKS</div>
              <div className="text-2xl font-editorial text-white">2</div>
              <div className="text-[10px] text-neutral-400">Wednesday 3:30 PM</div>
            </div>
            <div className="p-5 border border-white/[0.08] bg-white/[0.015] space-y-1">
              <div className="text-neutral-500 uppercase tracking-widest text-[10px]">ESCROW PROTECTED</div>
              <div className="text-2xl font-editorial text-emerald-400">₹85,000</div>
              <div className="text-[10px] text-emerald-400">Guaranteed payout</div>
            </div>
          </div>

          {/* Submissions Pipeline */}
          <div className="p-8 border border-white/[0.08] bg-[#0e0e12] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div>
                <h2 className="font-editorial text-2xl text-white font-light">
                  Active Auditions &amp; Pipeline
                </h2>
                <p className="text-xs text-neutral-400 font-light mt-0.5">
                  Real-time status of your self-tape submissions across casting directors.
                </p>
              </div>

              <Link href="/casting-calls" className="btn-editorial py-2 px-4 text-[10px]">
                EXPLORE CASTINGS
              </Link>
            </div>

            <div className="divide-y divide-white/[0.08]">
              {submissions.map((sub) => (
                <div key={sub.id} className="py-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-editorial text-xl text-white font-normal">
                        {sub.projectTitle}
                      </h3>
                      <p className="text-xs font-mono text-neutral-400 mt-0.5">
                        Role: {sub.roleName} • {sub.productionHouse}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="text-neutral-500">{sub.dateSubmitted}</span>
                      <span className="border border-white/20 px-2.5 py-0.5 text-white uppercase text-[10px]">
                        {sub.status}
                      </span>
                    </div>
                  </div>

                  {/* 5-Stage Tracker */}
                  <div className="grid grid-cols-5 gap-2 pt-2 text-[10px] font-mono">
                    {stages.map((st, i) => {
                      const isDone = i + 1 <= sub.stage;
                      return (
                        <div key={i} className="space-y-1.5">
                          <div className={`h-1 transition-all ${isDone ? "bg-white" : "bg-white/10"}`} />
                          <div className={isDone ? "text-white font-semibold" : "text-neutral-600"}>
                            {st}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {sub.directorNote && (
                    <div className="p-3 border border-white/5 bg-white/[0.02] text-xs font-light text-neutral-300">
                      <span className="text-neutral-500 font-mono text-[10px] uppercase block mb-0.5">Director Feedback:</span>
                      {sub.directorNote}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </>
  );
}
