import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../../../../shared/global/constants';
import { SurveyAnswer, SurveyBubble, SurveyOption } from '../../../../../shared/models/bubbles/SurveyBubble';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class SurveyHttpService {

  private API_URL = AppSettings.API_ENDPOINT;

  constructor(private http: HttpClient) {
  }

  getBubble(bubbleId: number) {
    return this.http.get(this.API_URL + '/bubble/survey/' + bubbleId, httpOptions);
  }

  updateBubble(bubble: SurveyBubble) {
    const body = JSON.stringify(bubble);
    return this.http.patch(this.API_URL + '/bubble/survey', body, httpOptions);
  }

  deleteBubble(bubble: SurveyBubble) {
    return this.http.delete(this.API_URL + '/bubble/survey/' + bubble.id, httpOptions);
  }

  createOption(option: SurveyOption) {
    const body = JSON.stringify(option);
    return this.http.post(this.API_URL + '/bubble/survey/option', body, httpOptions);
  }

  deleteOption(option: SurveyOption) {
    return this.http.delete(this.API_URL + '/bubble/survey/option/' + option.id, httpOptions);
  }

  createAnswer(answer: SurveyAnswer) {
    const body = JSON.stringify(answer);
    return this.http.post(this.API_URL + '/bubble/survey/answer', body, httpOptions);
  }

  deleteAnswerOfOption(option: SurveyOption) {
    return this.http.delete(this.API_URL + '/bubble/survey/option/' + option.id + '/answer', httpOptions);
  }

  deleteAnswer(answer: SurveyAnswer) {
    return this.http.delete(this.API_URL + '/bubble/survey/answer/' + answer.id, httpOptions);
  }

}
