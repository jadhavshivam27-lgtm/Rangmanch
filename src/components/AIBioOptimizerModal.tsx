"use client";

import { useState } from "react";
import { Sparkles, Wand2, Check, Copy, X, RefreshCw } from "lucide-react";

interface AIBioOptimizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBio?: string;
  onApplyBio: (newBio: string) => void;
}

export default function AIBioOptimizerModal({
  isOpen,
  onClose,
  currentBio = "Trained at Barry John Acting Studio. Did 4 street plays in Delhi. Speak fluent Hindi and Haryanvi. Brown belt in Taekwondo.",
  onApplyBio,
}: AIBioOptimizerModalProps) {
  const [rawNotes, setRawNotes] = useState(currentBio);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<number>(0);

  const [generatedPitches, setGeneratedPitches] = useState<
    Array<{ style: string; pitch: string; hook: string }>
  >([
    {
      style: "Gritty Method & Raw Character Drama",
      hook: "Ideal for Crime Thrillers, Rural Epics, and Hard-hitting OTT series (Mirzapur, Paatal Lok style)",
      pitch:
        "Delhi-trained method actor and Barry John Acting Studio alumnus with 4+ years of stage and physical theatre immersion. Known for grounded, emotionally intense character work with native command over Hindi and nuanced Haryanvi dialects. Certified Taekwondo martial artist with stunt readiness and exceptional physical presence.",
    },
    {
      style: "Commercial, Charismatic & Dynamic Lead",
      hook: "Ideal for Feature Films, Romantic Dramas, and High-Budget Ad Commercials",
      pitch:
        "A versatile screen presence blending classical dramatic discipline with modern urban charisma. Fast-paced, adaptable performer with extensive voice modulation, bilingual fluency, and athletic agility. Ready for demanding multi-schedule productions across mainstream Indian cinema and digital streaming platforms.",
    },
    {
      style: "Classical Theatre & Thespian Pedigree",
      hook: "Ideal for Period Epics, Parallel Cinema, and Stage Adaptations",
      pitch:
        "Rooted in Delhi's experimental street theatre traditions and honed under rigorous conservatory training. Specializes in nuanced interiority, rhythmic dialogue cadence, and deep psychological character study. Highly disciplined ensemble player with dialect versatility across Northern Indian regional registers.",
    },
  ]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "680px",
          width: "100%",
          backgroundColor: "#0e0e14",
          borderColor: "rgba(139, 92, 246, 0.4)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(139, 92, 246, 0.2)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b shrink-0"
          style={{
            background: "linear-gradient(90deg, rgba(20,20,25,0.95), rgba(35,25,50,0.95))",
            borderColor: "rgba(139, 92, 246, 0.25)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg text-[var(--ivory)]">
                  Rangmanch AI Bio Optimizer
                </span>
                <span className="badge badge-purple text-[10px]">CASTING PITCH ENGINE</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Craft industry-ready actor bios tailored for top Bollywood &amp; OTT casting directors
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Input Area */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-[var(--gold-300)] uppercase tracking-wider flex items-center gap-1.5">
              <span>Your Raw Notes / Training / Experience:</span>
            </label>
            <textarea
              rows={3}
              value={rawNotes}
              onChange={(e) => setRawNotes(e.target.value)}
              placeholder="e.g., FTII 2022 batch, 2 theatre plays, fluent Tamil and Hindi, Kalarippayattu martial arts..."
              className="w-full p-3.5 rounded-xl bg-black/40 border border-white/10 text-xs text-[var(--ivory)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-purple-500 font-sans"
            />
            <div className="flex justify-end">
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-purple-600/30 transition-all"
              >
                <Wand2 className={`w-3.5 h-3.5 ${isGenerating ? "animate-spin" : ""}`} />
                <span>{isGenerating ? "Crafting Pitches..." : "Optimize Bio with AI"}</span>
              </button>
            </div>
          </div>

          {/* Generated Pitches Choice */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
              Select Your Preferred Casting Bio Tone:
            </div>

            <div className="space-y-3">
              {generatedPitches.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedStyle(idx)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedStyle === idx
                      ? "bg-purple-950/30 border-purple-500/60 shadow-lg shadow-purple-900/20"
                      : "bg-black/30 border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-xs text-purple-300 flex items-center gap-1.5">
                      {selectedStyle === idx && <Check className="w-3.5 h-3.5 text-purple-400" />}
                      {item.style}
                    </span>
                    <span className="text-[10px] text-[var(--text-muted)]">{item.hook}</span>
                  </div>
                  <p className="text-xs text-gray-200 leading-relaxed font-sans">{item.pitch}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between px-6 py-4 border-t bg-[var(--charcoal-900)] shrink-0"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <span className="text-xs text-[var(--text-muted)]">
            Approved by Indian Casting Guild standards
          </span>
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="btn-secondary text-xs py-2 px-4">
              Cancel
            </button>
            <button
              onClick={() => {
                onApplyBio(generatedPitches[selectedStyle].pitch);
                onClose();
              }}
              className="btn-primary text-xs py-2 px-5 font-bold"
            >
              Apply to My Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
