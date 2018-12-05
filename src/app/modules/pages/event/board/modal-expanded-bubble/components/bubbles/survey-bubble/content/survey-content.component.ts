import { Component, Input } from '@angular/core';
import { SurveyBubble } from '../../../../../../../../../shared/models/bubbles/SurveyBubble';

declare const $: any;

@Component({
  selector: 'survey-content',
  templateUrl: './survey-content.html'
})
export class SurveyContentComponent {

  @Input()
  surveyBubble: SurveyBubble;
  @Input()
  eventRef: string;
  toggleOptionCreation = false;

  onSurveyOptionUpdate(answerCount: number) {
    this.surveyBubble.answerCount = answerCount;
  }

  addOptionCard() {
    this.toggleOptionCreation = !this.toggleOptionCreation;
  }

  onBubbleUpdate(updatedBubble: SurveyBubble) {
    this.surveyBubble = updatedBubble;
  }

}
