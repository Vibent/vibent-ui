import { EventParticipant } from './event-participant';

export interface Event {

  title: string;
  ref?: string;
  description?: string;
  endDate?: Date;
  startDate?: string;
  groupRef: string;
  // TODO type
  participationRefs?: EventParticipant[];

  /*** bubbles ***/
  alimentationBubbles?: any[];
  checkboxBubbles?: any[];
  freeBubbles?: any[];
  locationBubbles?: any[];
  planningBubbles?: any[];
  surveyBubbles?: any[];
  travelBubbles?: any[];

}
