export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface ApiError {
  message: string;
  code: string;
  details?: Record<string, any>;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
}

export interface FileUpload {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  rate: number; // Exchange rate to USD
}

export interface Country {
  code: string;
  name: string;
  flag: string;
  currency: string;
}

export interface FilterOptions {
  label: string;
  value: string;
  count?: number;
}

export interface SearchFilters {
  search?: string;
  categories?: string[];
  countries?: string[];
  currencies?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  amountRange?: {
    min: number;
    max: number;
  };
}

export interface StatCard {
  title: string;
  value: string | number;
  change?: number;
  changeType?: 'increase' | 'decrease' | 'neutral';
  icon?: string;
  description?: string;
}

export interface NotificationPreferences {
  email: boolean;
  sms: boolean;
  push: boolean;
  donationReceipts: boolean;
  impactReports: boolean;
  newsletter: boolean;
  prayerReminders: boolean;
  communityUpdates: boolean;
} 