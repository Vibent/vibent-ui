import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SurveyBubble } from '../../../../../../shared/models/bubbles/SurveyBubble';

declare const $: any;

@Component({
  selector: 'app-expanded-survey-bubble',
  templateUrl: './expanded-survey-bubble.html'
})
export class ExpandedSurveyBubbleComponent implements OnInit {

  @Input()
  surveyBubble: SurveyBubble;
  @Input()
  eventRef: string;
  toggleOptionCreation = false;

  ngOnInit() {
    console.log('init');
  }

  onSurveyOptionUpdate(answerCount: number) {
    console.log('onSurveyUpdate');
    this.surveyBubble.answerCount = answerCount;
    console.log(this.surveyBubble.answerCount);
  }

  addOptionCard() {
    this.toggleOptionCreation = !this.toggleOptionCreation;
  }

  onBubbleUpdate(updatedBubble: SurveyBubble) {
    console.log('onBubbleUpdate');
    this.surveyBubble = updatedBubble;
  }

}
