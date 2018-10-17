export class EventParticipant {
  id?: number;
  userRef?: string;
  eventRef?: string;
  isVisible?: boolean;
  answer?: EventParticipantAnswer;
}

export enum EventParticipantAnswer {
  YES = 'YES',
  NO = 'NO',
  MAYBE = 'MAYBE',
  UNANSWERED = 'UNANSWERED',
}
