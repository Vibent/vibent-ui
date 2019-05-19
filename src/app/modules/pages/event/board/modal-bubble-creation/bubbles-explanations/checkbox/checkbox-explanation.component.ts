import { Component, Input, OnInit } from '@angular/core';
import { BubbleCreationService } from '../../../../../../../core/services/bubbles-services/bubble-creation.service.';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { BubblesCreationsNotification } from '../../../../../../../core/services/bubbles-services/alerts/bubbles-creations-notification.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractExplanation } from '../abstract-bubble-explanation/abstract-explanation';
import { ModalManagerService } from '../../../../../../../core/services/modal-manager.service';

@Component({
  selector: 'checkbox-explanation',
  templateUrl: './checkbox-explanation.html',
  styleUrls: ['./checkbox-explanation.scss']
})
export class CheckboxExplanationComponent extends AbstractExplanation implements OnInit {

  form: FormGroup;
  checkboxTitle: FormControl;

  constructor(private bubbleCreationService: BubbleCreationService,
              protected eventUpdateService: EventUpdateService,
              protected modalManagerService: ModalManagerService,
              private bubblesCreationsSwalAlerts: BubblesCreationsNotification) {
    super(eventUpdateService, modalManagerService);
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      checkboxTitle: this.checkboxTitle = new FormControl(),
    });
  }

  createBubble() {
    this.closeModal();
    this.bubbleCreationService.createCheckboxBubble(this.eventRef, this.checkboxTitle.value).subscribe(() => {
      this.onBubbleCreated();
      this.bubblesCreationsSwalAlerts.alertCheckboxBubbleCreated();
    });
  }

}
