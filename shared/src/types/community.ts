export enum ReligiousCharism {
  APOSTOLIC = 'APOSTOLIC',
  CONTEMPLATIVE = 'CONTEMPLATIVE',
  MENDICANT = 'MENDICANT',
  MONASTIC = 'MONASTIC',
  SECULAR = 'SECULAR',
  MIXED = 'MIXED'
}

export enum NeedCategory {
  INFRASTRUCTURE = 'INFRASTRUCTURE',
  EDUCATION = 'EDUCATION',
  HEALTHCARE = 'HEALTHCARE',
  FORMATION = 'FORMATION',
  MINISTRY = 'MINISTRY',
  EMERGENCY = 'EMERGENCY',
  MAINTENANCE = 'MAINTENANCE',
  EQUIPMENT = 'EQUIPMENT',
  TECHNOLOGY = 'TECHNOLOGY',
  FOOD_NUTRITION = 'FOOD_NUTRITION',
  CLOTHING = 'CLOTHING',
  TRANSPORTATION = 'TRANSPORTATION',
  SPIRITUAL_RESOURCES = 'SPIRITUAL_RESOURCES'
}

export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT'
}

export interface Address {
  id: string;
  street: string;
  city: string;
  state?: string;
  postalCode?: string;
  country: string;
  latitude?: number;
  longitude?: number;
}

export interface ReligiousCommunity {
  id: string;
  name: string;
  displayName: string;
  slug: string;
  description?: string;
  mission?: string;
  charism: ReligiousCharism;
  apostolate: string[];
  email?: string;
  phone?: string;
  website?: string;
  address?: Address;
  foundedYear?: number;
  foundedLocation?: string;
  motherHouse?: string;
  currentSize?: number;
  verified: boolean;
  verifiedBy?: string;
  verificationDate?: Date;
  logo?: string;
  coverImage?: string;
  images: string[];
  active: boolean;
  acceptingGifts: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CommunityNeed {
  id: string;
  title: string;
  description: string;
  category: NeedCategory;
  priority: Priority;
  targetAmount?: number;
  currentAmount: number;
  currency: string;
  deadline?: Date;
  fulfilled: boolean;
  active: boolean;
  communityId: string;
  community?: ReligiousCommunity;
  createdAt: Date;
  updatedAt: Date;
}

export interface WishListItem {
  id: string;
  title: string;
  description?: string;
  category: string;
  priority: Priority;
  estimatedCost?: number;
  currency: string;
  quantity: number;
  fulfilled: boolean;
  communityId: string;
  community?: ReligiousCommunity;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImpactReport {
  id: string;
  title: string;
  content: string;
  images: string[];
  published: boolean;
  communityId: string;
  community?: ReligiousCommunity;
  createdAt: Date;
  updatedAt: Date;
}

export interface CommunitySearchFilters {
  search?: string;
  charism?: ReligiousCharism;
  apostolate?: string[];
  country?: string;
  needCategory?: NeedCategory;
  verified?: boolean;
  acceptingGifts?: boolean;
  page?: number;
  limit?: number;
}

export interface CommunitySearchResult {
  communities: ReligiousCommunity[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
} 