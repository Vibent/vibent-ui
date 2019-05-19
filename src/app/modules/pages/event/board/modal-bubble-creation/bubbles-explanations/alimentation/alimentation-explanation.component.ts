import { Component } from '@angular/core';
import { BubbleCreationService } from '../../../../../../../core/services/bubbles-services/bubble-creation.service.';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { BubblesCreationsNotification } from '../../../../../../../core/services/bubbles-services/alerts/bubbles-creations-notification.service';
import { AbstractExplanation } from '../abstract-bubble-explanation/abstract-explanation';
import { ModalManagerService } from '../../../../../../../core/services/modal-manager.service';

@Component({
  selector: 'alimentation-explanation',
  templateUrl: './alimentation-explanation.html',
  styleUrls: ['./alimentation-explanation.scss']
})
export class AlimentationExplanationComponent extends AbstractExplanation {

  constructor(private bubbleCreationService: BubbleCreationService,
              protected modalManagerService: ModalManagerService,
              protected eventUpdateService: EventUpdateService,
              private bubblesCreationsSwalAlerts: BubblesCreationsNotification) {
    super(eventUpdateService, modalManagerService);
  }

  createBubble() {
    this.closeModal();
    this.bubbleCreationService.createAlimentationBubble(this.eventRef).subscribe(() => {
      this.onBubbleCreated();
      this.bubblesCreationsSwalAlerts.alertAlimentationBubbleCreated();
    });
  }

}
