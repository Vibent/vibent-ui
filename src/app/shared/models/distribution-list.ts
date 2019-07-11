export interface DistributionListRequest {
  description?: string;
  eventRef?: string;
  title?: string;
}

export interface DistributionList {
  description?: string;
  creatorRef?: string;
  eventRefs?: string[];
  memberRefs?: string[];
  title?: string;
  id?: number;
}