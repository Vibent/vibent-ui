export interface User {
  ref ?: string;
  email ?: string;
  firstName ?: string;
  lastName ?: string;
  phoneNumber ?: number;
  memberships ?: any[];
  participations ?: any[];
  membershipRequests?: any[];
  socialCredentials?: object;
  imagePath?: any;
}

export interface Email {
  email: string;
}

export interface PasswordReset {
  newPassword: string;
  token: string;
}