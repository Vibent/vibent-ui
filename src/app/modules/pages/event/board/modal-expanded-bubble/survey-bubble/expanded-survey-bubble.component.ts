import { Component, Input } from '@angular/core';
import { SurveyBubble } from '../../../../../../shared/models/bubbles/SurveyBubble';

declare const $: any;

@Component({
  selector: 'app-expanded-survey-bubble',
  templateUrl: './expanded-survey-bubble.html'
})
export class ExpandedSurveyBubbleComponent {

  @Input()
  surveyBubble: SurveyBubble;
  @Input()
  eventRef: string;
  contentDisplayed = true;

  constructor() {
  }

  openBubbleSettings() {
    this.contentDisplayed = false;
  }

  onBackToContentSent() {
    this.contentDisplayed = true;
  }
}
