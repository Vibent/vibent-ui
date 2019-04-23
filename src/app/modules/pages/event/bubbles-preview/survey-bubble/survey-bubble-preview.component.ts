import { Component, Input } from '@angular/core';
import { SurveyBubble } from '../../../../../shared/models/bubbles/SurveyBubble';
import { SurveyDataService } from '../../../../../core/services/bubbles-services/survey/data/survey-data.service';
import { ContributorTextType } from '../bubble-contributor-icons/bubble-contributor-icons.component';

@Component({
  selector: 'survey-bubble-preview',
  templateUrl: './survey-bubble-preview.html',
  styleUrls: ['../bubble-preview.scss', './survey-bubble-preview.scss']
})
export class SurveyBubblePreviewComponent {

  @Input()
  public bubble: SurveyBubble;

  ContributorTextType = ContributorTextType;

  constructor(public surveyDataService: SurveyDataService) {

  }
}
