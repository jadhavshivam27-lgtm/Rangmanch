"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigiLockerKYCModal from "@/components/DigiLockerKYCModal";
import ChildPerformerGuardianModal from "@/components/ChildPerformerGuardianModal";
import {
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Lock,
  ArrowRight,
  Fingerprint,
  BookOpen,
  Award,
  Sparkles,
  AlertCircle,
  FileText,
  BadgeCheck,
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
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--charcoal-900)] text-[var(--ivory)] pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header Banner */}
          <div
            className="p-8 sm:p-10 rounded-3xl border relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(16,25,22,0.95), rgba(25,35,32,0.9))",
              borderColor: "rgba(5, 150, 105, 0.3)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            }}
          >
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="badge badge-green text-xs font-mono">MODULES M004 &amp; M005</span>
                <span className="badge badge-gold text-xs">GOVT OF INDIA &amp; NCPCR</span>
              </div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Official Artist Identity &amp; Child Protection Gateway
              </h1>
              <p className="text-sm text-gray-300 leading-relaxed">
                Legally binding digital verification for Indian cinema. Complete instant DigiLocker
                Aadhaar KYC and authorize Minor Child Performer Work Permits with NCPCR compliance.
              </p>
            </div>
          </div>

          {/* Grid of the 2 Dedicated Modules: M004 & M005 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* MODULE M004: DigiLocker & Aadhaar Instant KYC */}
            <div
              className="p-6 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-6"
              style={{
                background: "var(--charcoal-800)",
                borderColor: "rgba(5, 150, 105, 0.3)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <span className="badge badge-green text-xs font-mono font-bold">
                    MODULE M004 • UIDAI
                  </span>
                </div>

                <div>
                  <h2 className="font-display font-bold text-2xl text-white">
                    DigiLocker &amp; Aadhaar Instant KYC
                  </h2>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    National digital identity authentication with 98.4% biometric face match
                  </p>
                </div>

                {/* KYC Active Status Box */}
                {kycRecord ? (
                  <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" /> Identity Verified Active
                      </span>
                      <span className="text-emerald-300 font-bold">{kycRecord.verificationId}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-[var(--text-muted)] block">Aadhaar (Masked):</span>
                        <span className="text-white font-bold">{kycRecord.maskedDocNumber}</span>
                      </div>
                      <div>
                        <span className="text-[var(--text-muted)] block">Face-Match Score:</span>
                        <span className="text-emerald-400 font-bold">{kycRecord.faceMatchScore}% Match</span>
                      </div>
                      <div>
                        <span className="text-[var(--text-muted)] block">Govt Verified Name:</span>
                        <span className="text-white font-bold">{kycRecord.verifiedName}</span>
                      </div>
                      <div>
                        <span className="text-[var(--text-muted)] block">Certified DOB:</span>
                        <span className="text-white font-bold">{kycRecord.verifiedDob}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2 text-xs text-[var(--text-secondary)]">
                    <div className="font-semibold text-white">Verification Not Yet Completed</div>
                    <p className="text-[11px] text-[var(--text-muted)]">
                      Verify with your 12-digit Aadhaar to receive the prestigious Gold Artist Seal
                      and unlock 3.8x more casting invites.
                    </p>
                  </div>
                )}

                {/* Highlights List */}
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Instant 6-digit UIDAI mobile OTP verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>AI Biometric Face-Match against official ID photo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>DPDP Act 2023 compliant (Zero raw Aadhaar storage)</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setIsKYCModalOpen(true)}
                className="btn-primary py-3 px-6 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <Fingerprint className="w-4 h-4" />
                <span>{kycRecord ? "Re-verify or View Certificate" : "Start Instant DigiLocker KYC"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* MODULE M005: Minor / Child Performer Legal Guardian Co-Signing */}
            <div
              className="p-6 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-6"
              style={{
                background: "var(--charcoal-800)",
                borderColor: "rgba(232, 96, 76, 0.3)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--coral-500)]/15 border border-[var(--coral-500)]/30 flex items-center justify-center text-[var(--coral-400)]">
                    <HeartHandshake className="w-7 h-7" />
                  </div>
                  <span className="badge badge-coral text-xs font-mono font-bold">
                    MODULE M005 • NCPCR
                  </span>
                </div>

                <div>
                  <h2 className="font-display font-bold text-2xl text-white">
                    Child Performer Guardian Gateway
                  </h2>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    Statutory legal guardian co-signing &amp; child protection riders (Under 18)
                  </p>
                </div>

                {/* Guardian Work Permit Status Box */}
                {guardianRecord ? (
                  <div className="p-4 rounded-2xl bg-rose-950/30 border border-[var(--coral-500)]/30 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-[var(--coral-500)]/20">
                      <span className="text-[var(--coral-400)] font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" /> NCPCR Permit Active
                      </span>
                      <span className="text-[var(--coral-300)] font-bold">{guardianRecord.approvalCertificateId}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-[var(--text-muted)] block">Minor Performer:</span>
                        <span className="text-white font-bold">{guardianRecord.minorName}</span>
                      </div>
                      <div>
                        <span className="text-[var(--text-muted)] block">Guardian Name:</span>
                        <span className="text-white font-bold">{guardianRecord.guardianName} ({guardianRecord.guardianRelation})</span>
                      </div>
                      <div>
                        <span className="text-[var(--text-muted)] block">Max Shift Cap:</span>
                        <span className="text-emerald-400 font-bold">5 Hours / Day</span>
                      </div>
                      <div>
                        <span className="text-[var(--text-muted)] block">Minor Trust Fund:</span>
                        <span className="text-emerald-400 font-bold">20% Locked</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2 text-xs text-[var(--text-secondary)]">
                    <div className="font-semibold text-white">No Minor Co-Signature on File</div>
                    <p className="text-[11px] text-[var(--text-muted)]">
                      Performers under 18 years old require parent or court-appointed guardian
                      authorization before submitting auditions or signing film agreements.
                    </p>
                  </div>
                )}

                {/* NCPCR Protection Clauses */}
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--coral-400)] shrink-0" />
                    <span>Mandatory 5-hour daily shift cap (No night shoots)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--coral-400)] shrink-0" />
                    <span>Irrevocable 20% Minor Trust Fund bank account lock</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--coral-400)] shrink-0" />
                    <span>Guardian Aadhaar OTP e-Sign complying with IT Act 2000</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setIsGuardianModalOpen(true)}
                className="btn-coral py-3 px-6 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[var(--coral-500)]/20"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>{guardianRecord ? "View Child Work Permit" : "Authorize as Legal Guardian"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* M004 DigiLocker KYC Modal */}
      <DigiLockerKYCModal
        isOpen={isKYCModalOpen}
        onClose={() => setIsKYCModalOpen(false)}
        onSuccess={(record) => setKycRecord(record)}
      />

      {/* M005 Child Performer Guardian Modal */}
      <ChildPerformerGuardianModal
        isOpen={isGuardianModalOpen}
        onClose={() => setIsGuardianModalOpen(false)}
        minorName="Aarav Sharma"
        minorAge={12}
        onSuccess={(record) => setGuardianRecord(record)}
      />

      <Footer />
    </>
  );
}
