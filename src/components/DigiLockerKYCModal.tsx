"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  X,
  Smartphone,
  FileCheck,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  Download,
  Fingerprint,
  RefreshCw,
  Eye,
} from "lucide-react";
import { useAuthStore } from "@/lib/auth";
import type { DigiLockerKYCRecord } from "@/lib/types";

interface DigiLockerKYCModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (record: DigiLockerKYCRecord) => void;
}

export default function DigiLockerKYCModal({
  isOpen,
  onClose,
  onSuccess,
}: DigiLockerKYCModalProps) {
  const { user } = useAuthStore();

  // Multi-step flow: 1: Doc Select, 2: Aadhaar OTP, 3: Biometric Face Match, 4: Verified Certificate
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [docType, setDocType] = useState<"aadhaar" | "passport" | "driving_license">("aadhaar");
  const [aadhaarNumber, setAadhaarNumber] = useState("4829 3912 8921");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpSent, setOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [isVerifying, setIsVerifying] = useState(false);

  // Biometric Face Match
  const [faceMatchProgress, setFaceMatchProgress] = useState(0);
  const [verifiedRecord, setVerifiedRecord] = useState<DigiLockerKYCRecord | null>(null);

  // OTP Timer countdown
  // OTP Timer countdown
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (otpSent && resendTimer > 0) {
      timer = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [otpSent, resendTimer]);

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSendOtp = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setOtpSent(true);
      setStep(2);
      setResendTimer(30);
    }, 1200);
  };

  const handleVerifyOtp = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep(3);
      // Run Face Match simulation
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setFaceMatchProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          const record: DigiLockerKYCRecord = {
            verificationId: `DL-KYC-${Date.now().toString().slice(-6)}`,
            documentType: docType,
            maskedDocNumber: `XXXX-XXXX-${aadhaarNumber.replace(/\s/g, "").slice(-4)}`,
            verifiedName: user?.name || "Priya Sharma",
            verifiedDob: "14-Aug-1998",
            gender: "Female",
            faceMatchScore: 98.4,
            status: "verified",
            verifiedAt: new Date().toISOString(),
            certificateHash: "sha256-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            digiLockerDocUri: "in.gov.uidai-adhr-98218491829",
          };
          setVerifiedRecord(record);
          if (onSuccess) onSuccess(record);
          setTimeout(() => setStep(4), 600);
        }
      }, 150);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto mx-auto"
        style={{
          background: "var(--charcoal-900)",
          borderColor: "rgba(5, 150, 105, 0.4)",
          boxShadow: "0 25px 70px rgba(0,0,0,0.85), 0 0 40px rgba(5, 150, 105, 0.15)",
        }}
      >
        {/* Top Header with DigiLocker Official Seal */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b shrink-0"
          style={{
            background: "linear-gradient(90deg, rgba(16,24,20,0.95), rgba(20,35,28,0.95))",
            borderColor: "rgba(5, 150, 105, 0.25)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-display font-bold text-lg text-[var(--ivory)]">
                  DigiLocker &amp; Aadhaar Instant KYC
                </span>
                <span className="badge badge-green text-[10px] font-mono">GOVT OF INDIA</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                National Digital Identity Verification for Indian Cine Artists (M004)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress Bar */}
        <div className="px-6 py-3.5 bg-black/40 border-b border-white/5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-xs">
            {[
              { num: 1, label: "Document Select" },
              { num: 2, label: "UIDAI OTP" },
              { num: 3, label: "Face Match" },
              { num: 4, label: "Verified Seal" },
            ].map((st) => (
              <div
                key={st.num}
                className={`flex items-center gap-2 font-medium px-2.5 py-1.5 rounded-xl border transition-all ${
                  step >= st.num
                    ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/30 font-semibold"
                    : "text-[var(--text-muted)] bg-white/5 border-transparent"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold shrink-0 ${
                    step >= st.num
                      ? "bg-emerald-500 text-black font-bold"
                      : "bg-white/10 text-[var(--text-muted)]"
                  }`}
                >
                  {st.num}
                </span>
                <span className="text-[11px] truncate">{st.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Dynamic Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* STEP 1: Document Select & Aadhaar Input */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 flex items-start gap-3">
                <Fingerprint className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-0.5">
                    Why KYC Verification Matters for Actors:
                  </strong>
                  Verified actors receive a prominent <strong>Gold DigiLocker Badge</strong>, 3.8x more
                  casting director audition invites, and protection against stolen identity and fake
                  profiles across Indian cinema.
                </div>
              </div>

              {/* Document Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[var(--gold-300)] uppercase tracking-wider block">
                  Select Govt Issued Document:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "aadhaar", label: "Aadhaar (UIDAI)", sub: "Instant OTP" },
                    { id: "passport", label: "Indian Passport", sub: "Global Identity" },
                    { id: "driving_license", label: "Driving License", sub: "State Transport" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setDocType(item.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        docType === item.id
                          ? "bg-emerald-950/40 border-emerald-500 text-white shadow-md shadow-emerald-500/20"
                          : "bg-black/30 border-white/10 text-[var(--text-secondary)] hover:border-white/20"
                      }`}
                    >
                      <div className="font-bold text-xs">{item.label}</div>
                      <div className="text-[10px] text-[var(--text-muted)] font-mono">{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Aadhaar Number Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[var(--gold-300)] uppercase tracking-wider block">
                  Enter 12-Digit {docType.toUpperCase()} Number:
                </label>
                <div className="relative">
                  <Fingerprint className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
                  <input
                    type="text"
                    value={aadhaarNumber}
                    onChange={(e) => setAadhaarNumber(e.target.value)}
                    placeholder="4829 3912 8921"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm font-mono tracking-widest text-[var(--ivory)] focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div className="text-[11px] text-[var(--text-muted)] flex items-center justify-between">
                  <span>An OTP will be dispatched to your Aadhaar-linked mobile number</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-mono">
                    <Lock className="w-3 h-3" /> 256-Bit Encrypted
                  </span>
                </div>
              </div>

              {/* DPDP Privacy Guarantee */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-[11px] text-[var(--text-secondary)] space-y-1">
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" /> DPDP Act 2023 Compliance:
                </div>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  Rangmanch does NOT store your raw Aadhaar number. We only store an encrypted SHA-256
                  government verification token. Your biometric and personal credentials remain 100% private.
                </p>
              </div>
            </div>
          )}

          {/* STEP 2: UIDAI Instant OTP Input */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn text-center">
              <div className="w-16 h-16 rounded-full mx-auto bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Smartphone className="w-8 h-8" />
              </div>

              <div className="space-y-1 max-w-sm mx-auto">
                <h3 className="font-display font-bold text-xl text-[var(--ivory)]">
                  Enter UIDAI 6-Digit OTP
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Dispatched to mobile linked with Aadhaar ending in{" "}
                  <strong className="text-white font-mono">8921</strong>
                </p>
              </div>

              {/* 6 Digit OTP Inputs */}
              <div className="flex justify-center gap-2.5 max-w-xs mx-auto">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit || (idx === 0 ? "7" : idx === 1 ? "4" : idx === 2 ? "9" : idx === 3 ? "1" : idx === 4 ? "8" : "3")}
                    onChange={(e) => {
                      const newOtp = [...otp];
                      newOtp[idx] = e.target.value;
                      setOtp(newOtp);
                    }}
                    className="w-10 h-12 rounded-xl bg-black/40 border border-white/20 text-center font-mono font-bold text-lg text-emerald-400 focus:outline-none focus:border-emerald-500 shadow-inner"
                  />
                ))}
              </div>

              <div className="text-xs text-[var(--text-muted)] flex items-center justify-center gap-2">
                <span>Didn&apos;t receive code?</span>
                {resendTimer > 0 ? (
                  <span className="font-mono text-emerald-400 font-bold">Resend in {resendTimer}s</span>
                ) : (
                  <button
                    onClick={() => setResendTimer(30)}
                    className="text-emerald-400 hover:underline font-bold"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: Biometric Face-Match AI Engine */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn text-center py-4">
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 animate-spin" />
                <div className="w-full h-full rounded-full flex items-center justify-center text-emerald-400">
                  <Fingerprint className="w-10 h-10 animate-pulse" />
                </div>
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="font-display font-bold text-xl text-[var(--ivory)]">
                  Running Biometric Face-Match AI...
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  Comparing facial vector geometry between your DigiLocker identity photo and your
                  registered Rangmanch profile headshot.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="max-w-md mx-auto space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[var(--text-muted)]">Facial Landmark Mesh:</span>
                  <span className="text-emerald-400 font-bold">{faceMatchProgress}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                    style={{ width: `${faceMatchProgress}%` }}
                  />
                </div>
                <div className="text-[11px] text-[var(--text-muted)] flex justify-between">
                  <span>Iris Distance: Verified</span>
                  <span>Liveness: 100% Genuine</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Verified Certificate & DigiLocker Gold Badge Issued */}
          {step === 4 && verifiedRecord && (
            <div className="space-y-6 animate-fadeIn">
              {/* Success Banner */}
              <div
                className="p-6 rounded-2xl border text-center space-y-3 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(16,35,24,0.95), rgba(20,50,35,0.9))",
                  borderColor: "rgba(5, 150, 105, 0.4)",
                  boxShadow: "0 10px 40px rgba(5, 150, 105, 0.2)",
                }}
              >
                <div className="w-16 h-16 rounded-full mx-auto bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <span className="badge badge-green text-xs font-bold uppercase tracking-wider mb-2">
                    DIGILOCKER VERIFIED CINE ARTIST
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    KYC Verification Complete!
                  </h3>
                  <p className="text-xs text-emerald-200 mt-1 max-w-md mx-auto">
                    Your identity has been cryptographically confirmed with UIDAI and Ministry of
                    Electronics &amp; IT (MeitY).
                  </p>
                </div>
              </div>

              {/* Verified Certificate Card */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-[var(--text-muted)]">Official Certificate ID:</span>
                  <span className="text-emerald-400 font-bold">{verifiedRecord.verificationId}</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[var(--text-muted)] block text-[11px]">Govt Verified Name:</span>
                    <span className="text-white font-bold">{verifiedRecord.verifiedName}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block text-[11px]">Date of Birth / Age:</span>
                    <span className="text-white font-bold">{verifiedRecord.verifiedDob} (26 yrs)</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block text-[11px]">Document Masked ID:</span>
                    <span className="text-white font-bold">{verifiedRecord.maskedDocNumber}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block text-[11px]">Biometric Face Match:</span>
                    <span className="text-emerald-400 font-bold">{verifiedRecord.faceMatchScore}% Match</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 text-[10px] text-[var(--text-muted)] truncate">
                  SHA-256 Hash: {verifiedRecord.certificateHash}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions Bar */}
        <div
          className="flex items-center justify-between px-6 py-4 border-t bg-[var(--charcoal-900)] shrink-0"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            UIDAI &amp; MeitY Sandbox Integration Active
          </span>

          <div className="flex items-center gap-3">
            {step === 1 && (
              <button
                onClick={handleSendOtp}
                disabled={isVerifying}
                className="btn-primary text-xs py-2.5 px-6 font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <span>{isVerifying ? "Contacting UIDAI..." : "Dispatch Aadhaar OTP"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {step === 2 && (
              <button
                onClick={handleVerifyOtp}
                disabled={isVerifying}
                className="btn-primary text-xs py-2.5 px-6 font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <span>{isVerifying ? "Verifying Credentials..." : "Confirm & Run Face Match"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {step === 4 && (
              <button
                onClick={onClose}
                className="btn-primary text-xs py-2.5 px-6 font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Return to Profile with Gold Badge</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
