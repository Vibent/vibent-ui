import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventParticipant } from '../../../../shared/models/event-participant';
import { Event } from '../../../../shared/models/event';
import { IBubble } from '../../../../shared/models/bubbles/IBubble';
import { EventAdminPanelService } from '../../../../core/services/event-admin-panel.service';
import { NotificationsService, NotificationType } from '../../../../core/services/notifications.service';
import { EventUpdateService } from '../../../../core/services/bubbles-services/event-update.service';
import { BlacknoteService } from '../../../../core/services/blacknote/blacknote.service';

declare const $: any;

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit, OnDestroy {

  participants: EventParticipant[];
  event: Event;
  bubbles: IBubble[];
  bubbleToExpand: IBubble;
  NotificationType = NotificationType;
  eventUpdateSubscribtion: EventEmitter<Event>;
  blackServiceEventUpdateSubscribtion: EventEmitter<Event>;

  constructor(private route: ActivatedRoute,
              private eventAdminPanelService: EventAdminPanelService,
              private eventUpdateService: EventUpdateService,
              public notificationService: NotificationsService,
              private blacknoteService: BlacknoteService) {

    this.event = this.route.snapshot.data['event'];
    this.blacknoteService.initConnectionForEventUpdate(this.event.ref);
  }

  onBubbleSentForExpand(bubble: IBubble) {
    this.bubbleToExpand = bubble;
  }

  openNewBubbleModal() {
    $('#modalSelectBubbleType').modal('show');
  }

  ngOnInit() {
    this.eventAdminPanelService.toggleEventPanel({eventRef: this.event.ref, isOpen: true});

    this.eventUpdateSubscribtion = this.eventUpdateService.eventUpdated.subscribe(event => {
      this.event = event;
      this.pushBubbles();
    });

    this.blackServiceEventUpdateSubscribtion = this.blacknoteService.eventUpdated.subscribe(event => {
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
    this.blacknoteService.disconnect();
    this.eventUpdateSubscribtion.unsubscribe();
    this.blackServiceEventUpdateSubscribtion.unsubscribe();
  }

  pushBubbles() {
    let bubbles = [];
    bubbles = bubbles.concat(this.event.alimentationBubbles, this.event.travelBubbles, this.event.checkboxBubbles, this.event.planningBubbles, this.event.surveyBubbles, this.event.freeBubbles);
    this.bubbles = bubbles;
  }

}
