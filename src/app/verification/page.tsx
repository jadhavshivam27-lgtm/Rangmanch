"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigiLockerKYCModal from "@/components/DigiLockerKYCModal";
import ChildPerformerGuardianModal from "@/components/ChildPerformerGuardianModal";
import {
  PANVerificationModal,
  PassportOverseasModal,
  GuildCredentialsModal,
  EscrowBankModal,
  LocationPermitModal,
  AgencyContractModal,
  BrandSafetyModal,
  ScreenTestModal,
  StuntSafetyModal,
} from "@/components/VerificationModals";
import {
  CheckCircle2,
  ArrowRight,
  RotateCw,
  Users,
  GraduationCap,
  FileText,
  Shield,
  FileCheck,
  CreditCard,
  Globe,
  Award,
  Building2,
  MapPin,
  FileSignature,
  ShieldCheck,
  Calendar,
  Zap,
  Lock,
} from "lucide-react";
import type {
  DigiLockerKYCRecord,
  GuardianCoSignRecord,
  PANVerificationRecord,
  PassportOverseasRecord,
  GuildCredentialsRecord,
  EscrowBankRecord,
  LocationPermitRecord,
  AgencyContractRecord,
  BrandSafetyRecord,
  ScreenTestRecord,
  StuntSafetyCertRecord,
} from "@/lib/types";

// ─── Module card definition ───────────────────────────────────────
interface ModuleCard {
  id: string;
  module: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
  badgeLabel: string;
  badgeColor: string;
  status: "verified" | "pending" | "not_started";
  statusLabel: string;
  onOpen: () => void;
}

export default function VerificationGatewayPage() {
  // ── Modal open states ──
  const [openModal, setOpenModal] = useState<string | null>(null);

  // ── Verification records ──
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
  const [panRecord, setPanRecord] = useState<PANVerificationRecord | null>(null);
  const [passportRecord, setPassportRecord] = useState<PassportOverseasRecord | null>(null);
  const [guildRecord, setGuildRecord] = useState<GuildCredentialsRecord | null>(null);
  const [escrowRecord, setEscrowRecord] = useState<EscrowBankRecord | null>(null);
  const [locationRecord, setLocationRecord] = useState<LocationPermitRecord | null>(null);
  const [agencyRecord, setAgencyRecord] = useState<AgencyContractRecord | null>(null);
  const [brandRecord, setBrandRecord] = useState<BrandSafetyRecord | null>(null);
  const [screenTestRecord, setScreenTestRecord] = useState<ScreenTestRecord | null>(null);
  const [stuntRecord, setStuntRecord] = useState<StuntSafetyCertRecord | null>(null);

  // ─── Module definitions ───────────────────────────────────────────
  const modules: ModuleCard[] = [
    {
      id: "m004",
      module: "MODULE M004",
      title: "DigiLocker & Government KYC",
      description:
        "Cryptographically authenticate your identity using UIDAI DigiLocker credentials. Verified performers receive priority audition review.",
      icon: FileCheck,
      accentColor: "#7056ec",
      badgeLabel: "UIDAI INTEGRATION",
      badgeColor: "#34d399",
      status: kycRecord ? "verified" : "not_started",
      statusLabel: kycRecord ? `Verified — ${kycRecord.verificationId}` : "Not Started",
      onOpen: () => setOpenModal("m004"),
    },
    {
      id: "m005",
      module: "MODULE M005",
      title: "Minor Performer Work Permit",
      description:
        "Child artists under 18 require guardian authorization, schooling schedule protection, and trust-fund escrow routing under NCPCR guidelines.",
      icon: Users,
      accentColor: "#f472b6",
      badgeLabel: "NCPCR COMPLIANCE",
      badgeColor: "#d4af61",
      status: guardianRecord ? "verified" : "not_started",
      statusLabel: guardianRecord ? `Co-Signed — ${guardianRecord.minorName}` : "Not Started",
      onOpen: () => setOpenModal("m005"),
    },
    {
      id: "m011",
      module: "MODULE M011",
      title: "PAN Verification — TDS",
      description:
        "Link your PAN for compliant TDS deduction under Section 194J on all casting fees and compensations above ₹30,000.",
      icon: CreditCard,
      accentColor: "#f59e0b",
      badgeLabel: "INCOME TAX ACT",
      badgeColor: "#f59e0b",
      status: panRecord ? "verified" : "not_started",
      statusLabel: panRecord ? `Verified — ${panRecord.panNumber}` : "Not Started",
      onOpen: () => setOpenModal("m011"),
    },
    {
      id: "m012",
      module: "MODULE M012",
      title: "Passport & Overseas Clearance",
      description:
        "Required for international location shoots. MHA clearance and travel insurance mandatory for all overseas productions.",
      icon: Globe,
      accentColor: "#60a5fa",
      badgeLabel: "MHA CLEARANCE",
      badgeColor: "#60a5fa",
      status: passportRecord ? "verified" : "not_started",
      statusLabel: passportRecord ? `Approved — ${passportRecord.destinationCountry}` : "Not Started",
      onOpen: () => setOpenModal("m012"),
    },
    {
      id: "m013",
      module: "MODULE M013",
      title: "Guild & Union Credentials",
      description:
        "Verify your CINTAA, FWICE, or AIFEC guild membership. Cross-referenced against industry blacklist registry.",
      icon: Award,
      accentColor: "#a78bfa",
      badgeLabel: "UNION VERIFICATION",
      badgeColor: "#a78bfa",
      status: guildRecord ? "verified" : "not_started",
      statusLabel: guildRecord ? `Verified — ${guildRecord.guildName} ${guildRecord.membershipId}` : "Not Started",
      onOpen: () => setOpenModal("m013"),
    },
    {
      id: "m014",
      module: "MODULE M014",
      title: "Bank Account & Escrow Linkage",
      description:
        "Link a bank account for escrow-protected compensation. All casting payments held in escrow and released post-contract milestones.",
      icon: Building2,
      accentColor: "#34d399",
      badgeLabel: "ESCROW PROTECTED",
      badgeColor: "#34d399",
      status: escrowRecord ? "verified" : "not_started",
      statusLabel: escrowRecord ? `Active — ${escrowRecord.maskedAccountNumber}` : "Not Started",
      onOpen: () => setOpenModal("m014"),
    },
    {
      id: "m015",
      module: "MODULE M015",
      title: "Shoot Location Permit",
      description:
        "Register location permits for government, heritage, forest, or public spaces. Includes liability insurance verification.",
      icon: MapPin,
      accentColor: "#fb923c",
      badgeLabel: "PERMIT REGISTRY",
      badgeColor: "#fb923c",
      status: locationRecord ? "verified" : "not_started",
      statusLabel: locationRecord ? `Approved — ${locationRecord.permitNumber}` : "Not Started",
      onOpen: () => setOpenModal("m015"),
    },
    {
      id: "m016",
      module: "MODULE M016",
      title: "Agency Contract & Exclusivity",
      description:
        "Register your talent agency agreement to prevent commission fraud and establish legally binding exclusivity terms.",
      icon: FileSignature,
      accentColor: "#f472b6",
      badgeLabel: "CONTRACT REGISTRY",
      badgeColor: "#f472b6",
      status: agencyRecord ? "verified" : "not_started",
      statusLabel: agencyRecord ? `Active — ${agencyRecord.agencyName}` : "Not Started",
      onOpen: () => setOpenModal("m016"),
    },
    {
      id: "m018",
      module: "MODULE M018",
      title: "Brand Safety Clearance",
      description:
        "Commercial shoots require brand safety clearance. Social media audit + conflict-of-interest check + NDA if required.",
      icon: ShieldCheck,
      accentColor: "#e879f9",
      badgeLabel: "BRAND COMPLIANCE",
      badgeColor: "#e879f9",
      status: brandRecord ? "verified" : "not_started",
      statusLabel: brandRecord ? `Cleared — ${brandRecord.brandName}` : "Not Started",
      onOpen: () => setOpenModal("m018"),
    },
    {
      id: "m019",
      module: "MODULE M019",
      title: "Screen Test Booking",
      description:
        "Book and confirm callback audition slots with production teams. Includes call-sheet issuance and travel reimbursement.",
      icon: Calendar,
      accentColor: "#38bdf8",
      badgeLabel: "CALLBACK SYSTEM",
      badgeColor: "#38bdf8",
      status: screenTestRecord ? "verified" : "not_started",
      statusLabel: screenTestRecord ? `Scheduled — ${screenTestRecord.scheduledAt.slice(0, 10)}` : "Not Started",
      onOpen: () => setOpenModal("m019"),
    },
    {
      id: "m020",
      module: "MODULE M020",
      title: "Stunt Safety Certification",
      description:
        "Mandatory for stunt and special skills sequences. Insurance coverage and medical clearance verification required.",
      icon: Zap,
      accentColor: "#ef4444",
      badgeLabel: "ISA CERTIFIED",
      badgeColor: "#ef4444",
      status: stuntRecord ? "verified" : "not_started",
      statusLabel: stuntRecord ? `Valid — ${stuntRecord.certificationId}` : "Not Started",
      onOpen: () => setOpenModal("m020"),
    },
  ];

  const verifiedCount = modules.filter((m) => m.status === "verified").length;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#040406",
        color: "#f5f5f7",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <main style={{ flex: 1, padding: "48px 0 96px" }}>
        <div className="cinema-container">

          {/* ── Page Header ── */}
          <div style={{ marginBottom: "48px" }}>
            <p
              style={{
                fontSize: "11px",
                fontFamily: "monospace",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "#d4af61",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              TRUST &amp; SAFETY
            </p>
            <h1
              className="font-cinema"
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              Verification &amp; Trust Gateway
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "#7a7a88",
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: "680px",
              }}
            >
              Complete your verification modules to unlock casting opportunities, protect your
              identity, and build verified trust with productions across India.
            </p>

            {/* Progress bar */}
            <div style={{ marginTop: "28px", maxWidth: "480px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  color: "#5a5a68",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                <span>Verification Progress</span>
                <span style={{ color: "#d4af61" }}>{verifiedCount} / {modules.length} Complete</span>
              </div>
              <div
                style={{
                  height: "6px",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  borderRadius: "9999px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${(verifiedCount / modules.length) * 100}%`,
                    background: "linear-gradient(90deg, #d4af61, #f4e2b8)",
                    borderRadius: "9999px",
                    transition: "width 0.5s ease",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ── Modules Grid — 2 columns ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            {modules.map((mod) => {
              const Icon = mod.icon;
              const isVerified = mod.status === "verified";
              return (
                <div
                  key={mod.id}
                  style={{
                    backgroundColor: "#0b0b10",
                    border: `1px solid ${isVerified ? mod.accentColor + "40" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: "20px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  {/* Card Top Row */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px", flex: 1 }}>
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "14px",
                          background: `${mod.accentColor}18`,
                          border: `1px solid ${mod.accentColor}35`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: mod.accentColor,
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "10px",
                            fontFamily: "monospace",
                            textTransform: "uppercase",
                            letterSpacing: "0.18em",
                            color: "#5a5a68",
                            marginBottom: "3px",
                          }}
                        >
                          {mod.module}
                        </div>
                        <h2
                          className="font-cinema"
                          style={{ fontSize: "17px", fontWeight: 700, color: "#ffffff", lineHeight: 1.3 }}
                        >
                          {mod.title}
                        </h2>
                      </div>
                    </div>

                    {/* Status Badge */}
                    {isVerified ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          padding: "4px 10px",
                          borderRadius: "9999px",
                          backgroundColor: "rgba(52,211,153,0.1)",
                          border: "1px solid rgba(52,211,153,0.3)",
                          fontSize: "9px",
                          fontFamily: "monospace",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          color: "#34d399",
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        <CheckCircle2 size={11} />
                        VERIFIED
                      </div>
                    ) : (
                      <div
                        style={{
                          padding: "4px 10px",
                          borderRadius: "9999px",
                          backgroundColor: `${mod.badgeColor}15`,
                          border: `1px solid ${mod.badgeColor}30`,
                          fontSize: "9px",
                          fontFamily: "monospace",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          color: mod.badgeColor,
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        {mod.badgeLabel}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: "12px", color: "#7a7a88", lineHeight: 1.7, fontWeight: 300 }}>
                    {mod.description}
                  </p>

                  {/* Status line */}
                  <div
                    style={{
                      padding: "10px 14px",
                      background: isVerified ? "rgba(52,211,153,0.06)" : "rgba(255,255,255,0.02)",
                      border: `1px solid ${isVerified ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.06)"}`,
                      borderRadius: "10px",
                      fontSize: "11px",
                      fontFamily: "monospace",
                      color: isVerified ? "#34d399" : "#5a5a68",
                    }}
                  >
                    {isVerified ? "✓ " : "○ "}{mod.statusLabel}
                  </div>

                  {/* Action button */}
                  <button
                    onClick={mod.onOpen}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      width: "100%",
                      height: "48px",
                      borderRadius: "12px",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      transition: "all 0.2s ease",
                      background: isVerified
                        ? "rgba(255,255,255,0.05)"
                        : `linear-gradient(135deg, ${mod.accentColor}dd, ${mod.accentColor})`,
                      color: isVerified ? "#9a9aa8" : "#040406",
                    }}
                  >
                    {isVerified ? <RotateCw size={14} /> : <ArrowRight size={14} />}
                    {isVerified ? "Re-Verify" : "Begin Verification"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* ── DPDP Act Notice ── */}
          <div
            style={{
              backgroundColor: "#0b0b10",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px",
              padding: "24px 32px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  border: "1px solid rgba(212,175,97,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d4af61",
                  flexShrink: 0,
                }}
              >
                <Shield size={22} />
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#ffffff",
                    marginBottom: "4px",
                  }}
                >
                  DATA PROTECTION COMPLIANCE (DPDP ACT 2023)
                </h4>
                <p style={{ fontSize: "12px", color: "#7a7a88", fontWeight: 300, lineHeight: 1.6, maxWidth: "640px" }}>
                  All verification requests are routed directly to UIDAI sandboxes without caching
                  raw demographic or biometric data on Rangmanch servers.
                </p>
              </div>
            </div>
            <a
              href="#learn-more"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "11px",
                fontWeight: 700,
                color: "#ffffff",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                whiteSpace: "nowrap",
              }}
            >
              Learn More <ArrowRight size={13} />
            </a>
          </div>

        </div>
      </main>

      {/* ─── Modals ────────────────────────────────────────────── */}
      <DigiLockerKYCModal
        isOpen={openModal === "m004"}
        onClose={() => setOpenModal(null)}
        onSuccess={(r) => { setKycRecord(r); setOpenModal(null); }}
      />
      <ChildPerformerGuardianModal
        isOpen={openModal === "m005"}
        onClose={() => setOpenModal(null)}
        onSuccess={(r) => { setGuardianRecord(r); setOpenModal(null); }}
      />
      <PANVerificationModal
        isOpen={openModal === "m011"}
        onClose={() => setOpenModal(null)}
        onSuccess={(r) => { setPanRecord(r); setOpenModal(null); }}
      />
      <PassportOverseasModal
        isOpen={openModal === "m012"}
        onClose={() => setOpenModal(null)}
        onSuccess={(r) => { setPassportRecord(r); setOpenModal(null); }}
      />
      <GuildCredentialsModal
        isOpen={openModal === "m013"}
        onClose={() => setOpenModal(null)}
        onSuccess={(r) => { setGuildRecord(r); setOpenModal(null); }}
      />
      <EscrowBankModal
        isOpen={openModal === "m014"}
        onClose={() => setOpenModal(null)}
        onSuccess={(r) => { setEscrowRecord(r); setOpenModal(null); }}
      />
      <LocationPermitModal
        isOpen={openModal === "m015"}
        onClose={() => setOpenModal(null)}
        onSuccess={(r) => { setLocationRecord(r); setOpenModal(null); }}
      />
      <AgencyContractModal
        isOpen={openModal === "m016"}
        onClose={() => setOpenModal(null)}
        onSuccess={(r) => { setAgencyRecord(r); setOpenModal(null); }}
      />
      <BrandSafetyModal
        isOpen={openModal === "m018"}
        onClose={() => setOpenModal(null)}
        onSuccess={(r) => { setBrandRecord(r); setOpenModal(null); }}
      />
      <ScreenTestModal
        isOpen={openModal === "m019"}
        onClose={() => setOpenModal(null)}
        onSuccess={(r) => { setScreenTestRecord(r); setOpenModal(null); }}
      />
      <StuntSafetyModal
        isOpen={openModal === "m020"}
        onClose={() => setOpenModal(null)}
        onSuccess={(r) => { setStuntRecord(r); setOpenModal(null); }}
      />

      <Footer />
    </div>
  );
}
