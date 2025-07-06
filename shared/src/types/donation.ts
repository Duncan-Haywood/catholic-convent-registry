export enum DonationType {
  GENERAL = 'GENERAL',
  SPECIFIC_NEED = 'SPECIFIC_NEED',
  MASS_INTENTION = 'MASS_INTENTION',
  MEMORIAL = 'MEMORIAL',
  THANKSGIVING = 'THANKSGIVING',
  BIRTHDAY = 'BIRTHDAY',
  ANNIVERSARY = 'ANNIVERSARY',
  HOLIDAY = 'HOLIDAY'
}

export enum DonationStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
  REFUNDED = 'REFUNDED'
}

export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
  PAST_DUE = 'PAST_DUE'
}

export interface Donation {
  id: string;
  amount: number;
  currency: string;
  donationType: DonationType;
  status: DonationStatus;
  recurring: boolean;
  recurringPeriod?: string;
  anonymous: boolean;
  stripePaymentId?: string;
  paymentMethod?: string;
  processingFee?: number;
  netAmount: number;
  dedicatedTo?: string;
  dedicationMessage?: string;
  donorId: string;
  communityId: string;
  needId?: string;
  subscriptionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  id: string;
  amount: number;
  currency: string;
  period: string;
  status: SubscriptionStatus;
  nextPayment?: Date;
  lastPayment?: Date;
  stripeSubscriptionId?: string;
  stripeCustomerId?: string;
  donorId: string;
  communityId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateDonationRequest {
  amount: number;
  currency: string;
  donationType: DonationType;
  recurring?: boolean;
  recurringPeriod?: string;
  anonymous?: boolean;
  dedicatedTo?: string;
  dedicationMessage?: string;
  communityId: string;
  needId?: string;
  paymentMethodId: string;
}

export interface CreateSubscriptionRequest {
  amount: number;
  currency: string;
  period: string;
  communityId: string;
  paymentMethodId: string;
}

export interface DonationStats {
  totalDonations: number;
  totalAmount: number;
  averageDonation: number;
  recurringDonations: number;
  oneTimeDonations: number;
  topCommunities: Array<{
    communityId: string;
    communityName: string;
    totalAmount: number;
    donationCount: number;
  }>;
}

export interface PaymentIntent {
  clientSecret: string;
  paymentIntentId: string;
} 