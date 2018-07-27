export interface User {
  ref ?: string;
  email ?: string;
  firstName ?: string;
  lastName ?: string;
  phoneNumber ?: number;
  memberships ?: any[];
  participations ?: any[];
  membershipRequests?: any[];
  imagePath?: any;
}
