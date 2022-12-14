import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FreeBubble } from '../../../../../shared/models/bubbles/FreeBubble';
import { environment } from '../../../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class FreeHttpService {

  private API_URL = environment.apiEndpoint;

  constructor(private http: HttpClient) {
  }

  getBubble(bubbleId: number) {
    return this.http.get(this.API_URL + '/bubble/free/' + bubbleId, httpOptions);
  }

  updateBubble(bubble: FreeBubble) {
    const body = JSON.stringify(bubble);
    return this.http.patch(this.API_URL + '/bubble/free', body, httpOptions);
  }

  deleteBubble(bubble: FreeBubble) {
    return this.http.delete(this.API_URL + '/bubble/free/' + bubble.id, httpOptions);
  }


}
