import { Injectable } from '@angular/core';
import { EventParticipant, EventParticipantAnswer, ParticipantsSplitted } from '../../shared/models/event-participant';

@Injectable()
export class EventParticipantsService {

  constructor() {
  }

  splitParticipantsByResponse(participants: EventParticipant[]): ParticipantsSplitted {
    const participantsSplitted: ParticipantsSplitted = new ParticipantsSplitted();

    participants.forEach((participant) => {
      if (participant.answer === EventParticipantAnswer.YES) {
        participantsSplitted.yes.push(participant.userRef);
      }
      if (participant.answer === EventParticipantAnswer.NO) {
        participantsSplitted.no.push(participant.userRef);
      }
      if (participant.answer === EventParticipantAnswer.MAYBE) {
        participantsSplitted.maybe.push(participant.userRef);
      }
      if (participant.answer === EventParticipantAnswer.UNANSWERED) {
        participantsSplitted.unanswered.push(participant.userRef);
      }
    });

    return participantsSplitted;
  }

  getAllInvited(participants: EventParticipant[]): number {
    return participants.length;
  }

  getParticipants(participants: EventParticipant[]): number {
    return participants.filter((participant) => {
      return  participant.answer === EventParticipantAnswer.YES;
    }).length;

  }
}
