"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  Upload,
  Video,
  Camera,
  Music,
  Mic,
  Film,
  Sparkles,
  CheckCircle2,
  X,
  Play,
  Trash2,
  Plus,
  FileText,
  Eye,
  Sliders,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import AIBioOptimizerModal from "@/components/AIBioOptimizerModal";

export interface MediaItem {
  id: string;
  type: "photo" | "video" | "singing" | "audio";
  title: string;
  category: string;
  url: string;
  duration?: string;
  size?: string;
  uploadedAt: string;
  isPrimary?: boolean;
}

interface MediaVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBio?: string;
  onSaveBio?: (newBio: string) => void;
  onMediaUpdated?: (items: MediaItem[]) => void;
}

export default function MediaVaultModal({
  isOpen,
  onClose,
  initialBio = "Trained actor and vocalist specializing in contemporary screen drama and classical music.",
  onSaveBio,
  onMediaUpdated,
}: MediaVaultModalProps) {
  const [activeTab, setActiveTab] = useState<"photos" | "videos" | "singing" | "bio">("photos");

  // Media state
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    {
      id: "med-1",
      type: "photo",
      title: "Primary Casting Headshot",
      category: "Natural Light • Outdoor Shoot",
      url: "/photos/real_03.jpg",
      size: "2.4 MB",
      uploadedAt: "Oct 18, 2024",
      isPrimary: true,
    },
    {
      id: "med-2",
      type: "photo",
      title: "Stage Monologue in Red Kurta",
      category: "Live Stage • Dramatic Lighting",
      url: "/photos/real_07.jpg",
      size: "3.1 MB",
      uploadedAt: "Oct 18, 2024",
    },
    {
      id: "med-3",
      type: "photo",
      title: "Auditorium & Theatre Hall",
      category: "Auditorium Stagecraft",
      url: "/photos/real_06.jpg",
      size: "2.8 MB",
      uploadedAt: "Oct 18, 2024",
    },
    {
      id: "med-4",
      type: "photo",
      title: "Waterside & Lake Portrait",
      category: "Lookbook • Scenic Contemporary",
      url: "/photos/real_04.jpg",
      size: "4.2 MB",
      uploadedAt: "Oct 20, 2024",
    },
    {
      id: "med-5-photo",
      type: "photo",
      title: "Candid Expression & Lifestyle",
      category: "Method Expression • Natural Stills",
      url: "/photos/real_16.jpg",
      size: "3.5 MB",
      uploadedAt: "Oct 22, 2024",
    },
    {
      id: "med-6-photo",
      type: "photo",
      title: "Vintage Film Look with Puppy",
      category: "Character Chemistry & Animal Handling",
      url: "/photos/real_18.jpg",
      size: "2.9 MB",
      uploadedAt: "Oct 23, 2024",
    },
    {
      id: "med-5",
      type: "video",
      title: "Dramatic Monologue Reel (Antim Prahar)",
      category: "Intense Character Drama",
      url: "/hero.jpg",
      duration: "2m 14s",
      size: "48 MB",
      uploadedAt: "Oct 15, 2024",
    },
    {
      id: "med-6",
      type: "video",
      title: "Action & Movement Stunt Reel",
      category: "Hand-to-Hand & Stage Combat",
      url: "/auth-cinema.jpg",
      duration: "1m 30s",
      size: "36 MB",
      uploadedAt: "Oct 12, 2024",
    },
    {
      id: "med-7",
      type: "singing",
      title: "Classical Hindustani Bandish (Raag Bhairav)",
      category: "Vocal Performance • Semi-Classical",
      url: "/hero.jpg",
      duration: "3m 45s",
      size: "62 MB",
      uploadedAt: "Oct 21, 2024",
    },
    {
      id: "med-8",
      type: "singing",
      title: "Bollywood Playback & Ghazal Showcase",
      category: "Acoustic Vocal Mic Studio",
      url: "/auth-cinema.jpg",
      duration: "2m 10s",
      size: "31 MB",
      uploadedAt: "Oct 22, 2024",
    },
  ]);

  // Bio state
  const [bio, setBio] = useState(initialBio);
  const [isAIOptimizerOpen, setIsAIOptimizerOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [previewMedia, setPreviewMedia] = useState<MediaItem | null>(null);

  // Form input refs
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadCategory, setUploadCategory] = useState("Headshot (Front)");
  const [uploadTitle, setUploadTitle] = useState("");

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const objectUrl = URL.createObjectURL(file);
    const isVideo = file.type.startsWith("video");
    const isAudio = file.type.startsWith("audio");

    let itemType: "photo" | "video" | "singing" | "audio" = "photo";
    if (activeTab === "singing") itemType = "singing";
    else if (activeTab === "videos" || isVideo) itemType = "video";
    else if (isAudio) itemType = "audio";

    setIsUploading(true);

    setTimeout(() => {
      const newItem: MediaItem = {
        id: `med-${Date.now()}`,
        type: itemType,
        title: uploadTitle.trim() || file.name.replace(/\.[^/.]+$/, ""),
        category: uploadCategory,
        url: objectUrl,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        uploadedAt: "Just now",
        duration: isVideo || activeTab === "singing" ? "1m 45s" : undefined,
      };

      const updated = [newItem, ...mediaItems];
      setMediaItems(updated);
      onMediaUpdated?.(updated);
      setIsUploading(false);
      setUploadSuccess(true);
      setUploadTitle("");
      setTimeout(() => setUploadSuccess(false), 3000);
    }, 900);
  };

  const handleDeleteItem = (id: string) => {
    const updated = mediaItems.filter((m) => m.id !== id);
    setMediaItems(updated);
    onMediaUpdated?.(updated);
  };

  const handleSetPrimary = (id: string) => {
    const updated = mediaItems.map((m) => ({
      ...m,
      isPrimary: m.id === id,
    }));
    setMediaItems(updated);
    onMediaUpdated?.(updated);
  };

  const handleSaveBio = () => {
    onSaveBio?.(bio);
    setUploadSuccess(true);
    setTimeout(() => setUploadSuccess(false), 3000);
  };

  const filteredItems = mediaItems.filter((item) => {
    if (activeTab === "photos") return item.type === "photo";
    if (activeTab === "videos") return item.type === "video";
    if (activeTab === "singing") return item.type === "singing" || item.type === "audio";
    return true;
  });

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "960px",
          width: "100%",
          maxHeight: "92vh",
          borderRadius: "24px",
          backgroundColor: "#0d0d14",
          border: "1px solid rgba(212,175,97,0.35)",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(212,175,97,0.12)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top Gold Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #d4af61 25%, #f4e2b8 50%, #d4af61 75%, transparent)",
          }}
        />

        {/* Modal Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 32px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "#09090e",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "10px",
                fontFamily: "monospace",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#d4af61",
                fontWeight: 700,
                marginBottom: "4px",
              }}
            >
              <span>✦ PERFORMER MEDIA VAULT</span>
              <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
              <span style={{ color: "#34d399" }}>DIRECTOR-READY</span>
            </div>
            <h2
              className="font-cinema"
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#ffffff",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              Portfolio &amp; Audition Assets Studio
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: "8px",
              borderRadius: "10px",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#8a8a9a",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.borderColor = "rgba(212,175,97,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#8a8a9a";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            padding: "12px 32px",
            backgroundColor: "#08080c",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            overflowX: "auto",
          }}
        >
          <button
            onClick={() => setActiveTab("photos")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "10px",
              border: activeTab === "photos" ? "1px solid #d4af61" : "1px solid transparent",
              backgroundColor: activeTab === "photos" ? "rgba(212,175,97,0.12)" : "transparent",
              color: activeTab === "photos" ? "#ffffff" : "#8a8a9a",
              fontSize: "12px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: activeTab === "photos" ? 700 : 500,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <Camera size={14} color={activeTab === "photos" ? "#d4af61" : "#707080"} />
            <span>Profile &amp; Photoshoot Suite</span>
            <span
              style={{
                fontSize: "10px",
                padding: "2px 6px",
                borderRadius: "4px",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            >
              {mediaItems.filter((m) => m.type === "photo").length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("videos")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "10px",
              border: activeTab === "videos" ? "1px solid #d4af61" : "1px solid transparent",
              backgroundColor: activeTab === "videos" ? "rgba(212,175,97,0.12)" : "transparent",
              color: activeTab === "videos" ? "#ffffff" : "#8a8a9a",
              fontSize: "12px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: activeTab === "videos" ? 700 : 500,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <Film size={14} color={activeTab === "videos" ? "#d4af61" : "#707080"} />
            <span>Showreels &amp; Monologue Videos</span>
            <span
              style={{
                fontSize: "10px",
                padding: "2px 6px",
                borderRadius: "4px",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            >
              {mediaItems.filter((m) => m.type === "video").length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("singing")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "10px",
              border: activeTab === "singing" ? "1px solid #d4af61" : "1px solid transparent",
              backgroundColor: activeTab === "singing" ? "rgba(212,175,97,0.12)" : "transparent",
              color: activeTab === "singing" ? "#ffffff" : "#8a8a9a",
              fontSize: "12px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: activeTab === "singing" ? 700 : 500,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <Music size={14} color={activeTab === "singing" ? "#d4af61" : "#707080"} />
            <span>Singing &amp; Vocal Reels</span>
            <span
              style={{
                fontSize: "10px",
                padding: "2px 6px",
                borderRadius: "4px",
                backgroundColor: "rgba(212,175,97,0.1)",
              }}
            >
              {mediaItems.filter((m) => m.type === "singing" || m.type === "audio").length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("bio")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "10px",
              border: activeTab === "bio" ? "1px solid #d4af61" : "1px solid transparent",
              backgroundColor: activeTab === "bio" ? "rgba(212,175,97,0.12)" : "transparent",
              color: activeTab === "bio" ? "#ffffff" : "#8a8a9a",
              fontSize: "12px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: activeTab === "bio" ? 700 : 500,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <FileText size={14} color={activeTab === "bio" ? "#d4af61" : "#707080"} />
            <span>Artistic Bio &amp; AI Pitch</span>
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "28px 32px", overflowY: "auto", flex: 1 }}>
          {uploadSuccess && (
            <div
              style={{
                marginBottom: "20px",
                padding: "12px 16px",
                borderRadius: "12px",
                border: "1px solid rgba(52,211,153,0.3)",
                backgroundColor: "rgba(52,211,153,0.1)",
                color: "#34d399",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <CheckCircle2 size={16} />
              <span>Asset successfully processed, DRM-watermarked, and synced to your Performer Profile!</span>
            </div>
          )}

          {/* TAB 1, 2, 3: MEDIA UPLOAD & GALLERY (Photos, Videos, Singing) */}
          {activeTab !== "bio" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Upload Dropzone */}
              <div
                style={{
                  padding: "28px",
                  borderRadius: "16px",
                  border: "2px dashed rgba(212,175,97,0.35)",
                  backgroundColor: "rgba(10,10,16,0.6)",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept={
                    activeTab === "photos"
                      ? "image/*"
                      : activeTab === "videos"
                      ? "video/*"
                      : "video/*,audio/*"
                  }
                  style={{ display: "none" }}
                />

                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "16px",
                    backgroundColor: "rgba(212,175,97,0.12)",
                    border: "1px solid rgba(212,175,97,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#d4af61",
                  }}
                >
                  <Upload size={22} />
                </div>

                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
                    {isUploading ? "ENCODING & WATERMARKING ASSET..." : "Click or Drag to Upload Files"}
                  </div>
                  <p style={{ fontSize: "11px", color: "#8a8a9a", margin: 0 }}>
                    {activeTab === "photos" &&
                      "High-Resolution JPEG/PNG (Max 15MB). Supports 0° Front, 45° Quarter, 90° Profile, and Editorial Lookbook stills."}
                    {activeTab === "videos" &&
                      "MP4 or MOV up to 4K / 1080p (Max 250MB). Auto-compressed with broadcast-grade audio normalization."}
                    {activeTab === "singing" &&
                      "Video or Audio reels (Classical Hindustani, Carnatic, Bollywood Playback, Ghazal, Musical Theatre)."}
                  </p>
                </div>

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginTop: "4px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "monospace",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      color: "#c0c0d0",
                    }}
                  >
                    ✦ CINTAA SHA-256 DRM EMBEDDED
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "monospace",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      color: "#34d399",
                    }}
                  >
                    ● 100% CASTING DIRECTORS ENCRYPTION
                  </span>
                </div>
              </div>

              {/* Uploaded Gallery Grid */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#d4af61",
                      fontWeight: 700,
                    }}
                  >
                    Active Portfolio Assets ({filteredItems.length})
                  </span>
                  <span style={{ fontSize: "11px", color: "#8a8a9a", fontFamily: "monospace" }}>
                    Hover to manage or set as Primary Headshot
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        borderRadius: "16px",
                        backgroundColor: "#07070b",
                        border: item.isPrimary ? "1px solid #d4af61" : "1px solid rgba(255,255,255,0.09)",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {/* Thumbnail View */}
                      <div
                        style={{
                          position: "relative",
                          aspectRatio: item.type === "photo" ? "4/3" : "16/9",
                          backgroundColor: "#030305",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={item.url}
                          alt={item.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />

                        {/* Top Badges */}
                        <div
                          style={{
                            position: "absolute",
                            top: "8px",
                            left: "8px",
                            display: "flex",
                            gap: "6px",
                          }}
                        >
                          {item.isPrimary && (
                            <span
                              style={{
                                fontSize: "9px",
                                fontFamily: "monospace",
                                padding: "2px 8px",
                                borderRadius: "4px",
                                backgroundColor: "#d4af61",
                                color: "#040406",
                                fontWeight: 800,
                                textTransform: "uppercase",
                              }}
                            >
                              ★ PRIMARY HEADSHOT
                            </span>
                          )}
                          {item.duration && (
                            <span
                              style={{
                                fontSize: "9px",
                                fontFamily: "monospace",
                                padding: "2px 8px",
                                borderRadius: "4px",
                                backgroundColor: "rgba(0,0,0,0.75)",
                                color: "#ffffff",
                                backdropFilter: "blur(4px)",
                              }}
                            >
                              {item.duration}
                            </span>
                          )}
                        </div>

                        {/* Play Overlay if video/singing */}
                        {(item.type === "video" || item.type === "singing") && (
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: "rgba(0,0,0,0.3)",
                            }}
                          >
                            <div
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                backgroundColor: "rgba(212,175,97,0.9)",
                                color: "#040406",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Play size={18} className="ml-0.5 fill-current" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Info & Actions */}
                      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div>
                          <div
                            style={{
                              fontSize: "13px",
                              fontWeight: 700,
                              color: "#ffffff",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {item.title}
                          </div>
                          <div style={{ fontSize: "11px", color: "#8a8a9a" }}>{item.category}</div>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            fontSize: "10px",
                            fontFamily: "monospace",
                            color: "#606070",
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                            paddingTop: "8px",
                          }}
                        >
                          <span>{item.size || "1080p HD"}</span>
                          <span>{item.uploadedAt}</span>
                        </div>

                        <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                          {item.type === "photo" && !item.isPrimary && (
                            <button
                              onClick={() => handleSetPrimary(item.id)}
                              style={{
                                flex: 1,
                                padding: "6px",
                                borderRadius: "6px",
                                backgroundColor: "rgba(212,175,97,0.1)",
                                border: "1px solid rgba(212,175,97,0.3)",
                                color: "#d4af61",
                                fontSize: "10px",
                                fontFamily: "monospace",
                                cursor: "pointer",
                                textTransform: "uppercase",
                              }}
                            >
                              Set As Primary
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            style={{
                              padding: "6px 10px",
                              borderRadius: "6px",
                              backgroundColor: "rgba(244,63,94,0.1)",
                              border: "1px solid rgba(244,63,94,0.25)",
                              color: "#fda4af",
                              fontSize: "10px",
                              fontFamily: "monospace",
                              cursor: "pointer",
                            }}
                            title="Remove asset"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: BIO & AI CASTING PITCH */}
          {activeTab === "bio" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Header Box */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(139,92,246,0.08)",
                  border: "1px solid rgba(139,92,246,0.3)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(139,92,246,0.2)",
                      border: "1px solid rgba(139,92,246,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#c084fc",
                    }}
                  >
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>
                      AI Bio Pitch Optimizer
                    </div>
                    <div style={{ fontSize: "11px", color: "#a0a0b0" }}>
                      Transform raw acting notes into pitch-perfect bios for Bollywood and OTT directors.
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAIOptimizerOpen(true)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    backgroundColor: "#8b5cf6",
                    border: "none",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    cursor: "pointer",
                  }}
                >
                  <Sparkles size={12} />
                  <span>Launch AI Pitch Engine</span>
                </button>
              </div>

              {/* Bio Textarea */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label
                  style={{
                    fontSize: "11px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#d4af61",
                    fontWeight: 700,
                  }}
                >
                  Artist Bio &amp; Professional Statement
                </label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={6}
                  placeholder="Enter your artistic journey, training conservatory, method acting background, vocal training, and key stage credits..."
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: "14px",
                    backgroundColor: "#050508",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    fontFamily: "inherit",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              {/* Physical Specs & Demographic Preview */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "14px",
                  padding: "18px 20px",
                  borderRadius: "14px",
                  backgroundColor: "#07070b",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontSize: "12px",
                  fontFamily: "monospace",
                }}
              >
                <div>
                  <span style={{ fontSize: "10px", color: "#606070", textTransform: "uppercase", display: "block" }}>
                    Height
                  </span>
                  <span style={{ color: "#ffffff", fontWeight: 700 }}>5&apos;10&quot; (178 cm)</span>
                </div>
                <div>
                  <span style={{ fontSize: "10px", color: "#606070", textTransform: "uppercase", display: "block" }}>
                    Screen Age
                  </span>
                  <span style={{ color: "#ffffff", fontWeight: 700 }}>22 – 28 Years</span>
                </div>
                <div>
                  <span style={{ fontSize: "10px", color: "#606070", textTransform: "uppercase", display: "block" }}>
                    Vocal Range
                  </span>
                  <span style={{ color: "#d4af61", fontWeight: 700 }}>Mezzo-Soprano / Classical</span>
                </div>
                <div>
                  <span style={{ fontSize: "10px", color: "#606070", textTransform: "uppercase", display: "block" }}>
                    Primary Dialect
                  </span>
                  <span style={{ color: "#34d399", fontWeight: 700 }}>Awadhi, Hindi, English</span>
                </div>
              </div>

              {/* Save Bio Button */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  onClick={handleSaveBio}
                  className="btn-cinema-gold"
                  style={{ height: "44px", padding: "0 28px", fontSize: "12px" }}
                >
                  <CheckCircle2 size={14} />
                  <span>SAVE UPDATED BIO</span>
                </button>
              </div>
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
            borderTop: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "#09090e",
            fontSize: "11px",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#8a8a9a" }}>
            <ShieldCheck size={14} color="#d4af61" />
            <span>PROTECTED UNDER CINTAA FAIR-PLAY CHARTER &amp; DPDP ACT 2023</span>
          </div>

          <button
            onClick={onClose}
            className="btn-cinema-gold"
            style={{ height: "38px", padding: "0 24px", fontSize: "11px" }}
          >
            DONE &amp; CLOSE VAULT
          </button>
        </div>
      </div>

      {/* AI Bio Optimizer Sub-Modal */}
      <AIBioOptimizerModal
        isOpen={isAIOptimizerOpen}
        onClose={() => setIsAIOptimizerOpen(false)}
        currentBio={bio}
        onApplyBio={(newBio) => {
          setBio(newBio);
          setIsAIOptimizerOpen(false);
        }}
      />
    </div>
  );
}
