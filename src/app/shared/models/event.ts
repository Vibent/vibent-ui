import { EventParticipant } from './event-participant';
import { AlimentationBubble } from './bubbles/AlimentationBubble';
import { CheckboxBubble } from './bubbles/CheckboxBubble';
import { FreeBubble } from './bubbles/FreeBubble';
import { PlanningBubble } from './bubbles/PlanningBubble';
import { SurveyBubble } from './bubbles/SurveyBubble';
import { TravelBubble } from './bubbles/TravelBubble';
import { IBubble } from './bubbles/IBubble';

export interface Event {

  title?: string;
  ref?: string;
  creatorRef?: string;
  description?: string;
  endDate?: Date;
  startDate?: string;
  groupRef?: string;
  participationRefs?: EventParticipant[];

  /*** bubbles ***/
  alimentationBubbles?: AlimentationBubble[];
  checkboxBubbles?: CheckboxBubble[];
  freeBubbles?: FreeBubble[];
  locationBubbles?: any[];
  planningBubbles?: PlanningBubble[];
  surveyBubbles?: SurveyBubble[];
  travelBubbles?: TravelBubble[];

}


export interface EventUpdate {
  event: Event;
  bubble: IBubble;
}