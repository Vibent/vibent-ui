import { Component } from '@angular/core';
import { BubbleCreationService } from '../../../../../../../core/services/bubbles-services/bubble-creation.service.';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { BubblesCreationsSwalAlerts } from '../../../../../../../core/services/bubbles-services/alerts/bubbles-creations-swal-alerts';
import { AbstractExplanation } from '../abstract-bubble-explanation/abstract-explanation';

declare const $: any;

@Component({
  selector: 'travel-explanation',
  templateUrl: './travel-explanation.html'
})
export class TravelExplanationComponent extends AbstractExplanation {

  constructor(private bubbleCreationService: BubbleCreationService,
              protected eventUpdateService: EventUpdateService,
              private bubblesCreationsSwalAlerts: BubblesCreationsSwalAlerts) {
    super(eventUpdateService);
  }

  createBubble() {
    $('#modalSelectBubbleType').modal('hide');
    this.bubbleCreationService.createTravelBubble(this.eventRef).subscribe(() => {
      this.onBubbleCreated();
      this.bubblesCreationsSwalAlerts.alertTravelBubbleCreated();
    });
  }

}
