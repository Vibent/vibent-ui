import { Component, OnInit } from '@angular/core';
import { BubbleCreationService } from '../../../../../../../core/services/bubbles-services/bubble-creation.service.';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { BubblesCreationsNotification } from '../../../../../../../core/services/bubbles-services/alerts/bubbles-creations-notification.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractExplanation } from '../abstract-bubble-explanation/abstract-explanation';
import { ModalManagerService } from '../../../../../../../core/services/modal-manager.service';

@Component({
  selector: 'free-explanation',
  templateUrl: './free-explanation.html',
  styleUrls: ['./free-explanation.scss']
})
export class FreeExplanationComponent extends AbstractExplanation implements OnInit {

  form: FormGroup;
  freeTitle: FormControl;
  freeContent: FormControl;

  constructor(private bubbleCreationService: BubbleCreationService,
              protected eventUpdateService: EventUpdateService,
              protected modalManagerService: ModalManagerService,
              private bubblesCreationsSwalAlerts: BubblesCreationsNotification) {
    super(eventUpdateService, modalManagerService);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      freeTitle: this.freeTitle = new FormControl(),
      freeContent: this.freeContent = new FormControl(),
    });
  }

  createBubble() {
    this.closeModal();
    this.bubbleCreationService.createFreeBubble(this.eventRef, this.freeTitle.value, this.freeContent.value).subscribe(() => {
      this.onBubbleCreated();
      this.bubblesCreationsSwalAlerts.alertFreeBubbleCreated();
    });
  }

}
