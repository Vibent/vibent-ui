import { EventParticipantsService } from './event-participants.service';
import { EventParticipant, EventParticipantAnswer, ParticipantsSplitted } from '../../shared/models/event-participant';

describe('Event Participation Service', () => {

  let eventParticipationService: EventParticipantsService;
  let eventParticipants: EventParticipant[];

  beforeEach(() => {
    eventParticipationService = new EventParticipantsService();
    eventParticipants = [{
      userRef: 'dummy',
      answer: EventParticipantAnswer.YES
    },
      {
        userRef: 'dummy',
        answer: EventParticipantAnswer.YES
      },
      {
        userRef: 'dummy',
        answer: EventParticipantAnswer.YES
      },
      {
        userRef: 'dummy',
        answer: EventParticipantAnswer.MAYBE
      },
      {
        userRef: 'dummy',
        answer: EventParticipantAnswer.MAYBE
      },
      {
        userRef: 'dummy',
        answer: EventParticipantAnswer.NO
      },
      {
        userRef: 'dummy',
        answer: EventParticipantAnswer.NO
      },
      {
        userRef: 'dummy',
        answer: EventParticipantAnswer.UNANSWERED
      }
    ];
  });

  it('check all getAllInvited', () => {
    expect(eventParticipationService.getAllInvited(eventParticipants)).toBe(8);
  });

  it('check all getParticipants', () => {
    expect(eventParticipationService.getParticipants(eventParticipants)).toBe(3);
  });

  it('check all ParticipantsSplitted', () => {
    const split: ParticipantsSplitted = eventParticipationService.splitParticipantsByResponse(eventParticipants);
    expect(split.yes.length).toBe(3);
    expect(split.no.length).toBe(2);
    expect(split.maybe.length).toBe(2);
    expect(split.unanswered.length).toBe(1);
  });
});