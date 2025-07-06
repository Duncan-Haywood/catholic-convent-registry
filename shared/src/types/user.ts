export enum UserRole {
  DONOR = 'DONOR',
  ADMIN = 'ADMIN',
  COMMUNITY_ADMIN = 'COMMUNITY_ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN'
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  role: UserRole;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface DonorProfile {
  id: string;
  userId: string;
  preferredCurrency: string;
  donationGoal?: number;
  interests: string[];
  prayerCommitment?: string;
  favoriteSaints: string[];
  liturgicalPrefs: string[];
  emailNotifications: boolean;
  newsletter: boolean;
  impactReports: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminProfile {
  id: string;
  userId: string;
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  profile?: DonorProfile | AdminProfile;
} 