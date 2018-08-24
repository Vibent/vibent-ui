import { Component, Input } from '@angular/core';
import { SurveyBubble } from '../../../../../shared/models/bubbles/SurveyBubble';

declare const $: any;

@Component({
  selector: 'app-survey-bubble-preview',
  templateUrl: './survey-bubble-preview.html'
})
export class SurveyBubblePreviewComponent {

  @Input()
  public surveyBubble: SurveyBubble;

}
