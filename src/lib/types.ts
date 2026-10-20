// ============================================================
// RANGMANCH — Core Data Types
// ============================================================

// --- User & Auth ---

export type UserRole =
  | "talent"
  | "guardian"
  | "casting_director"
  | "org_admin"
  | "platform_admin";

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  avatar?: string;
  verified: boolean;
  createdAt: string;
}

// --- Talent Profile ---

export type AvailabilityStatus = "available" | "partial" | "unavailable";
export type ExperienceLevel = "beginner" | "intermediate" | "experienced" | "professional";

export interface TalentProfile {
  id: string;
  userId: string;
  displayName: string;
  stageName?: string;
  profilePhoto?: string;
  portfolioPhotos: string[];
  city: string;
  state: string;
  ageMin: number;
  ageMax: number;
  gender?: string;
  languages: string[];
  skills: {
    acting: ExperienceLevel | null;
    dance: string[];
    singing: ExperienceLevel | null;
    modelling: ExperienceLevel | null;
    voiceOver: ExperienceLevel | null;
    theatre: ExperienceLevel | null;
  };
  experience: {
    film: string[];
    television: string[];
    theatre: string[];
    commercial: string[];
    webSeries: string[];
  };
  education?: string;
  bio?: string;
  introVideo?: string;
  auditionVideos: string[];
  rolePreferences: string[];
  availability: AvailabilityStatus;
  availabilityNote?: string;
  portfolioLinks: string[];
  isPublic: boolean;
  isMinor: boolean;
  guardianId?: string;
  profileCompletion: number;
  createdAt: string;
  updatedAt: string;
}

// --- Organization ---

export type OrgVerificationStatus = "unverified" | "pending" | "verified" | "rejected";

export interface Organization {
  id: string;
  name: string;
  type: "casting_agency" | "production_house" | "studio" | "streaming" | "theatre" | "independent";
  logo?: string;
  website?: string;
  description?: string;
  city: string;
  state: string;
  verificationStatus: OrgVerificationStatus;
  createdAt: string;
}

// --- Casting Call ---

export type CastingCallStatus = "draft" | "published" | "paused" | "closed";
export type ProjectType =
  | "feature_film"
  | "web_series"
  | "tv_serial"
  | "short_film"
  | "commercial"
  | "music_video"
  | "theatre"
  | "reality_show"
  | "documentary"
  | "other";

export interface CastingRole {
  id: string;
  castingCallId: string;
  roleName: string;
  roleType: "lead" | "supporting" | "featured" | "background" | "voiceover";
  description: string;
  ageMin: number;
  ageMax: number;
  genderPreference?: string;
  languages: string[];
  skills: string[];
  experience: ExperienceLevel;
  compensation?: string;
  spotsAvailable: number;
}

export interface CastingCall {
  id: string;
  title: string;
  organizationId?: string;
  organization?: Organization;
  castingDirectorId: string;
  projectType: ProjectType;
  description: string;
  roles: CastingRole[];
  location: string;
  state: string;
  isRemote: boolean;
  applicationDeadline: string;
  auditionDate?: string;
  status: CastingCallStatus;
  requiresAuditionVideo: boolean;
  auditionInstructions?: string;
  views: number;
  applicationCount: number;
  createdAt: string;
  updatedAt: string;
}

// --- Application ---

export type ApplicationStatus =
  | "submitted"
  | "under_review"
  | "shortlisted"
  | "callback_requested"
  | "selected"
  | "not_selected"
  | "withdrawn";

export interface Application {
  id: string;
  castingCallId: string;
  castingCall?: CastingCall;
  roleId: string;
  role?: CastingRole;
  talentId: string;
  talent?: TalentProfile;
  status: ApplicationStatus;
  coverNote?: string;
  auditionVideoUrl?: string;
  submittedAt: string;
  updatedAt: string;
  statusHistory: StatusHistoryEntry[];
  privateNotes?: PrivateNote[];
}

export interface StatusHistoryEntry {
  status: ApplicationStatus;
  changedAt: string;
  changedBy: string;
  note?: string;
}

// --- Shortlist ---

export interface Shortlist {
  id: string;
  name: string;
  castingDirectorId: string;
  castingCallId?: string;
  candidates: ShortlistMember[];
  createdAt: string;
  updatedAt: string;
}

export interface ShortlistMember {
  id: string;
  shortlistId: string;
  talentId: string;
  talent?: TalentProfile;
  addedAt: string;
  note?: string;
}

// --- Private Notes ---

export interface PrivateNote {
  id: string;
  applicationId: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: string;
}

// --- Audition Analysis ---

export interface AuditionAnalysis {
  id: string;
  applicationId: string;
  transcript?: TranscriptSegment[];
  summary?: string;
  languageDetected?: string;
  keyObservations?: string[];
  roleMatchPoints?: string[];
  generatedAt: string;
  isAiGenerated: boolean;
  provider?: string;
}

export interface TranscriptSegment {
  startTime: number;
  endTime: number;
  text: string;
  speaker?: string;
}

// --- Notifications ---

export type NotificationType =
  | "application_submitted"
  | "status_changed"
  | "shortlisted"
  | "callback_requested"
  | "casting_call_update"
  | "deadline_reminder"
  | "invitation"
  | "account_update"
  | "safety_alert";

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  link?: string;
  isRead: boolean;
  createdAt: string;
}

// --- Calendar Events ---

export interface CalendarEvent {
  id: string;
  title: string;
  type: "audition" | "callback" | "meeting" | "deadline" | "other";
  date: string;
  time?: string;
  location?: string;
  participants?: string[];
  notes?: string;
  userId: string;
  createdAt: string;
}

// --- AI Search ---

export interface AISearchQuery {
  naturalLanguageQuery: string;
  parsedFilters?: TalentSearchFilters;
  explanation?: string;
}

export interface TalentSearchFilters {
  ageMin?: number;
  ageMax?: number;
  languages?: string[];
  skills?: string[];
  cities?: string[];
  states?: string[];
  experienceLevel?: ExperienceLevel;
  availability?: AvailabilityStatus;
  roleTypes?: string[];
  gender?: string;
}

// --- Industry Connect ---

export interface IndustryProfile {
  id: string;
  userId?: string;
  name: string;
  role: string;
  organizationId?: string;
  organization?: Organization;
  bio?: string;
  photo?: string;
  credits: string[];
  city: string;
  verified: boolean;
  claimed: boolean;
  createdAt: string;
}

// --- M004: DigiLocker & Aadhaar Instant KYC ---
export interface DigiLockerKYCRecord {
  verificationId: string;
  documentType: "aadhaar" | "passport" | "driving_license" | "voter_id";
  maskedDocNumber: string;
  verifiedName: string;
  verifiedDob: string;
  gender: string;
  faceMatchScore: number;
  status: "verified" | "pending" | "failed";
  verifiedAt: string;
  certificateHash: string;
  digiLockerDocUri?: string;
}

// --- M005: Minor / Child Performer Legal Guardian Co-Signing ---
export interface GuardianCoSignRecord {
  recordId: string;
  minorTalentId: string;
  minorName: string;
  minorAge: number;
  guardianName: string;
  guardianRelation: "Mother" | "Father" | "Legal Guardian";
  guardianPhone: string;
  guardianEmail: string;
  guardianAadhaarMasked: string;
  ncpcrComplianceConfirmed: boolean;
  educationProtectionClauseAgreed: boolean;
  maxDailyHoursAgreed: boolean;
  trustFundAccountLinked: boolean;
  digitalSignatureTimestamp: string;
  status: "approved" | "pending" | "revoked";
  approvalCertificateId: string;
}

