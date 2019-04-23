export class EventParticipant {
  id?: number;
  userRef?: string;
  eventRef?: string;
  isVisible?: boolean;
  answer?: EventParticipantAnswer;
}

export class ParticipantsSplitted {
  yes: string[] = [];
  no: string[] = [];
  maybe: string[] = [];
  unanswered: string[] = [];
}

export enum EventParticipantAnswer {
  YES = 'YES',
  NO = 'NO',
  MAYBE = 'MAYBE',
  UNANSWERED = 'UNANSWERED',
}
