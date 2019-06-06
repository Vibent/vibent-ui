import { Membership } from './membership';

export interface Group {

  name?: string;
  ref?: string;
  adminRefs?: string[];
  eventRefs?: string[];
  description?: string;
  membershipRequests?: string[];
  memberships?: Membership[];
  hasDefaultAdmin?: boolean;
  allAdmins ?: boolean;

}