export enum FIELD_NAMES {
  FULL_NAME = 'fullName',
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirm-password',
  TG_CHANNEL_NAME = 'telegramChannelName',
  RECIPIENT = 'recipient',
  TEXT = 'text',
  FILE = 'file',
  DEPOSIT_AMOUNT = '',
  TRADER_TYPE = 'traderB2X',
}

export enum FIELD_TYPES {
  PASSWORD = 'password',
  TEXT = 'text',
  NUMBER = 'number',
}

export enum AUTH_URL {
  REGISTRATION_ADMIN = '/enter/sign-up/admin',
  REGISTRATION_SUPPORT = '/enter/sign-up/support',
  REGISTRATION_TRADER = '/enter/sign-up/trader',
  REGISTRATION_TRADER_PREPARATION = '/enter/sign-up/registration-link',
  LOGIN = '/enter/sign-in',
  RESET = '/enter/reset-password',
  REFRESH = '/enter/refresh-token',
  FORGOT = '/enter/forgot-password',
}

export enum TRADER_URL {
  CREATE_DEAL = '/trader/create-deal',
}

export enum STORAGE_SERVICE_KEYS {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
  USER_ID = 'userId',
}

export enum DASHBOARD_LINKS {
  CREATE_ANNOUNCE = 'dashboard/create-announce',
  CREATE_DEAL = 'dashboard/create-deal',
  DEAL_HISTORY = 'dashboard/deal-history',
}

export enum ROUTES {
  AUTH_LOGIN = '/login',
}
