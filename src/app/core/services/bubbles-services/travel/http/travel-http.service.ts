import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../../../../shared/global/constants';
import { TravelBubble, TravelProposal, TravelRequest } from '../../../../../shared/models/bubbles/TravelBubble';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TravelHttpService {

  constructor(private http: HttpClient) {
  }

  getBubble(bubbleId: number) {
    return this.http.get(AppSettings.API_ENDPOINT + '/bubble/travel/' + bubbleId, httpOptions);
  }

  updateBubble(bubble: TravelBubble) {
    const body = JSON.stringify(bubble);
    return this.http.patch(AppSettings.API_ENDPOINT + '/bubble/travel', body, httpOptions);
  }

  deleteBubble(bubble: TravelBubble) {
    return this.http.delete(AppSettings.API_ENDPOINT + '/bubble/travel/' + bubble.id, httpOptions);
  }

  createProposal(proposal: TravelProposal) {
    const body = JSON.stringify(proposal);
    return this.http.post(AppSettings.API_ENDPOINT + '/bubble/travel/proposal', body, httpOptions);
  }

  deleteProposal(proposalId: number) {
    return this.http.delete(AppSettings.API_ENDPOINT + '/bubble/travel/proposal/' + proposalId, httpOptions);
  }

  createRequest(request: TravelRequest) {
    const body = JSON.stringify(request);
    return this.http.post(AppSettings.API_ENDPOINT + '/bubble/travel/request', body, httpOptions);
  }

  deleteRequest(requestId: number) {
    return this.http.delete(AppSettings.API_ENDPOINT + '/bubble/travel/request/' + requestId, httpOptions);
  }

  attachRequest(request: {proposalId: number, requestId: number}) {
    const body = JSON.stringify(request);
    return this.http.post(AppSettings.API_ENDPOINT + '/bubble/travel/attach', body, httpOptions);
  }

  createRequestAndAttach(request: TravelRequest) {
    const body = JSON.stringify(request);
    return this.http.post(AppSettings.API_ENDPOINT + '/bubble/travel/proposal/request', body, httpOptions);
  }

  detachRequest(sz: any) {
    const body = JSON.stringify(sz);
    return this.http.post(AppSettings.API_ENDPOINT + '/bubble/travel/detach', body, httpOptions);
  }
}
