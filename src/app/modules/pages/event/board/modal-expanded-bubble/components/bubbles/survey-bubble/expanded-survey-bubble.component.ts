import { Component } from '@angular/core';
import { AbstractExpandedBubbleComponent } from '../../abstract/abstract-expanded-bubble.component';

declare const $: any;

@Component({
  selector: 'app-expanded-survey-bubble',
  templateUrl: './expanded-survey-bubble.html'
})
export class ExpandedSurveyBubbleComponent extends AbstractExpandedBubbleComponent {

  constructor() {
    super();
  }

}
