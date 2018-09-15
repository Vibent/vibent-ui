import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../../shared/global/constants';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class BubbleCreationService {
  
  private API_URL = AppSettings.API_ENDPOINT;
  
  constructor(private http: HttpClient) {
  }
  
  createAlimentationBubble(eventRef: string) {
    const body = JSON.stringify({"eventRef": eventRef});
    return this.http.post(this.API_URL + '/bubble/alimentation', body);
  }
  
  createTravelBubble(eventRef: string) {
    const body = JSON.stringify({"eventRef": eventRef});
    return this.http.post(this.API_URL + '/bubble/travel', body);
  }
  
  createCheckboxBubble(eventRef: string) {
    const body = JSON.stringify({"eventRef": eventRef});
    return this.http.post(this.API_URL + '/bubble/checkbox', body);
  }
  
  createSurveyBubble(eventRef: string) {
    const body = JSON.stringify({"eventRef": eventRef});
    return this.http.post(this.API_URL + '/bubble/survey', body);
  }
  
  createPlanningBubble(eventRef: string) {
    const body = JSON.stringify({"eventRef": eventRef});
    return this.http.post(this.API_URL + '/bubble/planning', body);
  }
  
  createFreeBubble(eventRef: string) {
    const body = JSON.stringify({"eventRef": eventRef});
    return this.http.post(this.API_URL + '/bubble/free', body);
  }
  
}
