"use client";

import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  X,
  Smartphone,
  Fingerprint,
  ArrowRight,
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

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [docType, setDocType] = useState<"aadhaar" | "passport" | "driving_license">("aadhaar");
  const [aadhaarNumber, setAadhaarNumber] = useState("4829 3912 8921");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpSent, setOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [isVerifying, setIsVerifying] = useState(false);
  const [faceMatchProgress, setFaceMatchProgress] = useState(0);
  const [verifiedRecord, setVerifiedRecord] = useState<DigiLockerKYCRecord | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (otpSent && resendTimer > 0) {
      timer = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [otpSent, resendTimer]);

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
    }, 900);
  };

  const handleVerifyOtp = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep(3);
      let progress = 0;
      const interval = setInterval(() => {
        progress += 15;
        setFaceMatchProgress(Math.min(progress, 100));
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
          setTimeout(() => setStep(4), 500);
        }
      }, 120);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl border border-white/20 bg-[#0e0e12] flex flex-col max-h-[90vh] my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10 shrink-0">
          <div>
            <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#c5a059]">
              ✦ DIGITAL IDENTITY PROTOCOL
            </p>
            <h3 className="font-editorial text-2xl text-white font-light mt-1">
              DigiLocker &amp; Identity Verification
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Steps Bar */}
        <div className="px-8 py-3 border-b border-white/10 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-neutral-500">
          {[
            { n: 1, label: "01. Document" },
            { n: 2, label: "02. UIDAI OTP" },
            { n: 3, label: "03. Face Match" },
            { n: 4, label: "04. Verified" },
          ].map((s) => (
            <span
              key={s.n}
              className={step >= s.n ? "text-white font-semibold" : "text-neutral-600"}
            >
              {s.label}
            </span>
          ))}
        </div>

        {/* Body */}
        <div className="p-8 overflow-y-auto space-y-6 flex-1 text-xs">
          {/* Step 1: Document Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <p className="text-neutral-400 leading-relaxed">
                Verify your identity using official government-issued credentials. This issues a verified badge to protect against stolen headshots and confirms eligibility for escrow-backed production contracts.
              </p>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                  Select Identity Document
                </label>
                <div className="grid grid-cols-3 gap-3 font-mono">
                  {[
                    { id: "aadhaar", label: "Aadhaar (UIDAI)" },
                    { id: "passport", label: "Passport" },
                    { id: "driving_license", label: "Driving License" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setDocType(item.id as any)}
                      className={`p-3 border text-center transition-colors uppercase ${
                        docType === item.id
                          ? "border-white bg-white/10 text-white font-semibold"
                          : "border-white/10 text-neutral-500 hover:border-white/20 hover:text-neutral-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                  12-Digit {docType.toUpperCase()} Number
                </label>
                <input
                  type="text"
                  value={aadhaarNumber}
                  onChange={(e) => setAadhaarNumber(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border border-white/15 text-sm font-mono tracking-widest text-white focus:outline-none focus:border-white"
                />
              </div>

              <div className="p-4 border border-white/10 text-[11px] text-neutral-400 font-mono space-y-1">
                <div className="text-white flex items-center gap-1.5 font-semibold">
                  <Lock size={12} className="text-[#c5a059]" /> DPDP Act 2023 Compliant:
                </div>
                <p>
                  Rangmanch does not store raw government identification numbers. A one-way cryptographic SHA-256 token confirms verification with UIDAI sandbox.
                </p>
              </div>
            </div>
          )}

          {/* Step 2: OTP */}
          {step === 2 && (
            <div className="space-y-6 text-center py-4">
              <div className="space-y-2">
                <h4 className="font-editorial text-2xl text-white">Enter 6-Digit Verification Code</h4>
                <p className="text-neutral-400 text-xs">
                  Dispatched to the mobile number registered with your document ending in <span className="font-mono text-white">8921</span>.
                </p>
              </div>

              <div className="flex justify-center gap-2 max-w-xs mx-auto py-2">
                {otp.map((d, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={d || (idx === 0 ? "7" : idx === 1 ? "4" : idx === 2 ? "9" : idx === 3 ? "1" : idx === 4 ? "8" : "3")}
                    onChange={(e) => {
                      const newOtp = [...otp];
                      newOtp[idx] = e.target.value;
                      setOtp(newOtp);
                    }}
                    className="w-10 h-12 bg-transparent border border-white/20 text-center font-mono text-lg text-white focus:outline-none focus:border-white"
                  />
                ))}
              </div>

              <div className="text-[11px] font-mono text-neutral-500">
                {resendTimer > 0 ? (
                  <span>Resend available in {resendTimer}s</span>
                ) : (
                  <button onClick={() => setResendTimer(30)} className="text-white hover:underline">
                    Resend Code
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Face Match */}
          {step === 3 && (
            <div className="space-y-6 text-center py-8">
              <div className="w-16 h-16 rounded-full border border-white/20 mx-auto flex items-center justify-center animate-pulse text-white">
                <Fingerprint size={28} />
              </div>
              <div className="space-y-2">
                <h4 className="font-editorial text-2xl text-white">Comparing Biometric Landmarks</h4>
                <p className="text-neutral-400 max-w-md mx-auto">
                  Cross-verifying profile photography geometry against government registry metadata.
                </p>
              </div>

              <div className="max-w-xs mx-auto space-y-2 font-mono text-[11px]">
                <div className="flex justify-between text-neutral-400">
                  <span>Landmark Accuracy:</span>
                  <span className="text-white font-bold">{faceMatchProgress}%</span>
                </div>
                <div className="w-full h-1 bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-200"
                    style={{ width: `${faceMatchProgress}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Complete */}
          {step === 4 && verifiedRecord && (
            <div className="space-y-6">
              <div className="p-6 border border-emerald-500/30 bg-emerald-500/5 text-center space-y-2">
                <CheckCircle2 size={32} className="text-emerald-400 mx-auto" />
                <h4 className="font-editorial text-2xl text-white">Identity Verified</h4>
                <p className="text-neutral-400 text-xs">
                  Your credentials have been successfully authenticated and recorded.
                </p>
              </div>

              <div className="p-5 border border-white/10 font-mono text-xs space-y-3">
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-neutral-500">Certificate ID:</span>
                  <span className="text-white">{verifiedRecord.verificationId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Verified Name:</span>
                  <span className="text-white">{verifiedRecord.verifiedName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Document Mask:</span>
                  <span className="text-white">{verifiedRecord.maskedDocNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Face Match Score:</span>
                  <span className="text-emerald-400 font-bold">{verifiedRecord.faceMatchScore}%</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-5 border-t border-white/10 flex items-center justify-between shrink-0">
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            UIDAI MEITY CERTIFIED
          </span>

          <div className="flex items-center gap-3">
            {step === 1 && (
              <button
                onClick={handleSendOtp}
                disabled={isVerifying}
                className="btn-editorial-solid py-2 px-6 text-[10px]"
              >
                {isVerifying ? "CONNECTING..." : "DISPATCH OTP"}
              </button>
            )}

            {step === 2 && (
              <button
                onClick={handleVerifyOtp}
                disabled={isVerifying}
                className="btn-editorial-solid py-2 px-6 text-[10px]"
              >
                {isVerifying ? "CONFIRMING..." : "VERIFY OTP"}
              </button>
            )}

            {step === 4 && (
              <button
                onClick={onClose}
                className="btn-editorial-solid py-2 px-6 text-[10px]"
              >
                COMPLETE &amp; RETURN
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
