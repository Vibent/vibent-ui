import { Component, Input } from '@angular/core';
import { SurveyBubble } from '../../../../../../../../shared/models/bubbles/SurveyBubble';
import { AbstractExpandedBubbleComponent } from '../../abstract/abstract-expanded-bubble.component';

declare const $: any;

@Component({
  selector: 'app-expanded-survey-bubble',
  templateUrl: './expanded-survey-bubble.html'
})
export class ExpandedSurveyBubbleComponent extends AbstractExpandedBubbleComponent {

  @Input()
  surveyBubble: SurveyBubble;
  @Input()
  eventRef: string;

  constructor() {
    super();
  }

}
