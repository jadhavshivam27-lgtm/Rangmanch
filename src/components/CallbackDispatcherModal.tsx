"use client";

import React, { useState } from "react";
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Video,
  Send,
  FileText,
  CheckCircle2,
  Users,
  Download,
  AlertCircle,
  Sparkles,
  Building,
  UserCheck,
} from "lucide-react";
import Image from "next/image";

interface CallbackDispatcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function CallbackDispatcherModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: CallbackDispatcherModalProps) {
  const [selectedProject, setSelectedProject] = useState(defaultProject);
  const [callbackMode, setCallbackMode] = useState<"in_person" | "virtual">("in_person");
  const [callbackDate, setCallbackDate] = useState("2026-11-04");
  const [startTime, setStartTime] = useState("11:00");
  const [slotDuration, setSlotDuration] = useState(20);
  const [venue, setVenue] = useState("Famous Studios, Studio 4B, Dr. E Moses Rd, Mahalakshmi, Mumbai");
  const [scriptSides, setScriptSides] = useState("Antim_Prahar_Scene_44_Interrogation_Sides.pdf");
  const [directorInstructions, setDirectorInstructions] = useState(
    "Please prepare the interrogation scene sides attached. Arrive 15 minutes before your slot. Dress in clean neutral attire with minimal makeup for live screen lighting test."
  );

  const [candidates, setCandidates] = useState([
    {
      id: "c1",
      name: "Ananya Sharma",
      role: "Neha Sinha — Female Lead",
      photo: "/photos/real_01.png",
      selected: true,
      timeSlot: "11:00 AM – 11:20 AM",
      status: "pending",
    },
    {
      id: "c2",
      name: "Shivam Jadhav",
      role: "Dev — Protagonist / Inspector",
      photo: "/photos/real_03.jpg",
      selected: true,
      timeSlot: "11:20 AM – 11:40 AM",
      status: "pending",
    },
    {
      id: "c3",
      name: "Meera Nair",
      role: "Razia — Supporting Lead",
      photo: "/photos/real_02.png",
      selected: true,
      timeSlot: "11:40 AM – 12:00 PM",
      status: "pending",
    },
    {
      id: "c4",
      name: "Rohan Kapoor",
      role: "Dev — Antagonist",
      photo: "/photos/real_07.jpg",
      selected: true,
      timeSlot: "12:00 PM – 12:20 PM",
      status: "pending",
    },
  ]);

  const [dispatched, setDispatched] = useState(false);

  if (!isOpen) return null;

  const toggleCandidate = (id: string) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, selected: !c.selected } : c))
    );
  };

  const handleDispatch = () => {
    setDispatched(true);
    setTimeout(() => {
      setCandidates((prev) =>
        prev.map((c) => (c.selected ? { ...c, status: "dispatched" } : c))
      );
    }, 800);
  };

  const downloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Rangmanch Auditions//Casting Callback Scheduler//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:Round-2 Audition Callback — ${selectedProject}
DESCRIPTION:Official Round-2 In-Person Callback for ${selectedProject}. Sides: ${scriptSides}. Instructions: ${directorInstructions}
LOCATION:${callbackMode === "in_person" ? venue : "Rangmanch Virtual HD Audition Studio"}
STATUS:CONFIRMED
DTSTART:20261104T053000Z
DTEND:20261104T103000Z
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Callback_${selectedProject.replace(/\s+/g, "_")}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const selectedCount = candidates.filter((c) => c.selected).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#0e0e14] border border-[#d4af61]/40 rounded-2xl shadow-[0_0_60px_rgba(212,175,97,0.18)] flex flex-col max-h-[92vh] overflow-hidden text-neutral-200">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#12121c]/90">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#d4af61]/20 to-[#d4af61]/5 border border-[#d4af61]/40 flex items-center justify-center text-[#d4af61]">
              <Calendar size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-[#d4af61] uppercase font-bold">
                  Feature #29 • Callback Dispatcher
                </span>
                <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full font-mono">
                  BATCH DISPATCH ENGINE
                </span>
              </div>
              <h2 className="text-lg font-cinema font-bold text-white tracking-wide">
                Audition Callback Dispatcher &amp; Studio Scheduler
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Dispatch Success Alert */}
          {dispatched && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-400">
              <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-sm">
                  {selectedCount} Callbacks Dispatched Successfully!
                </div>
                <div className="text-emerald-300/80 mt-0.5">
                  Official notification notices sent to performer dashboards, email alerts dispatched, and .ics calendar holds generated.
                </div>
              </div>
            </div>
          )}

          {/* Mode & Scheduling Config */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Left: Mode & Location */}
            <div className="p-4 rounded-xl border border-neutral-800 bg-[#12121c] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#d4af61] font-bold flex items-center gap-2">
                <MapPin size={14} /> 1. Audition Format &amp; Venue
              </h3>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setCallbackMode("in_person")}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    callbackMode === "in_person"
                      ? "bg-[#d4af61]/15 border-[#d4af61] text-white font-semibold"
                      : "bg-[#181824] border-neutral-800 text-neutral-400 hover:border-neutral-700"
                  }`}
                >
                  <Building size={16} className="mb-1 text-[#d4af61]" />
                  <div className="font-bold">In-Person Studio</div>
                  <div className="text-[10px] text-neutral-400">Physical Studio Callback</div>
                </button>

                <button
                  type="button"
                  onClick={() => setCallbackMode("virtual")}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    callbackMode === "virtual"
                      ? "bg-[#d4af61]/15 border-[#d4af61] text-white font-semibold"
                      : "bg-[#181824] border-neutral-800 text-neutral-400 hover:border-neutral-700"
                  }`}
                >
                  <Video size={16} className="mb-1 text-[#d4af61]" />
                  <div className="font-bold">Virtual HD Studio</div>
                  <div className="text-[10px] text-neutral-400">Rangmanch Video Room</div>
                </button>
              </div>

              {callbackMode === "in_person" ? (
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1 font-medium">
                    Studio Venue Address
                  </label>
                  <input
                    type="text"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    className="w-full bg-[#181824] border border-neutral-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4af61]"
                  />
                </div>
              ) : (
                <div className="p-3 bg-neutral-900/80 rounded-lg border border-neutral-800 text-xs text-neutral-300">
                  <div className="font-semibold text-[#d4af61] mb-1">Encrypted Room Assigned:</div>
                  <div className="font-mono text-[11px] text-neutral-400">
                    https://rangmanch.in/audition-room/live-7819-callback
                  </div>
                </div>
              )}
            </div>

            {/* Right: Date, Time & Slotting */}
            <div className="p-4 rounded-xl border border-neutral-800 bg-[#12121c] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#d4af61] font-bold flex items-center gap-2">
                <Clock size={14} /> 2. Date &amp; Slot Duration
              </h3>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1 font-medium">Callback Date</label>
                  <input
                    type="date"
                    value={callbackDate}
                    onChange={(e) => setCallbackDate(e.target.value)}
                    className="w-full bg-[#181824] border border-neutral-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4af61]"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-neutral-400 block mb-1 font-medium">Start Time</label>
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full bg-[#181824] border border-neutral-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4af61]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-neutral-400 block mb-1 font-medium">
                  Slot Duration per Performer
                </label>
                <div className="flex gap-2">
                  {[15, 20, 30, 45].map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => setSlotDuration(mins)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                        slotDuration === mins
                          ? "bg-[#d4af61] text-black font-bold border-[#d4af61]"
                          : "bg-[#181824] text-neutral-300 border-neutral-800 hover:bg-[#202030]"
                      }`}
                    >
                      {mins} mins
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Script Sides & Director Instructions */}
          <div className="p-4 rounded-xl border border-neutral-800 bg-[#12121c] space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#d4af61] font-bold flex items-center gap-2">
              <FileText size={14} /> 3. Script Sides &amp; Performer Preparation Notes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="text-[11px] text-neutral-400 block mb-1 font-medium">
                  Attached Scene Sides (PDF)
                </label>
                <div className="flex items-center gap-2 bg-[#181824] border border-neutral-700 rounded-lg px-3 py-2 text-neutral-200">
                  <FileText size={15} className="text-[#d4af61] flex-shrink-0" />
                  <span className="font-mono text-[11px] truncate">{scriptSides}</span>
                  <span className="ml-auto text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                    ENCRYPTED
                  </span>
                </div>
              </div>

              <div>
                <label className="text-[11px] text-neutral-400 block mb-1 font-medium">
                  Director Note to Performers
                </label>
                <textarea
                  rows={2}
                  value={directorInstructions}
                  onChange={(e) => setDirectorInstructions(e.target.value)}
                  className="w-full bg-[#181824] border border-neutral-700 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#d4af61]"
                />
              </div>
            </div>
          </div>

          {/* Candidates Batch Review */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <h3 className="font-mono uppercase tracking-wider text-neutral-300 font-bold flex items-center gap-2">
                <Users size={14} className="text-[#d4af61]" /> 4. Shortlisted Candidates &amp; Auto-Assigned Slots
              </h3>
              <span className="text-[#d4af61] font-mono">
                {selectedCount} of {candidates.length} Selected
              </span>
            </div>

            <div className="space-y-2">
              {candidates.map((c) => (
                <div
                  key={c.id}
                  onClick={() => toggleCandidate(c.id)}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    c.selected
                      ? "bg-[#151522] border-[#d4af61]/50 shadow-md"
                      : "bg-[#0f0f16] border-neutral-800/80 opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={c.selected}
                      onChange={() => {}}
                      className="accent-[#d4af61] rounded w-4 h-4"
                    />
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800">
                      <Image src={c.photo} alt={c.name} fill className="object-cover object-top" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{c.name}</div>
                      <div className="text-[11px] text-[#d4af61]">{c.role}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-mono font-bold text-neutral-200">{c.timeSlot}</div>
                    <div className="text-[10px] font-mono text-neutral-400">
                      {c.status === "dispatched" ? (
                        <span className="text-emerald-400 font-bold">Dispatched • RSVP Pending</span>
                      ) : (
                        "Ready to Dispatch"
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-[#12121a] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={downloadICS}
            className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-semibold text-neutral-200 flex items-center gap-2 transition-colors"
          >
            <Download size={14} className="text-[#d4af61]" />
            <span>Download .ICS Calendar Batch</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-neutral-400 hover:text-white text-xs font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleDispatch}
              disabled={selectedCount === 0 || dispatched}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af61] to-[#b38e42] hover:from-[#e2be72] hover:to-[#c49d4f] disabled:opacity-50 text-black font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,97,0.3)] transition-all"
            >
              <Send size={14} />
              <span>
                {dispatched ? "Callbacks Dispatched!" : `Dispatch ${selectedCount} Callbacks`}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
