import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  AlimentationBring,
  AlimentationBubble,
  AlimentationEntry
} from '../../../shared/models/bubbles/AlimentationBubble';
import { AppSettings } from '../../../shared/global/constants';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AlimentationBubbleService {
  
  private API_URL = AppSettings.API_ENDPOINT;
  
  constructor(private http: HttpClient) {
  }

  updateBubble(bubble: AlimentationBubble) {
    const body = JSON.stringify(bubble);
    return this.http.patch(this.API_URL + '/bubble/alimentation', body, httpOptions);
  }
  
  deleteBubble(bubble: AlimentationBubble) {
    return this.http.delete(this.API_URL + '/bubble/alimentation/' + bubble.id, httpOptions);
  }
  
  createEntry(entry: any) {
    const body = JSON.stringify(entry);
    return this.http.post(this.API_URL + '/bubble/alimentation/entry', body, httpOptions);
  }
  
  deleteEntry(entry: AlimentationEntry) {
    return this.http.delete(this.API_URL + '/bubble/alimentation/entry/' + entry.id, httpOptions);
  }
  
  createBring(bring: AlimentationBring) {
    const body = JSON.stringify(bring);
    return this.http.post(this.API_URL + '/bubble/alimentation/bring', body, httpOptions);
  }
  
  deleteBring(bring: AlimentationBring) {
    return this.http.delete(this.API_URL + '/bubble/alimentation/bring/' + bring.id, httpOptions);
  }
  
}
