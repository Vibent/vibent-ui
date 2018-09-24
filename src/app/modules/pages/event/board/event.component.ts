import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventParticipant } from '../../../../shared/models/event-participant';
import { Event } from '../../../../shared/models/event';
import { IBubble } from '../../../../shared/models/bubbles/IBubble';
import { EventAdminPanelService } from '../../../../core/services/event-admin-panel.service';
import { NotificationsService, NotificationType } from '../../../../core/services/notifications.service';
import { EventUpdateService } from '../../../../core/services/bubbles-services/event-update.service';

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

  constructor(private route: ActivatedRoute,
              private eventAdminPanelService: EventAdminPanelService,
              private eventUpdateService: EventUpdateService,
              public notificationService: NotificationsService) {
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
    this.eventAdminPanelService.eventUpdated.subscribe(event => {
      this.event = event;
    });

    this.eventUpdateService.eventUpdated.subscribe(event => {
      this.event = event;
      this.pushBubbles();
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


    this.pushBubbles();
  }

  ngOnDestroy() {
    this.eventAdminPanelService.toggleEventPanel({groupRef: null, isOpen: false});
  }

  pushBubbles() {
    let bubbles = [];
    console.log(this.event);
    bubbles = bubbles.concat(this.event.alimentationBubbles, this.event.travelBubbles, this.event.checkboxBubbles, this.event.planningBubbles, this.event.surveyBubbles, this.event.freeBubbles);
    this.bubbles = bubbles;
    console.log(this.bubbles);
  }

  pushBubbles2() {
/*

    const b1: AlimentationBring = {id: 0, quantity: 5, userRef: 'ref'};
    const e0: AlimentationEntry = {
      id: 0,
      brings: [b1],
      currentBringing: 3,
      name: 'entry0',
      totalRequested: 5,
      type: AlimType.FOOD
    };
    const ee1: AlimentationEntry = {
      id: 1,
      brings: null,
      currentBringing: 1,
      name: 'entry1',
      totalRequested: 2,
      type: AlimType.DRINK
    };
    const a: AlimentationBubble = {
      id: 0,
      eventRef: 'ref',
      creatorRef: 'ref',
      entries: [e0, ee1],
      type: BubbleType.AlimentationBubble
    };

    const a0: CheckboxAnswer = {id: 0, userRef: 'ref'};
    const o0: CheckboxOption = {id: 0, answers: [a0], content: 'content', userRef: 'ref'};
    const b: CheckboxBubble = {
      id: 1,
      creatorRef: 'ref',
      eventRef: 'ref',
      options: [o0],
      title: 'title',
      type: BubbleType.CheckboxBubble
    };

    const f: FreeBubble = {
      id: 2,
      eventRef: 'ref',
      creatorRef: 'ref',
      content: 'content',
      title: 'title',
      type: BubbleType.FreeBubble
    };

    const e1: PlanningEntry = {id: 0, content: 'content', end: 'end', start: 'start'};
    const p: PlanningBubble = {
      id: 3,
      creatorRef: 'ref',
      eventRef: 'ref',
      entries: [e1],
      title: 'title',
      type: BubbleType.PlanningBubble
    };

    const a1: SurveyAnswer = {id: 0, userRef: 'ref'};
    const o1: SurveyOption = {id: 0, answers: [a1], content: 'content', userRef: 'ref'};
    const s: SurveyBubble = {
      id: 4,
      eventRef: 'ref',
      creatorRef: 'ref',
      options: [o1],
      title: 'title',
      type: BubbleType.SurveyBubble
    };

    const p0: TravelProposal = {id: 0, capacity: 5, passByCities: 'cities', userRef: 'ref'};
    const r0: TravelRequest = {id: 0, capacity: 2, userRef: 'ref'};
    const t: TravelBubble = {
      id: 5,
      creatorRef: 'ref',
      eventRef: 'ref',
      proposals: [p0],
      requests: [r0],
      type: BubbleType.TravelBubble
    };

    this.bubbles = [a, b, f, p, s, t];*/
  }

}
