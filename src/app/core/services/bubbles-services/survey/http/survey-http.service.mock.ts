import { Injectable } from '@angular/core';
import { MockData } from '../../../../../shared/global/mock-data';
import { of } from 'rxjs';
import { SurveyAnswer, SurveyBubble, SurveyOption } from '../../../../../shared/models/bubbles/SurveyBubble';

@Injectable()
export class SurveyHttpService {

  constructor(private mockData: MockData) { }

  getBubble(bubbleId: number) {
    return of(this.mockData.surveysBubbles.find(b => b.id == bubbleId))
  }

  updateBubble(bubble: SurveyBubble) {
    return of(bubble);
  }

  deleteBubble(bubble: SurveyBubble) {
    return of({});
  }

  createOption(option: SurveyOption) {
    return of(option);
  }

  deleteOption(option: SurveyOption) {
    return of({});
  }

  createAnswer(answer: SurveyAnswer) {
    return of(answer);
  }

  deleteAnswerOfOption(option: SurveyOption) {
    return of({});
  }

  deleteAnswer(answer: SurveyAnswer) {
    return of({});
  }

}
