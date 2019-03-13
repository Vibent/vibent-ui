import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../../../shared/models/event';
import { BubbleType, IBubble } from '../../../../shared/models/bubbles/IBubble';
import { EventAdminPanelService } from '../../../../core/services/event-admin-panel.service';
import { EventUpdateService } from '../../../../core/services/bubbles-services/event-update.service';
import { BlacknoteService } from '../../../../core/services/blacknote/blacknote.service';
import { EventParticipant, EventParticipantAnswer } from '../../../../shared/models/event-participant';
import { ScreenService } from '../../../../core/services/screen.service';
import { Subscription } from 'rxjs';

declare const $: any;

@Component({
  selector: 'event',
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit, OnDestroy {

  event: Event;
  bubbles: IBubble[];
  bubbleToExpand: IBubble;
  participationRefs: EventParticipant[] = [];
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private eventAdminPanelService: EventAdminPanelService,
              private eventUpdateService: EventUpdateService,
              private blacknoteService: BlacknoteService,
              public screenSizesService: ScreenService) {
    this.event = this.route.snapshot.data['event'];
    this.blacknoteService.initConnectionForEventUpdate(this.event.ref);
  }

  /**
   * Outputs methods
   */
  onBubbleSentForExpand(bubble: IBubble) {
    this.bubbleToExpand = bubble;
  }

  openNewBubbleModal() {
    $('#modalSelectBubbleType').modal('show');
  }

  onParticipationUpdate(eventParticipation: EventParticipant) {
    this.event.participationRefs[this.event.participationRefs.findIndex(p => p.userRef === eventParticipation.userRef)] = eventParticipation;
    this.participationRefs = this.sortParticipations(this.event.participationRefs);
  }

  ngOnInit() {
    this.eventAdminPanelService.toggleEventPanel(this.event.ref);

    this.subscriptions.push(this.eventUpdateService.eventUpdated$.subscribe(event => {
      this.event = event;
      this.refreshBubblesAndParticipations();
    }));

    this.subscriptions.push(this.blacknoteService.eventUpdated$.subscribe(event => {
      this.event = event;
      this.refreshBubblesAndParticipations();
      this.updateExpandedBubble();
    }));

    this.refreshBubblesAndParticipations();
  }

  ngOnDestroy() {
    this.eventAdminPanelService.closeEventPanel();
    this.blacknoteService.disconnect();
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  /**
   * Concat bubbles to pass them in bubbles-preview controller
   * Refresh participations
   */
  refreshBubblesAndParticipations() {
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
    this.compareParticipations();
  }

  /**
   * Update the current opened bubble, in case blacknote pushed some changes
   */
  updateExpandedBubble() {
    if (this.bubbleToExpand) {
      const b = this.bubbles.find(bubble => bubble.id === this.bubbleToExpand.id && bubble.type === this.bubbleToExpand.type);
      if (b) {
        this.bubbleToExpand = b;
      }
    }
  }

  /**
   * Duplicate participations and check for changes on each event update
   * Allow to not push new input in participations component, to not reload participants avatars
   */
  compareParticipations() {
    if (JSON.stringify(this.event.participationRefs) !== JSON.stringify(this.participationRefs)) {
      this.participationRefs = this.sortParticipations(this.event.participationRefs);
    }
  }

  /**
   * Sort participations according to local variable sortedAnswers order.
   * @param participationRefs
   */
  sortParticipations(participationRefs: EventParticipant[]): EventParticipant[] {
    const participations = [];
    const sortedAnswers = [EventParticipantAnswer.YES, EventParticipantAnswer.MAYBE, EventParticipantAnswer.NO, EventParticipantAnswer.UNANSWERED];
    for (const answer of sortedAnswers) {
      participationRefs.forEach(participation => {
        if (participation.answer === answer) {
          participations.push(participation);
        }
      });
    }
    return participations;
  }

  openSettingsModal() {
    $('#modalEventSettings').modal('show');
  }

}
