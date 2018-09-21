import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  AlimentationBring,
  AlimentationBubble,
  AlimentationEntry, BringsByUser
} from '../../../../../shared/models/bubbles/AlimentationBubble';
import { AppSettings } from '../../../../../shared/global/constants';
import { CheckboxAnswer, CheckboxBubble, CheckboxOption } from '../../../../../shared/models/bubbles/CheckboxBubble';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CheckboxHttpService {

  private API_URL = AppSettings.API_ENDPOINT;

  constructor(private http: HttpClient) {
  }

  getBubble(bubbleId: number) {
    return this.http.get(this.API_URL + '/bubble/checkbox/' + bubbleId, httpOptions);
  }

  updateBubble(bubble: CheckboxBubble) {
    const body = JSON.stringify(bubble);
    return this.http.patch(this.API_URL + '/bubble/checkbox', body, httpOptions);
  }

  deleteBubble(bubble: CheckboxBubble) {
    return this.http.delete(this.API_URL + '/bubble/checkbox/' + bubble.id, httpOptions);
  }

  createOption(option: CheckboxOption) {
    const body = JSON.stringify(option);
    return this.http.post(this.API_URL + '/bubble/checkbox/option', body, httpOptions);
  }

  deleteOption(option: CheckboxOption) {
    return this.http.delete(this.API_URL + '/bubble/checkbox/option/' + option.id, httpOptions);
  }

  createAnswer(answer: CheckboxAnswer) {
    const body = JSON.stringify(answer);
    return this.http.post(this.API_URL + '/bubble/checkbox/answer', body, httpOptions);
  }

  deleteAnswerOfOption(option: CheckboxOption) {
    return this.http.delete(this.API_URL + '/bubble/checkbox/option/' + option.id + '/answer', httpOptions);
  }

  deleteAnswer(answer: CheckboxAnswer) {
    return this.http.delete(this.API_URL + '/bubble/checkbox/answer/' + answer.id, httpOptions);
  }

}
