export interface Event {

  title: string;
  ref?: string;
  description?: string;
  endDate?: Date;
  startDate?: Date;
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

}
