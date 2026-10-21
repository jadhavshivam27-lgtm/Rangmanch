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
      <main className="min-h-screen bg-[#0a0a0c] text-[#f8f8f6] pt-12 pb-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-10 space-y-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059]">
              ✦ GUILD STANDARDS &amp; LEGAL VERIFICATION
            </p>
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Artist Verification &amp; Child Protection
            </h1>
            <p className="text-sm text-neutral-400 font-light max-w-2xl leading-relaxed">
              Legally binding digital authentication for Indian cinema and theatre professionals. Instant DigiLocker Aadhaar KYC and NCPCR-compliant Minor Performer Authorizations.
            </p>
          </div>

          {/* Verification Modules Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Module 1: DigiLocker & Aadhaar KYC */}
            <div className="p-8 sm:p-10 border border-white/[0.08] bg-[#0e0e12] flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  <span>MODULE M004</span>
                  <span className="text-emerald-400">UIDAI INTEGRATION</span>
                </div>

                <h2 className="font-editorial text-2xl sm:text-3xl font-light text-white">
                  DigiLocker &amp; Government KYC
                </h2>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Cryptographically authenticate your identity using official UIDAI DigiLocker credentials. Verified performers receive a verified badge, priority audition review, and protection against stolen comp cards.
                </p>

                {kycRecord ? (
                  <div className="p-4 border border-white/10 bg-black/40 text-xs font-mono space-y-2">
                    <div className="flex items-center justify-between text-emerald-400 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} /> Active KYC Certificate
                      </span>
                      <span>{kycRecord.verificationId}</span>
                    </div>
                    <div className="text-neutral-400 text-[11px] pt-1 border-t border-white/5 flex justify-between">
                      <span>{kycRecord.verifiedName}</span>
                      <span>Mask: {kycRecord.maskedDocNumber}</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 border border-white/10 text-xs text-neutral-400">
                    No active verification certificate found. Click below to begin instant KYC.
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsKYCModalOpen(true)}
                className="btn-editorial text-[10px] py-3 justify-center w-full"
              >
                {kycRecord ? "RE-VERIFY IDENTITY" : "LAUNCH DIGILOCKER KYC"}
              </button>
            </div>

            {/* Module 2: Child Performer & Guardian Co-Sign */}
            <div className="p-8 sm:p-10 border border-white/[0.08] bg-[#0e0e12] flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  <span>MODULE M005</span>
                  <span className="text-[#c5a059]">NCPCR COMPLIANCE</span>
                </div>

                <h2 className="font-editorial text-2xl sm:text-3xl font-light text-white">
                  Minor Performer Work Permit
                </h2>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Child Artists under 18 require legal guardian authorization, schooling schedule protection, and trust-fund escrow routing under the National Commission for Protection of Child Rights guidelines.
                </p>

                {guardianRecord ? (
                  <div className="p-4 border border-white/10 bg-black/40 text-xs font-mono space-y-2">
                    <div className="flex items-center justify-between text-emerald-400 font-semibold">
                      <span>Co-Sign Status: Active</span>
                      <span>{guardianRecord.minorName}</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 border border-white/10 text-xs text-neutral-400">
                    Mandatory for child artists, teen models, and voice actors under 18 years of age.
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsGuardianModalOpen(true)}
                className="btn-editorial-solid text-[10px] py-3 justify-center w-full"
              >
                OPEN GUARDIAN PORTAL
              </button>
            </div>

          </div>

          {/* Legal / DPDP Notice */}
          <div className="p-6 border border-white/[0.06] text-xs font-mono text-neutral-500 space-y-1">
            <span className="text-white font-semibold uppercase block mb-1">DATA PROTECTION COMPLIANCE (DPDP ACT 2023)</span>
            <p>
              Rangmanch adheres strictly to digital identity privacy standards. All verification requests are routed directly to UIDAI sandboxes without caching raw demographic or biometric data on our servers.
            </p>
          </div>

        </div>
      </main>

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
    </>
  );
}
