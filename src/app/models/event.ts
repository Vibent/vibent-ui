export interface Event {

  title: string;
  ref?: string;
  description?: string;
  endDate?: Date;
  startDate?: string;
  groupRef: string;
  participationRefs?: string[];

  /** bubbles **/
  alimentationBubbles?: any[];
  checkboxBubbles?: any[];
  freeBubbles?: any[];
  locationBubbles?: any[];
  planningBubbles?: any[];
  surveyBubbles?: any[];
  travelBubbles?: any[];
  isPassed?: boolean;

}