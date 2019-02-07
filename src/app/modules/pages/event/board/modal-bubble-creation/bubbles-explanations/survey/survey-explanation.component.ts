import { Component, Input, OnInit } from '@angular/core';
import { BubbleCreationService } from '../../../../../../../core/services/bubbles-services/bubble-creation.service.';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { BubblesCreationsSwalAlerts } from '../../../../../../../core/services/bubbles-services/alerts/bubbles-creations-swal-alerts';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractExplanation } from '../abstract-bubble-explanation/abstract-explanation';

declare const $: any;

@Component({
  selector: 'survey-explanation',
  templateUrl: './survey-explanation.html'
})
export class SurveyExplanationComponent extends AbstractExplanation implements OnInit {

  form: FormGroup;
  surveyTitle: FormControl;

  constructor(private bubbleCreationService: BubbleCreationService,
              protected eventUpdateService: EventUpdateService,
              private bubblesCreationsSwalAlerts: BubblesCreationsSwalAlerts) {
    super(eventUpdateService);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      surveyTitle: this.surveyTitle = new FormControl(),
    });
  }

  createBubble() {
    $('#modalSelectBubbleType').modal('hide');
    this.bubbleCreationService.createSurveyBubble(this.eventRef, this.surveyTitle.value).subscribe(() => {
      this.onBubbleCreated();
      this.bubblesCreationsSwalAlerts.alertSurveyBubbleCreated();
    });
  }

}
