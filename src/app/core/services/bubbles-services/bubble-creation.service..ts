import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class BubbleCreationService {

  private API_URL = environment.apiEndpoint;

  constructor(private http: HttpClient) {
  }

  createAlimentationBubble(eventRef: string) {
    const body = JSON.stringify({eventRef: eventRef});
    return this.http.post(this.API_URL + '/bubble/alimentation', body, httpOptions);
  }

  createTravelBubble(eventRef: string) {
    const body = JSON.stringify({eventRef: eventRef});
    return this.http.post(this.API_URL + '/bubble/travel', body, httpOptions);
  }

  createCheckboxBubble(eventRef: string, title: string) {
    const body = JSON.stringify({eventRef: eventRef, title: title});
    return this.http.post(this.API_URL + '/bubble/checkbox', body, httpOptions);
  }

  createSurveyBubble(eventRef: string, title: string) {
    const body = JSON.stringify({eventRef: eventRef, title: title});
    return this.http.post(this.API_URL + '/bubble/survey', body, httpOptions);
  }

  createPlanningBubble(eventRef: string) {
    const body = JSON.stringify({eventRef: eventRef});
    return this.http.post(this.API_URL + '/bubble/planning', body, httpOptions);
  }

  createFreeBubble(eventRef: string, title: string, content: string) {
    const body = JSON.stringify({eventRef: eventRef, title: title, content: content });
    return this.http.post(this.API_URL + '/bubble/free', body, httpOptions);
  }

}
