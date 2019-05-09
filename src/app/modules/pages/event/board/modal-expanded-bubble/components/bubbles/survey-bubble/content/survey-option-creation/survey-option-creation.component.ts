import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SurveyBubble } from '../../../../../../../../../../shared/models/bubbles/SurveyBubble';
import { EventUpdateService } from '../../../../../../../../../../core/services/bubbles-services/event-update.service';
import { SurveyHttpService } from '../../../../../../../../../../core/services/bubbles-services/survey/http/survey-http.service';
import { AbstractBubbleEntityCreationComponent } from '../../../../abstract/abstract-bubble-entity-creation.component';
import { BubbleType } from '../../../../../../../../../../shared/models/bubbles/IBubble';

@Component({
  selector: 'survey-option-creation',
  templateUrl: './survey-option-creation.html'
})
export class SurveyOptionCreationComponent extends AbstractBubbleEntityCreationComponent implements OnInit {

  @Input()
  bubbleId: number;
  @Input()
  eventRef: string;
  @Output()
  updatedSurveyBubble = new EventEmitter<SurveyBubble>();

  form: FormGroup;
  content: FormControl;

  constructor(private surveyHttpService: SurveyHttpService,
              private eventUpdateService: EventUpdateService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      content: this.content = new FormControl()
    });
  }

  addOption() {
    this.surveyHttpService.createOption({
      bubbleId: this.bubbleId,
      content: this.content.value,
    }).subscribe((updatedBubble) => {
      this.updatedSurveyBubble.emit(<SurveyBubble>updatedBubble);
      this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.SurveyBubble});
      this.toggleCreationCard();
    });
  }

}
