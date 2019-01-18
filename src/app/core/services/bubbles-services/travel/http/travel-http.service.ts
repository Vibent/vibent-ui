import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TravelBubble, TravelProposal, TravelRequest } from '../../../../../shared/models/bubbles/TravelBubble';
import { environment } from '../../../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TravelHttpService {

  constructor(private http: HttpClient) {
  }

  getBubble(bubbleId: number) {
    return this.http.get(environment.apiEndpoint + '/bubble/travel/' + bubbleId, httpOptions);
  }

  updateBubble(bubble: TravelBubble) {
    const body = JSON.stringify(bubble);
    return this.http.patch(environment.apiEndpoint + '/bubble/travel', body, httpOptions);
  }

  deleteBubble(bubble: TravelBubble) {
    return this.http.delete(environment.apiEndpoint + '/bubble/travel/' + bubble.id, httpOptions);
  }

  createProposal(proposal: TravelProposal) {
    const body = JSON.stringify(proposal);
    return this.http.post(environment.apiEndpoint + '/bubble/travel/proposal', body, httpOptions);
  }

  deleteProposal(proposalId: number) {
    return this.http.delete(environment.apiEndpoint + '/bubble/travel/proposal/' + proposalId, httpOptions);
  }

  createRequest(request: TravelRequest) {
    const body = JSON.stringify(request);
    return this.http.post(environment.apiEndpoint + '/bubble/travel/request', body, httpOptions);
  }

  deleteRequest(requestId: number) {
    return this.http.delete(environment.apiEndpoint + '/bubble/travel/request/' + requestId, httpOptions);
  }

  attachRequest(request: {proposalId: number, requestId: number}) {
    const body = JSON.stringify(request);
    return this.http.post(environment.apiEndpoint + '/bubble/travel/attach', body, httpOptions);
  }

  createRequestAndAttach(request: TravelRequest) {
    const body = JSON.stringify(request);
    return this.http.post(environment.apiEndpoint + '/bubble/travel/proposal/request', body, httpOptions);
  }

  detachRequest(sz: any) {
    const body = JSON.stringify(sz);
    return this.http.post(environment.apiEndpoint + '/bubble/travel/detach', body, httpOptions);
  }
}
