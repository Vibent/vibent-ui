export interface Group {

  name?: string;
  ref?: string;
  adminRefs?: string[];
  eventRefs?: string[];
  description?: string;
  inviteRefs?: string[];
  memberRefs?: string[];
  hasDefaultAdmin?: boolean;
  allAdmins ?: boolean;
  imagePath?: string;

}
