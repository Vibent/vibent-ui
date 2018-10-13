import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SurveyBubble } from '../../../../../../../shared/models/bubbles/SurveyBubble';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { SurveyHttpService } from '../../../../../../../core/services/bubbles-services/survey/http/survey-http.service';

@Component({
  selector: 'survey-option-creation',
  templateUrl: './survey-option-creation.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyOptionCreationComponent implements OnInit {

  @Input()
  toggle: boolean;
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
  }

  ngOnInit() {
    this.form = new FormGroup({
      content: this.content = new FormControl()
    });
  }

  closeCreationCard() {
    this.toggle = false;
  }

  addOption() {
    this.surveyHttpService.createOption({
      bubbleId: this.bubbleId,
      content: this.content.value,
    }).subscribe((updatedBubble) => {
      this.updatedSurveyBubble.emit(<SurveyBubble>updatedBubble);
      this.eventUpdateService.updateEvent(this.eventRef);
      this.closeCreationCard();
    });
  }

}
