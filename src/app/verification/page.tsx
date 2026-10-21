"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigiLockerKYCModal from "@/components/DigiLockerKYCModal";
import ChildPerformerGuardianModal from "@/components/ChildPerformerGuardianModal";
import {
  CheckCircle2,
  ArrowRight,
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

        {/* ── MAIN CONTENT AREA ── */}
        <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 pt-10 sm:pt-14 pb-20 sm:pb-28">
          
          {/* 1. Page Header */}
          <div className="mb-10 sm:mb-12 max-w-3xl">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#d4af61] font-bold mb-3.5">
              TRUST &amp; SAFETY
            </p>
            <h1 className="font-cinema text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-4">
              Verification &amp; Trust
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
              Rangmanch ensures a safe, authentic and professional environment for all performers. Complete your verification to unlock casting opportunities and build trust with productions.
            </p>
          </div>

          {/* 2. Two-Column Verification Cards Grid (Equal Width, 24px Gap) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 mb-6 sm:mb-7">
            
            {/* ── CARD 1: DIGILOCKER & GOVERNMENT KYC ── */}
            <div className="rounded-2xl bg-[#08080c] border border-white/[0.09] hover:border-white/20 transition-all p-7 sm:p-9 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.6)] min-h-[460px]">
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
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7056ec] to-[#5136e0] flex items-center justify-center text-white shrink-0 shadow-[0_8px_20px_rgba(102,77,240,0.35)]">
                    <FileCheck size={32} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h2 className="font-cinema text-2xl sm:text-[26px] font-bold text-white leading-tight">
                      DigiLocker &amp; Government KYC
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-neutral-400 font-light leading-relaxed mb-6">
                  Cryptographically authenticate your identity using official UIDAI DigiLocker credentials. Verified performers receive a verified badge, priority audition review, and protection against stolen comp cards.
                </p>

                {/* Status Box */}
                {kycRecord ? (
                  <div className="rounded-xl border border-white/[0.08] bg-black/40 p-4 sm:p-5 space-y-3 mb-8">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs sm:text-[13px]">
                        <CheckCircle2 size={16} />
                        <span>Active KYC Certificate</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-400 tracking-wider">
                        {kycRecord.verificationId}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs sm:text-[13px] font-mono py-0.5">
                      <span className="text-neutral-400">Name</span>
                      <span className="text-white font-medium">{kycRecord.verifiedName}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs sm:text-[13px] font-mono py-0.5">
                      <span className="text-neutral-400">Identity Masked</span>
                      <span className="text-white font-medium">{kycRecord.maskedDocNumber}</span>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl border border-white/[0.08] bg-black/40 p-4 sm:p-5 text-xs text-neutral-400 mb-8">
                    No active verification certificate found. Click below to begin instant KYC.
                  </div>
                )}
              </div>

              {/* Action Button: Height ~54px with centered content and bold gold styling */}
              <button
                onClick={() => setIsKYCModalOpen(true)}
                className="w-full h-14 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#f4e2b8] via-[#d4af61] to-[#b89242] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(212,175,97,0.3)] cursor-pointer mt-auto"
              >
                <RotateCw size={16} />
                <span>{kycRecord ? "RE-VERIFY IDENTITY" : "LAUNCH DIGILOCKER KYC"}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* ── CARD 2: MINOR PERFORMER WORK PERMIT ── */}
            <div className="rounded-2xl bg-[#08080c] border border-white/[0.09] hover:border-white/20 transition-all p-7 sm:p-9 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.6)] min-h-[460px]">
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
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#f5d9d5] flex items-center justify-center text-[#2a1715] shrink-0 shadow-[0_8px_20px_rgba(245,217,213,0.2)]">
                    <Users size={30} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h2 className="font-cinema text-2xl sm:text-[26px] font-bold text-white leading-tight">
                      Minor Performer Work Permit
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-neutral-400 font-light leading-relaxed mb-6">
                  Child Artists under 18 require legal guardian authorization, schooling schedule protection, and trust-fund escrow routing under the National Commission for Protection of Child Rights guidelines.
                </p>

                {/* Requirements / Status Checklist Box */}
                <div className="rounded-xl border border-white/[0.08] bg-black/40 p-4 sm:p-5 space-y-4 mb-8">
                  
                  <div className="flex items-start gap-3.5">
                    <Users size={18} className="text-neutral-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-semibold text-white leading-tight mb-0.5">
                        Legal Guardian Authorization
                      </h4>
                      <p className="text-[11px] sm:text-xs text-neutral-400 font-light">
                        Guardian consent and identity verification
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <GraduationCap size={18} className="text-neutral-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-semibold text-white leading-tight mb-0.5">
                        Education Schedule Protection
                      </h4>
                      <p className="text-[11px] sm:text-xs text-neutral-400 font-light">
                        Compliance with academic requirements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <FileText size={18} className="text-neutral-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-semibold text-white leading-tight mb-0.5">
                        NCPCR Guidelines
                      </h4>
                      <p className="text-[11px] sm:text-xs text-neutral-400 font-light">
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

              {/* Action Button: Height ~54px with centered content and bold gold styling */}
              <button
                onClick={() => setIsGuardianModalOpen(true)}
                className="w-full h-14 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#f4e2b8] via-[#d4af61] to-[#b89242] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(212,175,97,0.3)] cursor-pointer mt-auto"
              >
                <Users size={16} />
                <span>OPEN GUARDIAN PORTAL</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

          {/* 3. Privacy & DPDP Notice Section (24px separation, full width) */}
          <div className="rounded-2xl border border-white/[0.09] bg-[#08080c] p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-5">
              <div className="w-13 h-13 rounded-xl bg-transparent border border-[#d4af61]/40 flex items-center justify-center text-[#d4af61] shrink-0">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white mb-1">
                  DATA PROTECTION COMPLIANCE (DPDP ACT 2023)
                </h4>
                <p className="text-xs sm:text-[13px] text-neutral-400 font-light leading-relaxed max-w-3xl">
                  Rangmanch adheres strictly to digital identity privacy standards. All verification requests are routed directly to UIDAI sandboxes without caching raw demographic or biometric data on our servers.
                </p>
              </div>
            </div>

            <a
              href="#learn-more"
              className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#d4af61] transition-colors shrink-0 uppercase tracking-wider"
            >
              <span>Learn More</span>
              <ArrowRight size={15} />
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
