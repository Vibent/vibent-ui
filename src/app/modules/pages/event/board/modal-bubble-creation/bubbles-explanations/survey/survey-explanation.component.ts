import { Component, OnInit } from '@angular/core';
import { BubbleCreationService } from '../../../../../../../core/services/bubbles-services/bubble-creation.service.';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { BubblesCreationsNotification } from '../../../../../../../core/services/bubbles-services/alerts/bubbles-creations-notification.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractExplanation } from '../abstract-bubble-explanation/abstract-explanation';
import { ModalManagerService } from '../../../../../../../core/services/modal-manager.service';

@Component({
  selector: 'survey-explanation',
  templateUrl: './survey-explanation.html',
  styleUrls: ['./survey-explanation.scss']
})
export class SurveyExplanationComponent extends AbstractExplanation implements OnInit {

  form: FormGroup;
  surveyTitle: FormControl;

  constructor(private bubbleCreationService: BubbleCreationService,
              protected eventUpdateService: EventUpdateService,
              protected modalManagerService: ModalManagerService,
              private bubblesCreationsSwalAlerts: BubblesCreationsNotification) {
    super(eventUpdateService, modalManagerService);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      surveyTitle: this.surveyTitle = new FormControl(),
    });
  }

  createBubble() {
    this.closeModal();
    this.bubbleCreationService.createSurveyBubble(this.eventRef, this.surveyTitle.value).subscribe(() => {
      this.onBubbleCreated();
      this.bubblesCreationsSwalAlerts.alertSurveyBubbleCreated();
    });
  }

}
