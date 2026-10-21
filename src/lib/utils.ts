import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = typeof window !== "undefined" ? new Date() : new Date("2026-10-20T00:00:00Z");
  const diffMs = Math.max(0, now.getTime() - date.getTime());
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor(diffMs / (1000 * 60));

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return formatDate(dateString);
}

export function daysUntil(dateString: string): number {
  const date = new Date(dateString);
  const now = typeof window !== "undefined" ? new Date() : new Date("2026-10-20T00:00:00Z");
  const diffMs = date.getTime() - now.getTime();
  return Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    submitted: "badge-subtle",
    under_review: "badge-amber",
    shortlisted: "badge-gold",
    callback_requested: "badge-purple",
    selected: "badge-green",
    not_selected: "badge-coral",
    withdrawn: "badge-subtle",
    published: "badge-green",
    draft: "badge-subtle",
    paused: "badge-amber",
    closed: "badge-subtle",
    verified: "badge-green",
    pending: "badge-amber",
    unverified: "badge-subtle",
    rejected: "badge-coral",
    available: "badge-green",
    partial: "badge-amber",
    unavailable: "badge-subtle",
  };
  return colors[status] ?? "badge-subtle";
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    submitted: "Submitted",
    under_review: "Under Review",
    shortlisted: "Shortlisted",
    callback_requested: "Callback Requested",
    selected: "Selected",
    not_selected: "Not Selected",
    withdrawn: "Withdrawn",
    published: "Published",
    draft: "Draft",
    paused: "Paused",
    closed: "Closed",
    verified: "Verified",
    pending: "Pending Review",
    unverified: "Unverified",
    rejected: "Rejected",
    available: "Available",
    partial: "Partially Available",
    unavailable: "Unavailable",
    feature_film: "Feature Film",
    web_series: "Web Series",
    tv_serial: "TV Serial",
    short_film: "Short Film",
    commercial: "Commercial",
    music_video: "Music Video",
    theatre: "Theatre",
    reality_show: "Reality Show",
    documentary: "Documentary",
    other: "Other",
    beginner: "Beginner",
    intermediate: "Intermediate",
    experienced: "Experienced",
    professional: "Professional",
  };
  return labels[status] ?? status.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getExperienceLevel(level: string): number {
  const levels: Record<string, number> = {
    beginner: 1,
    intermediate: 2,
    experienced: 3,
    professional: 4,
  };
  return levels[level] ?? 0;
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "…";
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function pluralize(count: number, singular: string, plural?: string): string {
  if (count === 1) return `${count} ${singular}`;
  return `${count} ${plural ?? singular + "s"}`;
}

export function formatSalary(min: number, max: number, period: string): string {
  const formatNum = (num: number) => {
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(1)} Cr`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(0)} Lakh`;
    if (num >= 1000) return `₹${(num / 1000).toFixed(0)}k`;
    return `₹${num.toLocaleString("en-IN")}`;
  };
  const periodLabel = period === "per_day" ? "/day" : period === "per_project" ? " total" : `/${period}`;
  return `${formatNum(min)} - ${formatNum(max)}${periodLabel}`;
}

