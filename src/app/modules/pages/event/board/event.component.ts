import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../../../shared/models/event';
import { BubbleType, IBubble } from '../../../../shared/models/bubbles/IBubble';
import { EventAdminPanelService } from '../../../../core/services/event-admin-panel.service';
import { EventUpdateService } from '../../../../core/services/bubbles-services/event-update.service';
import { BlacknoteService } from '../../../../core/services/blacknote/blacknote.service';
import { EventParticipant } from '../../../../shared/models/event-participant';

declare const $: any;

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit, OnDestroy {

  event: Event;
  bubbles: IBubble[];
  bubbleToExpand: IBubble;
  eventUpdateSubscribtion: EventEmitter<Event>;
  blackServiceEventUpdateSubscribtion: EventEmitter<Event>;

  constructor(private route: ActivatedRoute,
              private eventAdminPanelService: EventAdminPanelService,
              private eventUpdateService: EventUpdateService,
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
      this.updateExpandedBubble();
    });

    this.pushBubbles();
  }

  ngOnDestroy() {
    this.eventAdminPanelService.toggleEventPanel({groupRef: null, isOpen: false});
    this.blacknoteService.disconnect();
    this.eventUpdateSubscribtion.unsubscribe();
    this.blackServiceEventUpdateSubscribtion.unsubscribe();
  }

  onParticipationUpdate(eventParticipation: EventParticipant) {
    this.event.participationRefs[this.event.participationRefs.findIndex(p => p.userRef === eventParticipation.userRef)] = eventParticipation;
  }

  pushBubbles() {
    let bubbles: IBubble[] = [];
    this.event.alimentationBubbles.forEach(bubble => bubble.type = BubbleType.AlimentationBubble);
    this.event.travelBubbles.forEach(bubble => bubble.type = BubbleType.TravelBubble);
    this.event.checkboxBubbles.forEach(bubble => bubble.type = BubbleType.CheckboxBubble);
    this.event.planningBubbles.forEach(bubble => bubble.type = BubbleType.PlanningBubble);
    this.event.surveyBubbles.forEach(bubble => bubble.type = BubbleType.SurveyBubble);
    this.event.freeBubbles.forEach(bubble => bubble.type = BubbleType.FreeBubble);

    bubbles = bubbles.concat(
      this.event.alimentationBubbles,
      this.event.travelBubbles,
      this.event.checkboxBubbles,
      this.event.planningBubbles,
      this.event.surveyBubbles,
      this.event.freeBubbles);
    this.bubbles = bubbles;
    console.log(this.bubbles);
  }

  updateExpandedBubble() {
    if (this.bubbleToExpand) {
      const b = this.bubbles.find(bubble => bubble.id === this.bubbleToExpand.id);
      if (b) {
        this.bubbleToExpand = b;
      }
    }
  }

}
