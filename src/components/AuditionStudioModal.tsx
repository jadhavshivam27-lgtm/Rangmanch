"use client";

import { useState, useRef, useEffect } from "react";
import {
  Video,
  Mic,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Shield,
  Volume2,
  CheckCircle,
  X,
  Radio,
  FileText,
  Sliders,
  ChevronRight,
  UserCheck,
} from "lucide-react";

interface AuditionStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  roleName: string;
  characterBio?: string;
  scriptLines?: Array<{ speaker: string; dialogue: string; direction?: string }>;
}

export default function AuditionStudioModal({
  isOpen,
  onClose,
  projectTitle,
  roleName,
  characterBio = "A fiercely independent investigator navigating moral gray zones in rural Northern India.",
  scriptLines = [
    {
      speaker: "PARTNER (AI)",
      dialogue: "You can't go in there alone, Vikram. The minister's convoy has already left.",
      direction: "concerned, urgent",
    },
    {
      speaker: roleName.toUpperCase(),
      dialogue: "If I wait for their clearance, three more witnesses disappear by sunrise. I'm taking the side entrance.",
      direction: "steely, resolute, unwavering eye-contact",
    },
    {
      speaker: "PARTNER (AI)",
      dialogue: "If they catch you without a warrant, the department won't stand behind you. You're on your own.",
      direction: "warning tone",
    },
    {
      speaker: roleName.toUpperCase(),
      dialogue: "I've been on my own since the day I took this oath. Watch the perimeter.",
      direction: "quiet confidence, decisive exit",
    },
  ],
}: AuditionStudioModalProps) {
  // Studio States
  const [activeTab, setActiveTab] = useState<"recorder" | "review" | "diagnostic">("recorder");
  const [isRecording, setIsRecording] = useState(false);
  const [recordSeconds, setRecordSeconds] = useState(0);
  const [recordedVideoUrl, setRecordedVideoUrl] = useState<string | null>(null);

  // AI Virtual Line Reader State
  const [isLineReaderActive, setIsLineReaderActive] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [lineReaderSpeaking, setLineReaderSpeaking] = useState(false);

  // AI Diagnostic Metrics
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [diagnosticComplete, setDiagnosticComplete] = useState(false);

  // Look-Test simulation toggle
  const [activeLookTest, setActiveLookTest] = useState<string>("original");

  // Web Speech Synthesis for AI Line Reader
  const speakLine = (text: string, onComplete: () => void) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 0.9;
      // Try to select an Indian English voice if available
      const voices = window.speechSynthesis.getVoices();
      const indianVoice = voices.find((v) => v.lang.includes("en-IN") || v.name.includes("India"));
      if (indianVoice) utterance.voice = indianVoice;

      setLineReaderSpeaking(true);
      utterance.onend = () => {
        setLineReaderSpeaking(false);
        onComplete();
      };
      utterance.onerror = () => {
        setLineReaderSpeaking(false);
        onComplete();
      };
      window.speechSynthesis.speak(utterance);
    } else {
      // Fallback timer simulation
      setLineReaderSpeaking(true);
      setTimeout(() => {
        setLineReaderSpeaking(false);
        onComplete();
      }, 3000);
    }
  };

  // Timer effect for recording
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  // AI Line Reader playback step
  const handleNextLine = () => {
    if (currentLineIndex < scriptLines.length - 1) {
      const nextIndex = currentLineIndex + 1;
      setCurrentLineIndex(nextIndex);
      const nextLine = scriptLines[nextIndex];
      if (nextLine.speaker.includes("(AI)") || nextLine.speaker.includes("PARTNER")) {
        speakLine(nextLine.dialogue, () => {});
      }
    } else {
      setIsLineReaderActive(false);
      setCurrentLineIndex(0);
    }
  };

  const startLineReader = () => {
    setIsLineReaderActive(true);
    setCurrentLineIndex(0);
    const firstLine = scriptLines[0];
    if (firstLine.speaker.includes("(AI)") || firstLine.speaker.includes("PARTNER")) {
      speakLine(firstLine.dialogue, () => {});
    }
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    setRecordSeconds(0);
    startLineReader();
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setRecordedVideoUrl("/talent1.jpg"); // Simulated recorded self-tape preview
    setActiveTab("diagnostic");
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setDiagnosticComplete(true);
    }, 2000);
  };

  if (!isOpen) return null;

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remaining.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg animate-fadeIn overflow-y-auto">
      <div
        className="relative w-full max-w-5xl my-auto rounded-2xl border shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        style={{
          background: "var(--charcoal-900)",
          borderColor: "rgba(201, 168, 76, 0.3)",
          boxShadow: "0 25px 80px rgba(0,0,0,0.85), 0 0 40px rgba(201, 168, 76, 0.15)",
        }}
      >
        {/* Studio Top Navigation Bar */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b shrink-0"
          style={{
            background: "linear-gradient(90deg, rgba(14,14,17,0.95), rgba(30,30,36,0.95))",
            borderColor: "rgba(201, 168, 76, 0.2)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[var(--gold-500)]/15 border border-[var(--gold-500)]/30 text-[var(--gold-300)]">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg text-[var(--ivory)]">
                  Rangmanch AI Audition Studio
                </span>
                <span className="badge badge-gold text-[10px]">REVOLUTIONARY STACK</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Project: <strong className="text-[var(--ivory)]">{projectTitle}</strong> • Role:{" "}
                <span className="text-[var(--gold-300)] font-semibold">{roleName}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* View Tabs */}
            <div className="hidden sm:flex p-1 rounded-xl bg-black/40 border border-white/5 text-xs">
              <button
                onClick={() => setActiveTab("recorder")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === "recorder"
                    ? "bg-[var(--gold-500)] text-[var(--charcoal-900)] shadow"
                    : "text-[var(--text-muted)] hover:text-white"
                }`}
              >
                1. Audition Studio
              </button>
              <button
                onClick={() => setActiveTab("diagnostic")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === "diagnostic"
                    ? "bg-[var(--gold-500)] text-[var(--charcoal-900)] shadow"
                    : "text-[var(--text-muted)] hover:text-white"
                }`}
              >
                2. AI Diagnostic Card
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {activeTab === "recorder" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Live Camera Canvas / Video Framing Area (7 cols) */}
              <div className="lg:col-span-7 flex flex-col space-y-4">
                <div
                  className="relative aspect-video w-full rounded-2xl overflow-hidden border flex items-center justify-center bg-black/80"
                  style={{ borderColor: "rgba(201, 168, 76, 0.25)" }}
                >
                  {/* Simulated Camera View / Framing Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Rule of Thirds Grid Lines */}
                    <div className="w-full h-full grid grid-cols-3 grid-rows-3 opacity-20 border border-white/20">
                      <div className="border-r border-b border-white/30" />
                      <div className="border-r border-b border-white/30" />
                      <div className="border-b border-white/30" />
                      <div className="border-r border-b border-white/30" />
                      <div className="border-r border-b border-white/30" />
                      <div className="border-b border-white/30" />
                      <div className="border-r border-white/30" />
                      <div className="border-r border-white/30" />
                      <div />
                    </div>

                    {/* Eye-Line Level Marker */}
                    <div className="absolute top-[33.3%] left-0 right-0 border-t border-dashed border-[var(--gold-400)]/40 flex justify-end px-3">
                      <span className="text-[10px] text-[var(--gold-300)] font-mono uppercase bg-black/60 px-1 rounded">
                        Optimal Eye-Line Level
                      </span>
                    </div>

                    {/* Center Head Target Box */}
                    <div className="w-48 h-60 rounded-3xl border-2 border-dashed border-[var(--gold-500)]/30 flex items-center justify-center">
                      <span className="text-[10px] text-[var(--text-muted)] font-mono uppercase">
                        Center Face &amp; Shoulders
                      </span>
                    </div>
                  </div>

                  {/* Look-Test Filter Preview Banner */}
                  {activeLookTest !== "original" && (
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-200 text-xs backdrop-blur-md">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      <span>AI Character Filter: {activeLookTest.toUpperCase()}</span>
                    </div>
                  )}

                  {/* Status Overlay */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                    {isRecording ? (
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/50 text-red-400 text-xs font-mono font-bold animate-pulse">
                        <Radio className="w-3.5 h-3.5 text-red-500" />
                        <span>REC {formatTimer(recordSeconds)}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-xs text-[var(--text-secondary)] font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>HD 1080P • 30FPS</span>
                      </div>
                    )}
                  </div>

                  {/* Simulated Camera Center Graphics */}
                  <div className="text-center p-6 space-y-3 z-10">
                    <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-white/5 border border-white/10 text-[var(--gold-400)]">
                      <Video className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[var(--ivory)]">
                        {isRecording ? "Self-Tape Recording in Progress..." : "Ready for Self-Tape Audition"}
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] max-w-xs mx-auto mt-1">
                        Ensure warm frontal lighting, clean audio with minimal room echo, and horizontal framing.
                      </p>
                    </div>
                  </div>

                  {/* Line Reader Speaking Indicator Overlay */}
                  {lineReaderSpeaking && (
                    <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-xl bg-[var(--charcoal-900)]/90 border border-[var(--purple-500)]/50 backdrop-blur-md flex items-center justify-between animate-slideIn">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[var(--purple-500)]/20 flex items-center justify-center text-[var(--purple-400)] animate-pulse">
                          <Volume2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-[var(--purple-400)] uppercase tracking-wider">
                            AI Scene Partner Speaking Cue:
                          </div>
                          <div className="text-xs font-medium text-white italic">
                            &quot;{scriptLines[currentLineIndex]?.dialogue}&quot;
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">
                        Listening for your line...
                      </span>
                    </div>
                  )}
                </div>

                {/* Recorder Controls Bar */}
                <div
                  className="p-4 rounded-xl border flex items-center justify-between"
                  style={{
                    background: "var(--charcoal-800)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <button
                      onClick={isRecording ? handleStopRecording : handleStartRecording}
                      className={`px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-2 transition-all ${
                        isRecording
                          ? "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30"
                          : "btn-primary shadow-lg shadow-[var(--gold-500)]/20"
                      }`}
                    >
                      {isRecording ? (
                        <>
                          <Pause className="w-4 h-4" /> Stop &amp; Analyze Performance
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" /> Start Audition with AI Partner
                        </>
                      )}
                    </button>
                    {isRecording && (
                      <button
                        onClick={handleNextLine}
                        className="btn-secondary text-xs py-2.5 px-3 flex items-center gap-1.5"
                        title="Cue next dialogue line"
                      >
                        <span>Next Cue Line</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Look-Test Quick Selector */}
                    <div className="flex items-center gap-1 p-1 rounded-lg bg-black/40 border border-white/5 text-[11px]">
                      <span className="text-[10px] text-[var(--text-muted)] px-1.5 font-medium">
                        Look Test:
                      </span>
                      {[
                        { id: "original", label: "Clean" },
                        { id: "cop", label: "Cop" },
                        { id: "period", label: "Retro 70s" },
                        { id: "royal", label: "Royal" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveLookTest(item.id)}
                          className={`px-2 py-1 rounded transition-colors ${
                            activeLookTest === item.id
                              ? "bg-[var(--gold-500)]/20 text-[var(--gold-300)] font-semibold"
                              : "text-[var(--text-muted)] hover:text-white"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: AI Scene Partner & Interactive Teleprompter (5 cols) */}
              <div className="lg:col-span-5 flex flex-col space-y-4">
                {/* Teleprompter Card */}
                <div
                  className="p-5 rounded-2xl border flex flex-col flex-1"
                  style={{
                    background: "var(--charcoal-800)",
                    borderColor: "rgba(201, 168, 76, 0.2)",
                  }}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[var(--purple-500)]/15 border border-[var(--purple-500)]/30 flex items-center justify-center text-[var(--purple-400)]">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[var(--ivory)] uppercase tracking-wider">
                          AI Scene Partner Teleprompter
                        </h4>
                        <p className="text-[11px] text-[var(--text-muted)]">
                          Reads opposing lines aloud during your take
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={startLineReader}
                      disabled={isLineReaderActive}
                      className="text-[11px] text-[var(--gold-300)] hover:underline font-medium"
                    >
                      {isLineReaderActive ? "Line Reader Active" : "Test Cue Voice"}
                    </button>
                  </div>

                  {/* Character Bio Guidance */}
                  <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-xs text-[var(--text-secondary)] mb-4">
                    <span className="font-semibold text-[var(--gold-300)]">Director&apos;s Character Note: </span>
                    {characterBio}
                  </div>

                  {/* Interactive Script Cue Flow */}
                  <div className="flex-1 space-y-3 overflow-y-auto max-h-[300px] pr-1 font-mono text-xs">
                    {scriptLines.map((line, idx) => {
                      const isCurrent = idx === currentLineIndex;
                      const isAI = line.speaker.includes("(AI)") || line.speaker.includes("PARTNER");

                      return (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl border transition-all ${
                            isCurrent
                              ? "bg-[var(--gold-500)]/10 border-[var(--gold-500)]/40 shadow-sm"
                              : "bg-black/20 border-white/5 opacity-70"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider ${
                                isAI ? "text-[var(--purple-400)]" : "text-[var(--gold-300)]"
                              }`}
                            >
                              {line.speaker}
                            </span>
                            {line.direction && (
                              <span className="text-[10px] text-[var(--text-muted)] italic">
                                ({line.direction})
                              </span>
                            )}
                          </div>
                          <p className="text-gray-200 leading-relaxed text-xs">{line.dialogue}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Teleprompter Footer */}
                  <div className="pt-4 mt-auto border-t border-white/5 flex items-center justify-between text-xs text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-emerald-400" />
                      Dynamic DRM Watermark Active
                    </span>
                    <span>4 Lines • ~45 Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* AI Diagnostic & Emotional Arc Heatmap Tab */
            <div className="space-y-6">
              {isAnalyzing ? (
                <div className="p-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full mx-auto border-4 border-[var(--gold-500)]/20 border-t-[var(--gold-500)] animate-spin" />
                  <h3 className="font-display font-bold text-xl text-[var(--ivory)]">
                    Analyzing Audition Performance...
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] max-w-sm mx-auto">
                    Running Deepfake Liveness Detection, Dialect Acoustic Scoring, and Emotional Arc Frame Tracking.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Scores & Diagnostic Highlights (5 cols) */}
                  <div className="lg:col-span-5 space-y-4">
                    <div
                      className="p-6 rounded-2xl border space-y-5"
                      style={{
                        background: "var(--charcoal-800)",
                        borderColor: "rgba(201, 168, 76, 0.25)",
                      }}
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div>
                          <div className="text-xs text-[var(--gold-400)] uppercase tracking-wider font-semibold">
                            Audition Assessment
                          </div>
                          <h3 className="font-display font-bold text-2xl text-[var(--ivory)]">
                            Overall Match: 93.8%
                          </h3>
                        </div>
                        <div className="px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5" /> High Shortlist Probability
                        </div>
                      </div>

                      {/* 4 Core AI Metrics */}
                      <div className="space-y-4 text-xs">
                        <div>
                          <div className="flex justify-between font-semibold mb-1">
                            <span className="text-gray-200 flex items-center gap-1.5">
                              <Shield className="w-3.5 h-3.5 text-emerald-400" />
                              Originality &amp; Liveness Index
                            </span>
                            <span className="text-emerald-400 font-mono">99.2% (Authentic Human)</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[99.2%]" />
                          </div>
                          <span className="text-[10px] text-[var(--text-muted)]">
                            Zero deepfake artifacts, natural blink velocity, and verified facial depth.
                          </span>
                        </div>

                        <div>
                          <div className="flex justify-between font-semibold mb-1">
                            <span className="text-gray-200 flex items-center gap-1.5">
                              <Mic className="w-3.5 h-3.5 text-[var(--gold-400)]" />
                              Regional Dialect Authenticity (Awadhi/Hindi)
                            </span>
                            <span className="text-[var(--gold-300)] font-mono">94.5%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[var(--gold-500)] to-amber-400 w-[94.5%]" />
                          </div>
                          <span className="text-[10px] text-[var(--text-muted)]">
                            Phonetic cadence matched native North Indian rural dialogue inflection.
                          </span>
                        </div>

                        <div>
                          <div className="flex justify-between font-semibold mb-1">
                            <span className="text-gray-200 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-[var(--purple-400)]" />
                              Emotional Arc &amp; Intensity
                            </span>
                            <span className="text-[var(--purple-300)] font-mono">91.0%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[var(--purple-500)] to-violet-400 w-[91%]" />
                          </div>
                          <span className="text-[10px] text-[var(--text-muted)]">
                            Dynamic transition from restrained tension to decisive resolution.
                          </span>
                        </div>

                        <div>
                          <div className="flex justify-between font-semibold mb-1">
                            <span className="text-gray-200 flex items-center gap-1.5">
                              <Video className="w-3.5 h-3.5 text-blue-400" />
                              Framing &amp; Lighting Quality
                            </span>
                            <span className="text-blue-300 font-mono">90.0%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-400 w-[90%]" />
                          </div>
                          <span className="text-[10px] text-[var(--text-muted)]">
                            Eye-line maintained within rule-of-thirds upper quadrant.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Emotional Arc Heatmap Visualizer (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div
                      className="p-6 rounded-2xl border space-y-5"
                      style={{
                        background: "var(--charcoal-800)",
                        borderColor: "rgba(201, 168, 76, 0.25)",
                      }}
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div>
                          <h4 className="font-display font-bold text-lg text-[var(--ivory)]">
                            Emotional Arc &amp; Micro-Expression Timeline
                          </h4>
                          <p className="text-xs text-[var(--text-muted)]">
                            Frame-by-frame affective analysis across your 45-second monologue
                          </p>
                        </div>
                        <span className="badge badge-purple text-[10px]">AI EMOTION ENGINE</span>
                      </div>

                      {/* Timeline Waveform Graphic */}
                      <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
                        <div className="h-28 w-full relative flex items-end justify-between px-2 pt-4">
                          {/* Emotional Shift Wave Bars */}
                          {[
                            { time: "0-8s", state: "Restrained", height: "45%", color: "bg-blue-400" },
                            { time: "9-15s", state: "Curiosity", height: "55%", color: "bg-teal-400" },
                            { time: "16-24s", state: "Rising Rage", height: "80%", color: "bg-amber-400" },
                            { time: "25-34s", state: "Peak Climax", height: "98%", color: "bg-red-500" },
                            { time: "35-45s", state: "Steely Calm", height: "65%", color: "bg-purple-400" },
                          ].map((segment, idx) => (
                            <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end px-1">
                              <span className="text-[9px] text-[var(--text-muted)] font-mono">{segment.state}</span>
                              <div
                                className={`w-full rounded-t-lg ${segment.color} opacity-80 hover:opacity-100 transition-all`}
                                style={{ height: segment.height }}
                              />
                              <span className="text-[10px] text-gray-400 font-mono mt-1">{segment.time}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-[var(--text-muted)] border-t border-white/5 pt-2 font-mono">
                          <span>00:00 (Scene Opening)</span>
                          <span className="text-[var(--gold-300)] font-bold">Dynamic Dramatic Range Detected</span>
                          <span>00:45 (Scene Resolution)</span>
                        </div>
                      </div>

                      {/* Constructive AI Director Coaching Tips */}
                      <div className="p-4 rounded-xl bg-[var(--gold-500)]/10 border border-[var(--gold-500)]/20 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-[var(--gold-300)]">
                          <Sparkles className="w-4 h-4" /> AI Director&apos;s Audition Feedback:
                        </div>
                        <p className="text-xs text-gray-200 leading-relaxed">
                          &quot;Exceptional vocal modulation at second 25 when delivering the line about your oath. Your micro-expressions show great interior stillness before explosive dialogue. To optimize further: keep your gaze locked 2 inches higher toward the camera lens during the climax.&quot;
                        </p>
                      </div>

                      {/* Final Submit Action Bar */}
                      <div className="flex items-center justify-between pt-2">
                        <button
                          onClick={() => setActiveTab("recorder")}
                          className="btn-secondary text-xs flex items-center gap-1.5 py-2.5 px-4"
                        >
                          <RotateCcw className="w-3.5 h-3.5" /> Re-record Take
                        </button>
                        <button
                          onClick={() => {
                            alert("Audition successfully submitted with AI Diagnostic Score (93.8%) attached to Casting Director's desk!");
                            onClose();
                          }}
                          className="btn-primary text-xs py-2.5 px-6 shadow-lg shadow-[var(--gold-500)]/20 font-bold"
                        >
                          Submit Audition to Casting Director
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
