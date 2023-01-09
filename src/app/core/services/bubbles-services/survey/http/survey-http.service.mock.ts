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
    const bubble = this.mockData.surveysBubbles.find(b => b.id == option.bubbleId);
    bubble.options.push({
      answers: [],
      userRef: this.mockData.userRef,
      id: Math.floor(Math.random() * 10000),
      ...option
    });
    const surveys = this.mockData.events[0].surveyBubbles.filter(b => b.id == option.bubbleId);
    surveys.push(bubble)
    this.mockData.surveysBubbles = surveys;
    return of(bubble);
  }

  deleteOption(option: SurveyOption) {
    const bubble = this.mockData.surveysBubbles.find(b => b.id == option.bubbleId);
    bubble.options.filter(s => s.id !== option.id);
    return of(bubble);
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
