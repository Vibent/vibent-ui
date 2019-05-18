import { Component } from '@angular/core';
import { BubbleCreationService } from '../../../../../../../core/services/bubbles-services/bubble-creation.service.';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { BubblesCreationsNotification } from '../../../../../../../core/services/bubbles-services/alerts/bubbles-creations-notification.service';
import { AbstractExplanation } from '../abstract-bubble-explanation/abstract-explanation';

declare const $: any;

@Component({
  selector: 'alimentation-explanation',
  templateUrl: './alimentation-explanation.html',
  styleUrls: ['./alimentation-explanation.scss']
})
export class AlimentationExplanationComponent extends AbstractExplanation {

  constructor(private bubbleCreationService: BubbleCreationService,
              protected eventUpdateService: EventUpdateService,
              private bubblesCreationsSwalAlerts: BubblesCreationsNotification) {
    super(eventUpdateService);
  }

  createBubble() {
    $('#modalSelectBubbleType').modal('hide');
    this.bubbleCreationService.createAlimentationBubble(this.eventRef).subscribe(() => {
      this.onBubbleCreated();
      this.bubblesCreationsSwalAlerts.alertAlimentationBubbleCreated();
    });
  }

}
