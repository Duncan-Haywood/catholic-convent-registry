export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  authenticated?: boolean;
  roles?: string[];
}

export interface ApiRoutes {
  // Auth routes
  AUTH: {
    LOGIN: ApiEndpoint;
    REGISTER: ApiEndpoint;
    LOGOUT: ApiEndpoint;
    REFRESH: ApiEndpoint;
    PROFILE: ApiEndpoint;
    VERIFY_EMAIL: ApiEndpoint;
    FORGOT_PASSWORD: ApiEndpoint;
    RESET_PASSWORD: ApiEndpoint;
  };
  
  // User routes
  USERS: {
    LIST: ApiEndpoint;
    GET: ApiEndpoint;
    UPDATE: ApiEndpoint;
    DELETE: ApiEndpoint;
    UPDATE_PREFERENCES: ApiEndpoint;
  };
  
  // Community routes
  COMMUNITIES: {
    LIST: ApiEndpoint;
    GET: ApiEndpoint;
    CREATE: ApiEndpoint;
    UPDATE: ApiEndpoint;
    DELETE: ApiEndpoint;
    VERIFY: ApiEndpoint;
    FOLLOW: ApiEndpoint;
    UNFOLLOW: ApiEndpoint;
    SEARCH: ApiEndpoint;
  };
  
  // Donation routes
  DONATIONS: {
    LIST: ApiEndpoint;
    GET: ApiEndpoint;
    CREATE: ApiEndpoint;
    UPDATE: ApiEndpoint;
    STATS: ApiEndpoint;
    EXPORT: ApiEndpoint;
  };
  
  // Subscription routes
  SUBSCRIPTIONS: {
    LIST: ApiEndpoint;
    GET: ApiEndpoint;
    CREATE: ApiEndpoint;
    UPDATE: ApiEndpoint;
    CANCEL: ApiEndpoint;
    PAUSE: ApiEndpoint;
    RESUME: ApiEndpoint;
  };
  
  // Payment routes
  PAYMENTS: {
    CREATE_INTENT: ApiEndpoint;
    CONFIRM: ApiEndpoint;
    METHODS: ApiEndpoint;
    ADD_METHOD: ApiEndpoint;
    REMOVE_METHOD: ApiEndpoint;
  };
  
  // Prayer routes
  PRAYERS: {
    LIST: ApiEndpoint;
    GET: ApiEndpoint;
    CREATE: ApiEndpoint;
    UPDATE: ApiEndpoint;
    DELETE: ApiEndpoint;
  };
  
  // Mass Intention routes
  MASS_INTENTIONS: {
    LIST: ApiEndpoint;
    GET: ApiEndpoint;
    CREATE: ApiEndpoint;
    UPDATE: ApiEndpoint;
    DELETE: ApiEndpoint;
  };
  
  // File upload routes
  FILES: {
    UPLOAD: ApiEndpoint;
    DELETE: ApiEndpoint;
  };
}

export const API_ROUTES: ApiRoutes = {
  AUTH: {
    LOGIN: { method: 'POST', path: '/api/auth/login' },
    REGISTER: { method: 'POST', path: '/api/auth/register' },
    LOGOUT: { method: 'POST', path: '/api/auth/logout', authenticated: true },
    REFRESH: { method: 'POST', path: '/api/auth/refresh' },
    PROFILE: { method: 'GET', path: '/api/auth/profile', authenticated: true },
    VERIFY_EMAIL: { method: 'POST', path: '/api/auth/verify-email' },
    FORGOT_PASSWORD: { method: 'POST', path: '/api/auth/forgot-password' },
    RESET_PASSWORD: { method: 'POST', path: '/api/auth/reset-password' }
  },
  
  USERS: {
    LIST: { method: 'GET', path: '/api/users', authenticated: true, roles: ['ADMIN', 'SUPER_ADMIN'] },
    GET: { method: 'GET', path: '/api/users/:id', authenticated: true },
    UPDATE: { method: 'PUT', path: '/api/users/:id', authenticated: true },
    DELETE: { method: 'DELETE', path: '/api/users/:id', authenticated: true },
    UPDATE_PREFERENCES: { method: 'PUT', path: '/api/users/:id/preferences', authenticated: true }
  },
  
  COMMUNITIES: {
    LIST: { method: 'GET', path: '/api/communities' },
    GET: { method: 'GET', path: '/api/communities/:id' },
    CREATE: { method: 'POST', path: '/api/communities', authenticated: true, roles: ['ADMIN', 'SUPER_ADMIN'] },
    UPDATE: { method: 'PUT', path: '/api/communities/:id', authenticated: true },
    DELETE: { method: 'DELETE', path: '/api/communities/:id', authenticated: true, roles: ['ADMIN', 'SUPER_ADMIN'] },
    VERIFY: { method: 'POST', path: '/api/communities/:id/verify', authenticated: true, roles: ['ADMIN', 'SUPER_ADMIN'] },
    FOLLOW: { method: 'POST', path: '/api/communities/:id/follow', authenticated: true },
    UNFOLLOW: { method: 'DELETE', path: '/api/communities/:id/follow', authenticated: true },
    SEARCH: { method: 'GET', path: '/api/communities/search' }
  },
  
  DONATIONS: {
    LIST: { method: 'GET', path: '/api/donations', authenticated: true },
    GET: { method: 'GET', path: '/api/donations/:id', authenticated: true },
    CREATE: { method: 'POST', path: '/api/donations', authenticated: true },
    UPDATE: { method: 'PUT', path: '/api/donations/:id', authenticated: true },
    STATS: { method: 'GET', path: '/api/donations/stats', authenticated: true },
    EXPORT: { method: 'GET', path: '/api/donations/export', authenticated: true }
  },
  
  SUBSCRIPTIONS: {
    LIST: { method: 'GET', path: '/api/subscriptions', authenticated: true },
    GET: { method: 'GET', path: '/api/subscriptions/:id', authenticated: true },
    CREATE: { method: 'POST', path: '/api/subscriptions', authenticated: true },
    UPDATE: { method: 'PUT', path: '/api/subscriptions/:id', authenticated: true },
    CANCEL: { method: 'POST', path: '/api/subscriptions/:id/cancel', authenticated: true },
    PAUSE: { method: 'POST', path: '/api/subscriptions/:id/pause', authenticated: true },
    RESUME: { method: 'POST', path: '/api/subscriptions/:id/resume', authenticated: true }
  },
  
  PAYMENTS: {
    CREATE_INTENT: { method: 'POST', path: '/api/payments/intent', authenticated: true },
    CONFIRM: { method: 'POST', path: '/api/payments/confirm', authenticated: true },
    METHODS: { method: 'GET', path: '/api/payments/methods', authenticated: true },
    ADD_METHOD: { method: 'POST', path: '/api/payments/methods', authenticated: true },
    REMOVE_METHOD: { method: 'DELETE', path: '/api/payments/methods/:id', authenticated: true }
  },
  
  PRAYERS: {
    LIST: { method: 'GET', path: '/api/prayers', authenticated: true },
    GET: { method: 'GET', path: '/api/prayers/:id', authenticated: true },
    CREATE: { method: 'POST', path: '/api/prayers', authenticated: true },
    UPDATE: { method: 'PUT', path: '/api/prayers/:id', authenticated: true },
    DELETE: { method: 'DELETE', path: '/api/prayers/:id', authenticated: true }
  },
  
  MASS_INTENTIONS: {
    LIST: { method: 'GET', path: '/api/mass-intentions', authenticated: true },
    GET: { method: 'GET', path: '/api/mass-intentions/:id', authenticated: true },
    CREATE: { method: 'POST', path: '/api/mass-intentions', authenticated: true },
    UPDATE: { method: 'PUT', path: '/api/mass-intentions/:id', authenticated: true },
    DELETE: { method: 'DELETE', path: '/api/mass-intentions/:id', authenticated: true }
  },
  
  FILES: {
    UPLOAD: { method: 'POST', path: '/api/files/upload', authenticated: true },
    DELETE: { method: 'DELETE', path: '/api/files/:id', authenticated: true }
  }
}; 