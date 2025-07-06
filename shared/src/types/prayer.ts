export interface PrayerRequest {
  id: string;
  title: string;
  description: string;
  category?: string;
  urgent: boolean;
  fulfilled: boolean;
  requesterId: string;
  communityId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MassIntention {
  id: string;
  intention: string;
  requestedBy: string;
  amount?: number;
  currency: string;
  massDate?: Date;
  fulfilled: boolean;
  requesterId: string;
  communityId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatePrayerRequest {
  title: string;
  description: string;
  category?: string;
  urgent?: boolean;
  communityId?: string;
}

export interface CreateMassIntentionRequest {
  intention: string;
  requestedBy: string;
  amount?: number;
  currency?: string;
  massDate?: Date;
  communityId: string;
}

export interface SpiritualStats {
  totalPrayerRequests: number;
  totalMassIntentions: number;
  urgentPrayerRequests: number;
  fulfilledPrayerRequests: number;
  upcomingMasses: number;
} 