"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigiLockerKYCModal from "@/components/DigiLockerKYCModal";
import ChildPerformerGuardianModal from "@/components/ChildPerformerGuardianModal";
import {
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  RotateCw,
  Users,
  GraduationCap,
  FileText,
  Shield,
  FileCheck,
} from "lucide-react";
import type { DigiLockerKYCRecord, GuardianCoSignRecord } from "@/lib/types";

export default function VerificationGatewayPage() {
  const [isKYCModalOpen, setIsKYCModalOpen] = useState(false);
  const [isGuardianModalOpen, setIsGuardianModalOpen] = useState(false);

  const [kycRecord, setKycRecord] = useState<DigiLockerKYCRecord | null>({
    verificationId: "DL-KYC-942104",
    documentType: "aadhaar",
    maskedDocNumber: "XXXX-XXXX-8921",
    verifiedName: "Priya Sharma",
    verifiedDob: "14-Aug-1998",
    gender: "Female",
    faceMatchScore: 98.4,
    status: "verified",
    verifiedAt: "2024-10-18T10:30:00Z",
    certificateHash: "sha256-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  });

  const [guardianRecord, setGuardianRecord] = useState<GuardianCoSignRecord | null>(null);

  return (
    <div className="min-h-screen bg-[#040406] text-[#f5f5f7] flex flex-col justify-between selection:bg-[#d4af61] selection:text-black">
      <div>
        <Navbar />

        {/* Main Content Area */}
        <main className="relative w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 pt-12 pb-24">
          
          {/* Subtle Stage Lighting & Director Chair Artwork on the Right */}
          <div className="absolute top-6 right-8 w-80 h-72 pointer-events-none opacity-35 hidden md:block">
            <div className="absolute top-0 right-10 w-44 h-44 bg-[#d4af61]/25 blur-[90px] rounded-full" />
            <div className="absolute -top-2 right-4 w-52 h-44 border border-[#d4af61]/20 rounded-2xl bg-gradient-to-bl from-white/[0.04] to-transparent p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#d4af61] uppercase tracking-widest">
                <span>STAGE 04</span>
                <span className="w-2 h-2 rounded-full bg-[#d4af61] animate-ping" />
              </div>
              <div className="text-center font-cinema text-lg tracking-widest uppercase text-neutral-300 font-bold border-y border-white/10 py-3">
                RANGMANCH
              </div>
              <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest text-right">
                PRODUCTION STUDIO
              </div>
            </div>
          </div>

          {/* 1. Page Header */}
          <div className="mb-12 max-w-2xl">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#d4af61] font-bold mb-3">
              TRUST &amp; SAFETY
            </div>
            <h1 className="font-cinema text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mb-4">
              Verification &amp; Trust
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              Rangmanch ensures a safe, authentic and professional environment for all performers. Complete your verification to unlock casting opportunities and build trust with productions.
            </p>
          </div>

          {/* 2. Two-Column Verification Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            
            {/* Card 1: DigiLocker & Government KYC */}
            <div className="rounded-2xl bg-[#08080c]/90 border border-white/[0.09] hover:border-white/20 transition-all p-7 sm:p-8 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
              <div>
                {/* Module Pill & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono tracking-wider text-neutral-500 uppercase">
                    MODULE M004
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-500/30 uppercase">
                    UIDAI INTEGRATION
                  </span>
                </div>

                {/* Card Title & Icon Header */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Purple Gradient Document Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7961f2] to-[#5538ee] flex items-center justify-center text-white shrink-0 shadow-[0_8px_20px_rgba(102,77,240,0.35)]">
                    <FileCheck size={30} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h2 className="font-cinema text-2xl font-bold text-white leading-tight mb-2">
                      DigiLocker &amp; Government KYC
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                  Cryptographically authenticate your identity using official UIDAI DigiLocker credentials. Verified performers receive a verified badge, priority audition review, and protection against stolen comp cards.
                </p>

                {/* Verification Status Details Box */}
                {kycRecord ? (
                  <div className="rounded-xl border border-white/[0.08] bg-black/40 p-4 space-y-3 mb-6">
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                        <CheckCircle2 size={15} />
                        <span>Active KYC Certificate</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-400 tracking-wider">
                        {kycRecord.verificationId}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono py-0.5">
                      <span className="text-neutral-400">Name</span>
                      <span className="text-white font-medium">{kycRecord.verifiedName}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono py-0.5">
                      <span className="text-neutral-400">Identity Masked</span>
                      <span className="text-white font-medium">{kycRecord.maskedDocNumber}</span>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl border border-white/[0.08] bg-black/40 p-4 text-xs text-neutral-400 mb-6">
                    No active verification certificate found. Click below to begin instant KYC.
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={() => setIsKYCModalOpen(true)}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#f4e2b8] via-[#d4af61] to-[#b89242] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,97,0.3)] cursor-pointer"
              >
                <RotateCw size={15} />
                <span>{kycRecord ? "Re-Verify Identity" : "Launch DigiLocker KYC"}</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Card 2: Minor Performer Work Permit */}
            <div className="rounded-2xl bg-[#08080c]/90 border border-white/[0.09] hover:border-white/20 transition-all p-7 sm:p-8 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
              <div>
                {/* Module Pill & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono tracking-wider text-neutral-500 uppercase">
                    MODULE M005
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-[#d4af61] font-semibold bg-[#d4af61]/10 border border-[#d4af61]/30 uppercase">
                    NCPCR COMPLIANCE
                  </span>
                </div>

                {/* Card Title & Icon Header */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Rose/Pink Gradient Shield Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#f5d9d5] flex items-center justify-center text-[#2a1715] shrink-0 shadow-[0_8px_20px_rgba(245,217,213,0.2)]">
                    <Users size={28} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h2 className="font-cinema text-2xl font-bold text-white leading-tight mb-2">
                      Minor Performer Work Permit
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                  Child Artists under 18 require legal guardian authorization, schooling schedule protection, and trust-fund escrow routing under the National Commission for Protection of Child Rights guidelines.
                </p>

                {/* Requirements / Status Checklist Box */}
                <div className="rounded-xl border border-white/[0.08] bg-black/40 p-4 space-y-4 mb-6">
                  
                  <div className="flex items-start gap-3">
                    <Users size={16} className="text-neutral-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white leading-tight">
                        Legal Guardian Authorization
                      </h4>
                      <p className="text-[11px] text-neutral-400 font-light">
                        Guardian consent and identity verification
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <GraduationCap size={16} className="text-neutral-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white leading-tight">
                        Education Schedule Protection
                      </h4>
                      <p className="text-[11px] text-neutral-400 font-light">
                        Compliance with academic requirements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText size={16} className="text-neutral-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-white leading-tight">
                        NCPCR Guidelines
                      </h4>
                      <p className="text-[11px] text-neutral-400 font-light">
                        Mandatory for child artists, teen models, and voice actors under 18 years of age.
                      </p>
                    </div>
                  </div>

                  {guardianRecord && (
                    <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-emerald-400 font-semibold">
                      <span>Status: Active Co-Signed</span>
                      <span>{guardianRecord.minorName}</span>
                    </div>
                  )}

                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setIsGuardianModalOpen(true)}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#f4e2b8] via-[#d4af61] to-[#b89242] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,97,0.3)] cursor-pointer"
              >
                <ExternalLink size={15} />
                <span>Open Guardian Portal</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>

          {/* 3. Privacy & DPDP Notice Section */}
          <div className="rounded-2xl border border-white/[0.09] bg-[#08080c]/80 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-transparent border border-[#d4af61]/40 flex items-center justify-center text-[#d4af61] shrink-0">
                <Shield size={22} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                  DATA PROTECTION COMPLIANCE (DPDP ACT 2023)
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-2xl">
                  Rangmanch adheres strictly to digital identity privacy standards. All verification requests are routed directly to UIDAI sandboxes without caching raw demographic or biometric data on our servers.
                </p>
              </div>
            </div>

            <a
              href="#learn-more"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#d4af61] transition-colors shrink-0"
            >
              <span>Learn More</span>
              <ArrowRight size={14} />
            </a>
          </div>

        </main>
      </div>

      {/* Modals */}
      <DigiLockerKYCModal
        isOpen={isKYCModalOpen}
        onClose={() => setIsKYCModalOpen(false)}
        onSuccess={(rec) => setKycRecord(rec)}
      />

      <ChildPerformerGuardianModal
        isOpen={isGuardianModalOpen}
        onClose={() => setIsGuardianModalOpen(false)}
        onSuccess={(rec) => setGuardianRecord(rec)}
      />

      <Footer />
    </div>
  );
}
