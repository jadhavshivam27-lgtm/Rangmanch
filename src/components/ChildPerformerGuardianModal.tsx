"use client";

import { useState } from "react";
import {
  ShieldAlert,
  UserCheck,
  CheckCircle,
  X,
  FileText,
  Clock,
  BookOpen,
  DollarSign,
  Lock,
  ArrowRight,
  Download,
  AlertCircle,
  HeartHandshake,
} from "lucide-react";
import type { GuardianCoSignRecord } from "@/lib/types";

interface ChildPerformerGuardianModalProps {
  isOpen: boolean;
  onClose: () => void;
  minorName?: string;
  minorAge?: number;
  onSuccess?: (record: GuardianCoSignRecord) => void;
}

export default function ChildPerformerGuardianModal({
  isOpen,
  onClose,
  minorName = "Aarav Sharma",
  minorAge = 12,
  onSuccess,
}: ChildPerformerGuardianModalProps) {
  // Step 1: Guardian Details, Step 2: NCPCR Child Protection Riders, Step 3: Aadhaar e-Sign, Step 4: Approved Permit
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Guardian Form State
  const [guardianName, setGuardianName] = useState("Sunita Sharma");
  const [relation, setRelation] = useState<"Mother" | "Father" | "Legal Guardian">("Mother");
  const [guardianPhone, setGuardianPhone] = useState("+91 98201 49281");
  const [guardianEmail, setGuardianEmail] = useState("sunita.sharma@example.com");
  const [guardianAadhaar, setGuardianAadhaar] = useState("6829 4910 8219");

  // NCPCR Statutory Clauses Checkboxes
  const [clauseSchooling, setClauseSchooling] = useState(true);
  const [clauseMaxHours, setClauseMaxHours] = useState(true);
  const [clauseTrustFund, setClauseTrustFund] = useState(true);
  const [clauseChaperone, setClauseChaperone] = useState(true);

  // OTP e-Sign State
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isSigning, setIsSigning] = useState(false);
  const [permitRecord, setPermitRecord] = useState<GuardianCoSignRecord | null>(null);

  if (!isOpen) return null;

  const handleVerifyGuardianSign = () => {
    setIsSigning(true);
    setTimeout(() => {
      setIsSigning(false);
      const record: GuardianCoSignRecord = {
        recordId: `NCPCR-${Date.now().toString().slice(-6)}`,
        minorTalentId: "talent-child-01",
        minorName,
        minorAge,
        guardianName,
        guardianRelation: relation,
        guardianPhone,
        guardianEmail,
        guardianAadhaarMasked: `XXXX-XXXX-${guardianAadhaar.slice(-4)}`,
        ncpcrComplianceConfirmed: true,
        educationProtectionClauseAgreed: clauseSchooling,
        maxDailyHoursAgreed: clauseMaxHours,
        trustFundAccountLinked: clauseTrustFund,
        digitalSignatureTimestamp: new Date().toISOString(),
        status: "approved",
        approvalCertificateId: `PERMIT-GOV-IN-${Math.floor(100000 + Math.random() * 900000)}`,
      };
      setPermitRecord(record);
      if (onSuccess) onSuccess(record);
      setStep(4);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        style={{
          background: "var(--charcoal-900)",
          borderColor: "rgba(232, 96, 76, 0.4)",
          boxShadow: "0 25px 70px rgba(0,0,0,0.85), 0 0 40px rgba(232, 96, 76, 0.15)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b shrink-0"
          style={{
            background: "linear-gradient(90deg, rgba(30,18,18,0.95), rgba(40,22,22,0.95))",
            borderColor: "rgba(232, 96, 76, 0.25)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--coral-500)]/15 border border-[var(--coral-500)]/30 flex items-center justify-center text-[var(--coral-400)]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg text-[var(--ivory)]">
                  Minor / Child Performer Guardian Gateway
                </span>
                <span className="badge badge-coral text-[10px] font-mono">M005 • NCPCR RIDER</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Statutory Legal Guardian Consent &amp; Child Protection Gateway (Under 18)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress Bar */}
        <div className="px-6 py-3 bg-black/30 border-b border-white/5 flex items-center justify-between text-xs">
          {[
            { num: 1, label: "Guardian Identity" },
            { num: 2, label: "NCPCR Safety Riders" },
            { num: 3, label: "Guardian e-Sign" },
            { num: 4, label: "Approved Work Permit" },
          ].map((st) => (
            <div
              key={st.num}
              className={`flex items-center gap-1.5 font-medium ${
                step >= st.num ? "text-[var(--coral-400)]" : "text-[var(--text-muted)]"
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                  step >= st.num
                    ? "bg-[var(--coral-500)] text-white"
                    : "bg-white/10 text-[var(--text-muted)]"
                }`}
              >
                {st.num}
              </span>
              <span className="hidden sm:inline text-[11px]">{st.label}</span>
            </div>
          ))}
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* STEP 1: Guardian Information */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              {/* Minor Performer Banner */}
              <div className="p-4 rounded-2xl bg-[var(--coral-500)]/10 border border-[var(--coral-500)]/20 flex items-center justify-between text-xs">
                <div>
                  <div className="text-[11px] text-[var(--coral-300)] font-bold uppercase tracking-wider">
                    Child Performer Detected:
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {minorName} ({minorAge} Years Old)
                  </div>
                </div>
                <span className="badge badge-coral text-[10px]">MANDATORY GUARDIAN CO-SIGN</span>
              </div>

              {/* Form Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="text-[var(--text-muted)] block mb-1 font-semibold">
                    Legal Guardian Full Name (as per Govt ID):
                  </label>
                  <input
                    type="text"
                    value={guardianName}
                    onChange={(e) => setGuardianName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-[var(--ivory)] focus:outline-none focus:border-[var(--coral-500)]"
                  />
                </div>

                <div>
                  <label className="text-[var(--text-muted)] block mb-1 font-semibold">
                    Relationship to Performer:
                  </label>
                  <select
                    value={relation}
                    onChange={(e) => setRelation(e.target.value as any)}
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-[var(--ivory)] focus:outline-none focus:border-[var(--coral-500)] cursor-pointer"
                  >
                    <option value="Mother">Mother</option>
                    <option value="Father">Father</option>
                    <option value="Legal Guardian">Court-Appointed Legal Guardian</option>
                  </select>
                </div>

                <div>
                  <label className="text-[var(--text-muted)] block mb-1 font-semibold">
                    Guardian Mobile Number (Aadhaar linked):
                  </label>
                  <input
                    type="text"
                    value={guardianPhone}
                    onChange={(e) => setGuardianPhone(e.target.value)}
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-[var(--ivory)] focus:outline-none focus:border-[var(--coral-500)]"
                  />
                </div>

                <div>
                  <label className="text-[var(--text-muted)] block mb-1 font-semibold">
                    Guardian Aadhaar ID:
                  </label>
                  <input
                    type="text"
                    value={guardianAadhaar}
                    onChange={(e) => setGuardianAadhaar(e.target.value)}
                    className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-[var(--ivory)] font-mono tracking-wider focus:outline-none focus:border-[var(--coral-500)]"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-[11px] text-[var(--text-muted)] leading-relaxed">
                Under the Indian Child Labour (Prohibition &amp; Regulation) Act, no minor may submit
                auditions, sign talent representation memos, or appear on set without legal guardian
                verified digital consent.
              </div>
            </div>
          )}

          {/* STEP 2: NCPCR Statutory Protection Riders */}
          {step === 2 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl text-[var(--ivory)]">
                  National Child Protection Riders
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Statutory safety conditions required for all entertainment productions in India
                </p>
              </div>

              <div className="space-y-3">
                {/* Clause 1: Education */}
                <label className="p-4 rounded-2xl bg-black/30 border border-white/5 flex items-start gap-3 cursor-pointer hover:border-white/15 transition-all">
                  <input
                    type="checkbox"
                    checked={clauseSchooling}
                    onChange={(e) => setClauseSchooling(e.target.checked)}
                    className="accent-[var(--coral-500)] rounded mt-1 shrink-0"
                  />
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                      1. Mandatory Schooling &amp; Examination Clause
                    </span>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      Shooting schedules shall not interfere with school education or examinations.
                      Production must provide a dedicated quiet study area and a private tutor for
                      shoots exceeding 3 days.
                    </p>
                  </div>
                </label>

                {/* Clause 2: Max 5 Hours On Set */}
                <label className="p-4 rounded-2xl bg-black/30 border border-white/5 flex items-start gap-3 cursor-pointer hover:border-white/15 transition-all">
                  <input
                    type="checkbox"
                    checked={clauseMaxHours}
                    onChange={(e) => setClauseMaxHours(e.target.checked)}
                    className="accent-[var(--coral-500)] rounded mt-1 shrink-0"
                  />
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      2. Strict 5-Hour Daily Shift Cap (No Night Shoots)
                    </span>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      A minor shall not be made to work for more than 5 hours in a day, including rest
                      intervals. No child shall work between 7:00 PM and 8:00 AM under any circumstances.
                    </p>
                  </div>
                </label>

                {/* Clause 3: 20% Minor Trust Fund Lock */}
                <label className="p-4 rounded-2xl bg-black/30 border border-white/5 flex items-start gap-3 cursor-pointer hover:border-white/15 transition-all">
                  <input
                    type="checkbox"
                    checked={clauseTrustFund}
                    onChange={(e) => setClauseTrustFund(e.target.checked)}
                    className="accent-[var(--coral-500)] rounded mt-1 shrink-0"
                  />
                  <div className="text-xs space-y-1">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                      3. Irrevocable 20% Minor Trust Fund Allocation
                    </span>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      A minimum of 20% of the child performer&apos;s total earnings must be deposited directly
                      into an irrevocable fixed deposit / minor bank trust fund maturing at age 18.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* STEP 3: Guardian Aadhaar OTP e-Sign */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn text-center py-2">
              <div className="w-16 h-16 rounded-full mx-auto bg-[var(--coral-500)]/15 border border-[var(--coral-500)]/30 flex items-center justify-center text-[var(--coral-400)]">
                <Lock className="w-8 h-8" />
              </div>

              <div className="space-y-1 max-w-sm mx-auto">
                <h3 className="font-display font-bold text-xl text-[var(--ivory)]">
                  Legal Guardian Digital Signature
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Enter UIDAI OTP sent to Guardian ({guardianName}) at{" "}
                  <strong className="text-white font-mono">{guardianPhone}</strong>
                </p>
              </div>

              {/* 6 Digit OTP */}
              <div className="flex justify-center gap-2.5 max-w-xs mx-auto">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit || (idx === 0 ? "5" : idx === 1 ? "1" : idx === 2 ? "8" : idx === 3 ? "2" : idx === 4 ? "9" : "4")}
                    onChange={(e) => {
                      const newOtp = [...otp];
                      newOtp[idx] = e.target.value;
                      setOtp(newOtp);
                    }}
                    className="w-10 h-12 rounded-xl bg-black/40 border border-white/20 text-center font-mono font-bold text-lg text-[var(--coral-400)] focus:outline-none focus:border-[var(--coral-500)]"
                  />
                ))}
              </div>

              <div className="text-xs text-[var(--text-muted)]">
                Cryptographic Aadhaar e-Sign complies with Indian IT Act 2000 Section 3A.
              </div>
            </div>
          )}

          {/* STEP 4: Approved Work Permit Issued */}
          {step === 4 && permitRecord && (
            <div className="space-y-6 animate-fadeIn">
              <div
                className="p-6 rounded-2xl border text-center space-y-3 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(35,18,18,0.95), rgba(45,22,22,0.9))",
                  borderColor: "rgba(232, 96, 76, 0.4)",
                  boxShadow: "0 10px 40px rgba(232, 96, 76, 0.2)",
                }}
              >
                <div className="w-16 h-16 rounded-full mx-auto bg-[var(--coral-500)]/20 border border-[var(--coral-500)]/40 flex items-center justify-center text-[var(--coral-400)]">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div>
                  <span className="badge badge-coral text-xs font-bold uppercase tracking-wider mb-2">
                    NCPCR CHILD ENTERTAINMENT WORK PERMIT ISSUED
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Guardian Co-Signing Verified!
                  </h3>
                  <p className="text-xs text-rose-200 mt-1 max-w-md mx-auto">
                    {minorName} is officially authorized to submit audition tapes and accept casting roles
                    with legal guardian representation.
                  </p>
                </div>
              </div>

              {/* Permit Certificate Details */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-[var(--text-muted)]">Work Permit Number:</span>
                  <span className="text-[var(--coral-300)] font-bold">{permitRecord.approvalCertificateId}</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[var(--text-muted)] block text-[11px]">Minor Performer:</span>
                    <span className="text-white font-bold">{permitRecord.minorName} (Age {permitRecord.minorAge})</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block text-[11px]">Authorized Guardian:</span>
                    <span className="text-white font-bold">{permitRecord.guardianName} ({permitRecord.guardianRelation})</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block text-[11px]">Guardian Aadhaar:</span>
                    <span className="text-white font-bold">{permitRecord.guardianAadhaarMasked}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block text-[11px]">Trust Fund Status:</span>
                    <span className="text-emerald-400 font-bold">20% Mandatory Lock Active</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 text-[10px] text-[var(--text-muted)] flex justify-between">
                  <span>Signed: {permitRecord.digitalSignatureTimestamp.slice(0, 10)}</span>
                  <span className="text-emerald-400">Status: Legally Valid in All Indian States</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div
          className="flex items-center justify-between px-6 py-4 border-t bg-[var(--charcoal-900)] shrink-0"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <span className="text-xs text-[var(--text-muted)]">
            National Commission for Protection of Child Rights Guidelines
          </span>

          <div className="flex items-center gap-3">
            {step === 1 && (
              <button
                onClick={() => setStep(2)}
                className="btn-primary text-xs py-2.5 px-6 font-bold flex items-center gap-2"
              >
                <span>Proceed to Child Protection Riders</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {step === 2 && (
              <button
                onClick={() => setStep(3)}
                disabled={!clauseSchooling || !clauseMaxHours || !clauseTrustFund}
                className="btn-primary text-xs py-2.5 px-6 font-bold flex items-center gap-2 disabled:opacity-50"
              >
                <span>Proceed to Guardian Aadhaar e-Sign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {step === 3 && (
              <button
                onClick={handleVerifyGuardianSign}
                disabled={isSigning}
                className="btn-primary text-xs py-2.5 px-6 font-bold flex items-center gap-2"
              >
                <span>{isSigning ? "Registering e-Signature..." : "Authorize & Issue Permit"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {step === 4 && (
              <button
                onClick={onClose}
                className="btn-primary text-xs py-2.5 px-6 font-bold flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Return to Portal with Child Work Permit</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
