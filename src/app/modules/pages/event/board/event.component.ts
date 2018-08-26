import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { } from '@types/googlemaps';
import { EventParticipant } from '../../../../shared/models/event-participant';
import { Event } from '../../../../shared/models/event';
import { AlimentationBring, AlimentationBubble, AlimentationEntry, AlimType } from '../../../../shared/models/bubbles/AlimentationBubble';
import { FreeBubble } from '../../../../shared/models/bubbles/FreeBubble';
import { PlanningBubble, PlanningEntry } from '../../../../shared/models/bubbles/PlanningBubble';
import { SurveyAnswer, SurveyBubble, SurveyOption } from '../../../../shared/models/bubbles/SurveyBubble';
import { TravelBubble, TravelProposal, TravelRequest } from '../../../../shared/models/bubbles/TravelBubble';
import { BubbleType, IBubble } from '../../../../shared/models/bubbles/IBubble';
import { CheckboxAnswer, CheckboxBubble, CheckboxOption } from '../../../../shared/models/bubbles/CheckboxBubble';
import { EventAdminPanelService } from '../../../../core/services/event-admin-panel.service';
import { NotificationsService, NotificationType } from '../../../../core/services/notifications.service';

declare const $: any;

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit, OnDestroy {

  public participants: EventParticipant[];
  public event: Event;
  public bubbles: IBubble[];
  public bubbleToExpand: IBubble;
  public NotificationType = NotificationType;

  constructor(private route: ActivatedRoute, private eventAdminPanelService: EventAdminPanelService, public notificationService: NotificationsService) {
    this.event = this.route.snapshot.data['event'];
  }

  onBubbleSentForExpand(bubble: IBubble) {
    this.bubbleToExpand = bubble;
  }

  openNewBubbleModal() {
    $('#modalSelectBubbleType').modal('show');
  }

  ngOnInit() {
    this.eventAdminPanelService.toggleEventPanel({eventRef: this.event.ref, isOpen: true});
    this.eventAdminPanelService.eventUpdated.subscribe(result => {
      this.event = result;
    });

    this.participants = [
      new EventParticipant('Conor Ryan', '/assets/img/conor.jpg', 'Participates'),
      new EventParticipant('Francois Dupond', '/assets/img/francois.jpg', 'Participates'),
      new EventParticipant('Conor Ryan', '/assets/img/conor.jpg', 'Participates'),
      new EventParticipant('Francois Dupond', '/assets/img/francois.jpg', 'Don\'t know'),
      new EventParticipant('Conor Ryan', '/assets/img/conor.jpg', 'Don\'t know'),
      new EventParticipant('Francois Dupond', '/assets/img/francois.jpg', 'Doesn\'t come'),
      new EventParticipant('Conor Ryan', '/assets/img/conor.jpg', 'Doesn\'t come'),
      new EventParticipant('Francois Dupond', '/assets/img/francois.jpg', 'Doesn\'t come'),
      new EventParticipant('Conor Ryan', '/assets/img/conor.jpg', 'Doesn\'t come'),
      new EventParticipant('Francois Dupond', '/assets/img/francois.jpg', 'Doesn\'t come'),
    ];

    const b1: AlimentationBring = {id: 0, quantity: 5, userRef: 'ref'};
    const e0: AlimentationEntry = {id: 0, brings: [b1], currentBringing: 3, name: 'entry0', totalRequested: 5, type: AlimType.FOOD};
    const a: AlimentationBubble = {id: 0, eventRef: 'ref', creatorRef: 'ref', entries: [e0], type: BubbleType.ALIMENTATION};

    const a0: CheckboxAnswer = {id: 0, userRef: 'ref'};
    const o0: CheckboxOption = {id: 0, answers: [a0], content: 'content', userRef: 'ref'};
    const b: CheckboxBubble = {id: 1, creatorRef: 'ref', eventRef: 'ref', options: [o0], title: 'title', type: BubbleType.CHECKBOX};

    const f: FreeBubble = {id: 2, eventRef: 'ref', creatorRef: 'ref', content: 'content', title: 'title', type: BubbleType.FREE};

    const e1: PlanningEntry = {id: 0, content: 'content', end: 'end', start: 'start'};
    const p: PlanningBubble = {id: 3, creatorRef: 'ref', eventRef: 'ref', entries: [e1], title: 'title', type: BubbleType.PLANNING};

    const a1: SurveyAnswer = {id: 0, userRef: 'ref'};
    const o1: SurveyOption = {id: 0, answers: [a1], content: 'content', userRef: 'ref'};
    const s: SurveyBubble = {id: 4, eventRef: 'ref', creatorRef: 'ref', options: [o1], title: 'title', type: BubbleType.SURVEY};

    const p0: TravelProposal = {id: 0, capacity: 5, passByCities: 'cities', userRef: 'ref'};
    const r0: TravelRequest = {id: 0, capacity: 2, userRef: 'ref'};
    const t: TravelBubble = {id: 5, creatorRef: 'ref', eventRef: 'ref', proposals: [p0], requests: [r0], type: BubbleType.TRAVEL};

    this.bubbles = [a, b, f, p, s, t];

  }


  ngOnDestroy() {
    this.eventAdminPanelService.toggleEventPanel({groupRef: null, isOpen: false});
  }

}
