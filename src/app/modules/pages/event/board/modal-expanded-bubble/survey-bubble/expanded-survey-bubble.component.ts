import { Component, Input, OnInit } from '@angular/core';
import { SurveyBubble } from '../../../../../../shared/models/bubbles/SurveyBubble';

declare const $: any;

@Component({
  selector: 'app-expanded-survey-bubble',
  templateUrl: './expanded-survey-bubble.html'
})
export class ExpandedSurveyBubbleComponent implements OnInit {

  @Input()
  public surveyBubble: SurveyBubble;

  ngOnInit() {

  }
}
