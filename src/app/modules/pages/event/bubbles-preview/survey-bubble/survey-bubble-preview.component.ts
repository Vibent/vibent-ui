import { Component, Input } from '@angular/core';
import { SurveyBubble } from '../../../../../shared/models/bubbles/SurveyBubble';

@Component({
  selector: 'app-survey-bubble-preview',
  templateUrl: './survey-bubble-preview.html',
  styleUrls: ['../bubble-preview.scss']
})
export class SurveyBubblePreviewComponent {

  @Input()
  public surveyBubble: SurveyBubble;

}
