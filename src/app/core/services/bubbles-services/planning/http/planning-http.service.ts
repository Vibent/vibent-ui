import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlanningBubble, PlanningEntry } from '../../../../../shared/models/bubbles/PlanningBubble';
import { environment } from '../../../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PlanningHttpService {

  private API_URL = environment.apiEndpoint;

  constructor(private http: HttpClient) {
  }

  getBubble(bubbleId: number) {
    return this.http.get(this.API_URL + '/bubble/planning/' + bubbleId, httpOptions);
  }

  deleteBubble(bubble: PlanningBubble) {
    return this.http.delete(this.API_URL + '/bubble/planning/' + bubble.id, httpOptions);
  }

  createEntry(option: PlanningEntry) {
    const body = JSON.stringify(option);
    return this.http.post(this.API_URL + '/bubble/planning/entry', body, httpOptions);
  }

  deleteEntry(entry: PlanningEntry) {
    return this.http.delete(this.API_URL + '/bubble/planning/entry/' + entry.id, httpOptions);
  }

}
