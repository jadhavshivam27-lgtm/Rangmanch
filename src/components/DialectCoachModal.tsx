"use client";

import { useState } from "react";
import {
  X,
  Mic,
  Volume2,
  Play,
  RotateCcw,
  CheckCircle2,
  Download,
  AlertCircle,
  Activity,
  Award,
} from "lucide-react";

interface DialectCoachModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function DialectCoachModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: DialectCoachModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedDialect, setSelectedDialect] = useState("bhojpuri");
  const [scriptLine, setScriptLine] = useState(
    "हम का बताईं साहब? हम तो बस रात के 10 बजे ऊ हवेली के पिछवाड़े से गुजरत रहीं, तबहीं गोली चले के आवाज अइल।"
  );
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);
  const [authenticityScore, setAuthenticityScore] = useState(94);
  const [coachingNotes, setCoachingNotes] = useState(
    "Excellent dental consonants. Slightly soften the aspiration on 'पिछवाड़े' to match rural Ballia cadence rather than urban Patna."
  );

  if (!isOpen) return null;

  const dialects = [
    {
      id: "bhojpuri",
      name: "Eastern UP / Bihar (Bhojpuri)",
      sample: "हम का बताईं साहब? हम तो बस रात के 10 बजे ऊ हवेली के पिछवाड़े से गुजरत रहीं...",
      cadence: "Rhythmic elongation, retroflex plosives, dentalized stops",
    },
    {
      id: "haryanvi",
      name: "Haryana / NCR Rohtak (Haryanvi)",
      sample: "के बात करै सै भाई? म्हारे गाम में कदे इसे उल्टे सीधे काम ना होया करदे...",
      cadence: "Staccato punch, glottal tension, sharp falling intonation",
    },
    {
      id: "hyderabadi",
      name: "Deccan / Hyderabad (Dakhni Urdu)",
      sample: "अरे उस्ताद, क्या बोलरे की आप? हमन तो चारमीनार के पीछे चाय पीते बैठे थे...",
      cadence: "Melodic lilt, lengthened vowels, soft nasal endings",
    },
    {
      id: "kathiawadi",
      name: "Saurashtra / Gujarat (Kathiawadi)",
      sample: "અરે ભાઈ, તમે શું વાત કરો છો? ઈ તો આખી રાત વાડીએ પાણી વાળતો તો...",
      cadence: "Deep chest resonance, aspirated 'ha' markers, high energetic pitch",
    },
  ];

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(45, 212, 191, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(45, 212, 191, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Teal Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #2dd4bf 25%, #99f6e4 50%, #2dd4bf 75%, transparent)",
          }}
        />

        {/* Modal Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 32px 20px 32px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "#0d0d14",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg, rgba(45,212,191,0.2) 0%, rgba(45,212,191,0.05) 100%)",
                border: "1px solid rgba(45,212,191,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2dd4bf",
              }}
            >
              <Mic size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#2dd4bf",
                  textTransform: "uppercase",
                }}
              >
                MODULE M059 • FEATURE 59
              </div>
              <h2
                className="font-cinema"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: "2px 0 0 0",
                  letterSpacing: "0.02em",
                }}
              >
                AI Dialogue Dialect &amp; Accent Coaching Studio
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#2dd4bf", fontWeight: 600 }}>{defaultProject}</span> • Real-Time Phonetics &amp; Authentic Regional Cadence
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              padding: "8px",
              color: "#8a8a9a",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* 4-Step Stepper Bar */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            padding: "14px 32px",
            background: "rgba(255,255,255,0.02)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {[
            { step: 1, label: "Dialect Selection" },
            { step: 2, label: "Audio Rehearsal" },
            { step: 3, label: "Phonetic Analysis" },
            { step: 4, label: "Dialect Certificate" },
          ].map((item) => (
            <div
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                padding: "6px 12px",
                borderRadius: "8px",
                backgroundColor:
                  activeStep === item.step
                    ? "rgba(45,212,191,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(45,212,191,0.3)"
                    : "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  backgroundColor:
                    activeStep === item.step ? "#2dd4bf" : "rgba(255,255,255,0.1)",
                  color: activeStep === item.step ? "#0a0a0f" : "#8a8a9a",
                }}
              >
                {item.step}
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: activeStep === item.step ? 600 : 400,
                  color: activeStep === item.step ? "#ffffff" : "#606070",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Modal Body */}
        <div style={{ padding: "28px 32px", maxHeight: "580px", overflowY: "auto" }}>
          {/* STEP 1: DIALECT SELECTION */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ fontSize: "13px", color: "#a0a0b0" }}>
                Select the authentic regional dialect requested by the director for this audition sides sequence.
              </div>

              {dialects.map((d) => (
                <div
                  key={d.id}
                  onClick={() => {
                    setSelectedDialect(d.id);
                    setScriptLine(d.sample);
                  }}
                  style={{
                    padding: "16px 20px",
                    borderRadius: "14px",
                    backgroundColor: selectedDialect === d.id ? "rgba(45,212,191,0.08)" : "rgba(255,255,255,0.02)",
                    border: selectedDialect === d.id ? "1px solid rgba(45,212,191,0.4)" : "1px solid rgba(255,255,255,0.07)",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>
                      {d.name}
                    </div>
                    {selectedDialect === d.id && (
                      <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#2dd4bf", padding: "2px 8px", background: "rgba(45,212,191,0.15)", borderRadius: "4px" }}>
                        ACTIVE COACHING
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: "12px", color: "#d4af61", marginTop: "6px", fontStyle: "italic" }}>
                    &ldquo;{d.sample}&rdquo;
                  </div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "4px" }}>
                    Phonetics: {d.cadence}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 2: AUDIO REHEARSAL */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "14px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ fontSize: "11px", fontFamily: "monospace", color: "#2dd4bf", textTransform: "uppercase" }}>
                  Script Dialogue Teleprompter
                </div>
                <div style={{ fontSize: "16px", color: "#ffffff", fontWeight: 600, marginTop: "8px", lineHeight: 1.6 }}>
                  {scriptLine}
                </div>
              </div>

              <div
                style={{
                  padding: "24px",
                  borderRadius: "16px",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <button
                  onClick={() => {
                    if (isRecording) {
                      setIsRecording(false);
                      setHasRecorded(true);
                    } else {
                      setIsRecording(true);
                    }
                  }}
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: isRecording ? "#ef4444" : "#2dd4bf",
                    border: "none",
                    color: "#0a0a0f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: isRecording ? "0 0 24px rgba(239,68,68,0.5)" : "0 0 24px rgba(45,212,191,0.4)",
                  }}
                >
                  <Mic size={28} />
                </button>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
                  {isRecording ? "Listening... Speak naturally with pauses" : hasRecorded ? "Voice Sample Captured (00:08.4)" : "Click to Record Voice Monologue"}
                </div>
                <div style={{ fontSize: "11px", color: "#8a8a9a" }}>
                  Analyzes 48kHz vocal track against 1,200 native speaker linguistic baselines.
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: PHONETIC ANALYSIS */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(45,212,191,0.05)",
                  border: "1px solid rgba(45,212,191,0.2)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a" }}>Regional Dialect Authenticity Index:</div>
                  <div style={{ fontSize: "28px", fontWeight: 700, color: "#2dd4bf", fontFamily: "monospace", marginTop: "2px" }}>
                    {authenticityScore}%
                  </div>
                </div>
                <span style={{ fontSize: "11px", color: "#34d399", padding: "4px 10px", borderRadius: "6px", background: "rgba(52,211,153,0.15)", fontWeight: 600 }}>
                  ✓ NATIVE GRADE
                </span>
              </div>

              <div
                style={{
                  padding: "18px 20px",
                  borderRadius: "14px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#d4af61", textTransform: "uppercase" }}>
                  AI Vocal Coach Feedback &amp; Articulation Notes
                </div>
                <p style={{ fontSize: "13px", color: "#c0c0d0", lineHeight: 1.6, margin: 0 }}>
                  {coachingNotes}
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                <div style={{ padding: "12px", borderRadius: "10px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
                  <div style={{ fontSize: "10px", color: "#8a8a9a" }}>Vowel Elongation</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>96% Accurate</div>
                </div>
                <div style={{ padding: "12px", borderRadius: "10px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
                  <div style={{ fontSize: "10px", color: "#8a8a9a" }}>Plosive Pressure</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>92% Accurate</div>
                </div>
                <div style={{ padding: "12px", borderRadius: "10px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
                  <div style={{ fontSize: "10px", color: "#8a8a9a" }}>Rhythm &amp; Cadence</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>95% Accurate</div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: DIALECT CERTIFICATE */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(45,212,191,0.15)",
                  border: "1px solid rgba(45,212,191,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2dd4bf",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Linguistic Dialect Competency Certified
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Score: {authenticityScore}% • Validated for Hindi Feature Film &amp; OTT dialogue requirements. Attached to Performer Casting Comp Card.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH DIALECT COACHING CERTIFICATE\nProject: ${defaultProject}\nPerformer: Tanya Deshmukh\nTarget Dialect: ${dialects.find(d => d.id === selectedDialect)?.name}\nScript Line: ${scriptLine}\nAuthenticity Score: ${authenticityScore}%\nVocal Notes: ${coachingNotes}\nCertified on: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Dialect_Certificate_${selectedDialect}_${authenticityScore}pct.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD DIALECT SCORECARD &amp; AUDIO LOG
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 32px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "#0d0d14",
          }}
        >
          <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#606070" }}>
            Step {activeStep} of 4 • AI Linguistic Coach Suite
          </span>
          <div style={{ display: "flex", gap: "10px" }}>
            {activeStep > 1 && (
              <button
                onClick={() => setActiveStep(activeStep - 1)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "10px",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                BACK
              </button>
            )}
            {activeStep < 4 ? (
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className="btn-cinema-gold"
                style={{ height: "38px", padding: "0 22px", fontSize: "11px" }}
              >
                CONTINUE →
              </button>
            ) : (
              <button
                onClick={onClose}
                className="btn-cinema-gold"
                style={{ height: "38px", padding: "0 22px", fontSize: "11px" }}
              >
                COMPLETE REHEARSAL ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

