import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../../../shared/models/event';
import { BubbleType, IBubble } from '../../../../shared/models/bubbles/IBubble';
import { EventAdminPanelService } from '../../../../core/services/event-admin-panel.service';
import { EventUpdateService } from '../../../../core/services/bubbles-services/event-update.service';
import { BlacknoteService } from '../../../../core/services/blacknote/blacknote.service';
import { ScreenService } from '../../../../core/services/screen.service';
import { Subscription } from 'rxjs';
import { ModalManagerService, VibentModals } from '../../../../core/services/modal-manager.service';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit, OnDestroy {

  event: Event;
  bubbles: IBubble[];
  bubbleToExpand: IBubble;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private eventAdminPanelService: EventAdminPanelService,
              private modalManagerService: ModalManagerService,
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
    this.modalManagerService.showModal(VibentModals.SELECT_BUBBLE_TYPE);
  }

  ngOnInit() {
    this.eventAdminPanelService.toggleEventPanel(this.event.ref);
    this.modalManagerService.initHandleBackBrowser(VibentModals.EVENT_SETTINGS, VibentModals.SELECT_BUBBLE_TYPE);
    this.subscriptions.push(this.eventUpdateService.eventUpdated$.subscribe(eventUpdate => {
      this.event = eventUpdate.event;
      if (eventUpdate.bubble) {
        this.updateBubbleOnEventUpdate(eventUpdate.bubble);
      } else {
        this.bubbles = this.concatEventBubbles();
      }
    }));

    this.subscriptions.push(this.blacknoteService.eventUpdated$.subscribe(event => {
      this.event = event;
      this.bubbles = this.concatEventBubbles();
      this.updateExpandedBubble();
    }));

    this.bubbles = this.concatEventBubbles();
  }

  ngOnDestroy() {
    this.eventAdminPanelService.closeEventPanel();
    this.blacknoteService.disconnect();
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  concatEventBubbles() {
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
    return bubbles;
  }

  updateBubbleOnEventUpdate(bubbleToUpdate: IBubble) {
    const bubbles = this.concatEventBubbles();

    const updatedBubble = bubbles.find((bubble) => {
      return bubble.id === bubbleToUpdate.id && bubble.type === bubbleToUpdate.type;
    });

    this.bubbles.forEach((bubble, index) => {
      if (bubble.id === bubbleToUpdate.id && bubble.type === bubbleToUpdate.type) {
        // necessary for some obscure reason, forcing change detection does not work either
        setTimeout(() => {
          this.bubbles[index] = updatedBubble;
        }, 0);
      }
    });
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

  openSettingsModal() {
    this.modalManagerService.showModal(VibentModals.EVENT_SETTINGS);
  }

}
