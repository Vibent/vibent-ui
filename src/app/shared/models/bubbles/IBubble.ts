export class IBubble {
  id: number;
  creatorRef: string;
  eventRef: string;
  type: BubbleType;
}


export enum BubbleType {
  ALIMENTATION,
  CHECKBOX,
  FREE,
  PLANNING,
  SURVEY,
  TRAVEL
}