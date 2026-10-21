"use client";

import { useState, useEffect } from "react";
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
  ChevronRight,
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
      dialogue: "You cannot proceed without signed authorization. The minister's convoy has already departed.",
      direction: "concerned, urgent",
    },
    {
      speaker: roleName.toUpperCase(),
      dialogue: "If I wait for their clearance, three more witnesses disappear before sunrise. I am taking the side entrance.",
      direction: "steely, resolute, unwavering eye-contact",
    },
    {
      speaker: "PARTNER (AI)",
      dialogue: "If they catch you without a warrant, the department will not stand behind you. You are on your own.",
      direction: "warning tone",
    },
    {
      speaker: roleName.toUpperCase(),
      dialogue: "I have walked alone since the day I took this oath. Watch the perimeter.",
      direction: "quiet confidence, decisive exit",
    },
  ],
}: AuditionStudioModalProps) {
  const [activeTab, setActiveTab] = useState<"recorder" | "diagnostic">("recorder");
  const [isRecording, setIsRecording] = useState(false);
  const [recordSeconds, setRecordSeconds] = useState(0);
  const [isLineReaderActive, setIsLineReaderActive] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [lineReaderSpeaking, setLineReaderSpeaking] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const speakLine = (text: string, onComplete: () => void) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 0.9;
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
      setLineReaderSpeaking(true);
      setTimeout(() => {
        setLineReaderSpeaking(false);
        onComplete();
      }, 3000);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

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
    setActiveTab("diagnostic");
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 1500);
  };

  if (!isOpen) return null;

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remaining.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl my-auto border border-white/20 bg-[#0e0e12] flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Studio Top Navigation Bar */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 shrink-0">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059] block">
              ✦ AI SCENE PARTNER AUDITION STUDIO
            </span>
            <h3 className="font-editorial text-2xl text-white font-light mt-0.5">
              {projectTitle} — {roleName}
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex border border-white/15 text-xs font-mono">
              <button
                onClick={() => setActiveTab("recorder")}
                className={`px-3 py-1.5 transition-colors uppercase ${
                  activeTab === "recorder"
                    ? "bg-white text-black font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Audition Studio
              </button>
              <button
                onClick={() => setActiveTab("diagnostic")}
                className={`px-3 py-1.5 transition-colors uppercase ${
                  activeTab === "diagnostic"
                    ? "bg-white text-black font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Performance Report
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1 text-neutral-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Studio Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {activeTab === "recorder" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Camera Framing Area (7 cols) */}
              <div className="lg:col-span-7 flex flex-col space-y-4">
                <div className="relative aspect-video w-full border border-white/10 flex items-center justify-center bg-[#070709] overflow-hidden">
                  
                  {/* Framing Overlay Grid */}
                  <div className="absolute inset-0 pointer-events-none opacity-20 grid grid-cols-3 grid-rows-3 border border-white/10">
                    <div className="border-r border-b border-white/20" />
                    <div className="border-r border-b border-white/20" />
                    <div className="border-b border-white/20" />
                    <div className="border-r border-b border-white/20" />
                    <div className="border-r border-b border-white/20" />
                    <div className="border-b border-white/20" />
                    <div className="border-r border-white/20" />
                    <div className="border-r border-white/20" />
                    <div />
                  </div>

                  {/* Top Recording Status */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                    {isRecording ? (
                      <div className="flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-500/40 text-red-400 text-xs font-mono uppercase animate-pulse">
                        <Radio size={12} className="text-red-500" />
                        <span>REC {formatTimer(recordSeconds)}</span>
                      </div>
                    ) : (
                      <div className="px-2.5 py-1 border border-white/10 bg-black/60 text-[10px] text-neutral-400 font-mono uppercase">
                        1080P HD • READY
                      </div>
                    )}
                  </div>

                  {/* Center Camera Graphic */}
                  <div className="text-center p-6 space-y-3 z-10">
                    <div className="w-14 h-14 rounded-full border border-white/20 mx-auto flex items-center justify-center text-white">
                      <Video size={22} />
                    </div>
                    <div>
                      <h4 className="font-editorial text-lg text-white font-normal">
                        {isRecording ? "Audition Recording in Progress" : "Position at Eye-Level"}
                      </h4>
                      <p className="text-xs text-neutral-500 max-w-xs mx-auto mt-1 font-mono">
                        Rule of thirds grid active. Ensure frontal light and minimal echo.
                      </p>
                    </div>
                  </div>

                  {/* Line Reader Speaking Pill */}
                  {lineReaderSpeaking && (
                    <div className="absolute bottom-4 left-4 right-4 z-20 p-3 border border-[#c5a059]/40 bg-black/90 backdrop-blur-md flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-3">
                        <Volume2 size={16} className="text-[#c5a059] animate-pulse" />
                        <span className="text-neutral-200 italic">
                          &quot;{scriptLines[currentLineIndex]?.dialogue}&quot;
                        </span>
                      </div>
                      <span className="text-[10px] text-[#c5a059] uppercase tracking-wider">
                        AI Line
                      </span>
                    </div>
                  )}
                </div>

                {/* Recorder Control Buttons */}
                <div className="p-4 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={isRecording ? handleStopRecording : handleStartRecording}
                      className={`btn-editorial text-[10px] py-2.5 px-5 tracking-widest ${
                        isRecording ? "border-red-500 text-red-400 hover:bg-red-500/10" : "btn-editorial-solid"
                      }`}
                    >
                      {isRecording ? "STOP & ANALYZE" : "START AUDITION TAKE"}
                    </button>

                    {isRecording && (
                      <button
                        onClick={handleNextLine}
                        className="btn-editorial text-[10px] py-2.5 px-4"
                      >
                        <span>NEXT CUE</span>
                        <ChevronRight size={12} />
                      </button>
                    )}
                  </div>

                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    AI SYNCHRONIZED
                  </span>
                </div>
              </div>

              {/* Teleprompter Area (5 cols) */}
              <div className="lg:col-span-5 flex flex-col space-y-4">
                <div className="p-6 border border-white/10 bg-[#070709] flex flex-col flex-1 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059]">
                      AI SCENE PARTNER TELEPROMPTER
                    </span>
                    <button
                      onClick={startLineReader}
                      disabled={isLineReaderActive}
                      className="text-[10px] font-mono uppercase text-neutral-400 hover:text-white"
                    >
                      {isLineReaderActive ? "ACTIVE" : "TEST AUDIO"}
                    </button>
                  </div>

                  {/* Character Note */}
                  <div className="text-xs font-mono text-neutral-400 leading-relaxed border border-white/5 p-3">
                    <span className="text-white uppercase block mb-1">Character Direction:</span>
                    {characterBio}
                  </div>

                  {/* Script Flow */}
                  <div className="space-y-3 font-mono text-xs overflow-y-auto max-h-[280px]">
                    {scriptLines.map((line, idx) => {
                      const isCurrent = idx === currentLineIndex;
                      const isAI = line.speaker.includes("(AI)") || line.speaker.includes("PARTNER");

                      return (
                        <div
                          key={idx}
                          className={`p-3 border transition-colors ${
                            isCurrent
                              ? "border-white bg-white/5 text-white"
                              : "border-white/5 text-neutral-400"
                          }`}
                        >
                          <div className="flex items-center justify-between text-[10px] uppercase tracking-wider mb-1">
                            <span className={isAI ? "text-[#c5a059]" : "text-white"}>{line.speaker}</span>
                            {line.direction && <span className="text-neutral-500 italic">({line.direction})</span>}
                          </div>
                          <p className="leading-relaxed">{line.dialogue}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* Diagnostic Tab */
            <div className="space-y-6">
              {isAnalyzing ? (
                <div className="p-20 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full border border-white/30 border-t-white animate-spin mx-auto" />
                  <h4 className="font-editorial text-2xl text-white font-light">Analyzing Audition Performance</h4>
                  <p className="text-xs font-mono text-neutral-500">
                    Processing dialect inflection, emotional arc, and eye-line consistency...
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Metrics */}
                  <div className="p-8 border border-white/10 bg-[#070709] space-y-6 font-mono text-xs">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div>
                        <span className="text-[10px] uppercase text-neutral-500 block">EVALUATION RESULT</span>
                        <span className="font-editorial text-3xl text-white">Match: 94.2%</span>
                      </div>
                      <span className="border border-emerald-400/40 text-emerald-400 px-3 py-1 text-[10px] uppercase">
                        High Shortlist Rating
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-neutral-400">Dialect &amp; Phonetic Inflection:</span>
                          <span className="text-white">95.0%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10">
                          <div className="h-full bg-white w-[95%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-neutral-400">Liveness &amp; Authenticity:</span>
                          <span className="text-emerald-400">99.1%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10">
                          <div className="h-full bg-emerald-400 w-[99.1%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-neutral-400">Emotional Transition Range:</span>
                          <span className="text-white">92.4%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10">
                          <div className="h-full bg-white w-[92.4%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Director Notes */}
                  <div className="p-8 border border-white/10 bg-[#070709] flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059] block">
                        DIRECTOR EVALUATION SUMMARY
                      </span>
                      <p className="font-editorial text-xl text-neutral-200 font-light leading-relaxed">
                        &ldquo;Strong grounded presence with exceptional natural delivery during the climatic line. Pacing aligns precisely with the interrogation sides.&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <button
                        onClick={() => setActiveTab("recorder")}
                        className="btn-editorial text-[10px] py-2.5 px-4"
                      >
                        <RotateCcw size={12} />
                        <span>RE-RECORD TAKE</span>
                      </button>

                      <button
                        onClick={() => {
                          alert("Audition package transmitted to production director.");
                          onClose();
                        }}
                        className="btn-editorial-solid text-[10px] py-2.5 px-6"
                      >
                        SUBMIT AUDITION
                      </button>
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
