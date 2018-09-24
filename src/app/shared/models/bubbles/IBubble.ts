export class IBubble {
  id: number;
  creatorRef: string;
  eventRef: string;
  type: BubbleType;
}


export enum BubbleType {
  AlimentationBubble = 'AlimentationBubble',
  CheckboxBubble = 'CheckboxBubble',
  FreeBubble = 'FreeBubble',
  PlanningBubble = 'PlanningBubble',
  SurveyBubble = 'SurveyBubble',
  TravelBubble = 'TravelBubble'
}