import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SurveyBubble } from '../../../../../../../../../shared/models/bubbles/SurveyBubble';
import { SurveyOptionCreationComponent } from './survey-option-creation/survey-option-creation.component';

@Component({
  selector: 'survey-content',
  templateUrl: './survey-content.html'
})
export class SurveyContentComponent {

  @Input()
  surveyBubble: SurveyBubble;
  @Input()
  eventRef: string;
  @Output()
  updatedSurveyBubble = new EventEmitter<SurveyBubble>();
  @ViewChild(SurveyOptionCreationComponent)
  private surveyOptionCreationComponent: SurveyOptionCreationComponent;

  onSurveyOptionUpdate(answerCount: number) {
    this.surveyBubble.answerCount = answerCount;
  }

  addOptionCard() {
    this.surveyOptionCreationComponent.toggleCreationCard();
  }

  onBubbleUpdate(updatedBubble: SurveyBubble) {
    this.surveyBubble = updatedBubble;
    this.updatedSurveyBubble.emit(updatedBubble);
  }

}
