import { Injectable } from '@angular/core';
import { EventParticipant, EventParticipantAnswer, ParticipantsSplitted } from '../../shared/models/event-participant';
import { Subject } from 'rxjs';

@Injectable()
export class EventParticipantsService {

  participationUpdated$ = new Subject<EventParticipant>();

  constructor() {
  }

  onParticipationUpdate(eventParticipation: EventParticipant) {
    this.participationUpdated$.next(eventParticipation);
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
      return participant.answer === EventParticipantAnswer.YES;
    }).length;
  }
}
