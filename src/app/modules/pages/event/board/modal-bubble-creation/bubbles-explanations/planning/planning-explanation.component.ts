import { Component, OnInit } from '@angular/core';
import { BubbleCreationService } from '../../../../../../../core/services/bubbles-services/bubble-creation.service.';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { BubblesCreationsNotification } from '../../../../../../../core/services/bubbles-services/alerts/bubbles-creations-notification.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractExplanation } from '../abstract-bubble-explanation/abstract-explanation';
import { ModalManagerService, VibentModals } from '../../../../../../../core/services/modal-manager.service';

@Component({
  selector: 'planning-explanation',
  templateUrl: './planning-explanation.html',
  styleUrls: ['./planning-explanation.scss']
})
export class PlanningExplanationComponent extends AbstractExplanation implements OnInit {

  form: FormGroup;
  planningTitle: FormControl;

  constructor(private bubbleCreationService: BubbleCreationService,
              protected modalManagerService: ModalManagerService,
              protected eventUpdateService: EventUpdateService,
              private bubblesCreationsSwalAlerts: BubblesCreationsNotification) {
    super(eventUpdateService, modalManagerService);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      planningTitle: this.planningTitle = new FormControl(),
    });
  }

  createBubble() {
    this.closeModal();
    this.modalManagerService.hideModal(VibentModals.SELECT_BUBBLE_TYPE)
    this.bubbleCreationService.createPlanningBubble(this.eventRef, this.planningTitle.value).subscribe(() => {
      this.onBubbleCreated();
      this.bubblesCreationsSwalAlerts.alertPlanningBubbleCreated();
    });
  }

}
