import { Injectable } from '@angular/core';
import { UserManagementService } from '../../../user-management.service';
import { User } from '../../../../../shared/models/user';
import {
  AlgoliaPlace,
  TravelBubble,
  TravelDataModel,
  TravelEntity,
  TravelProposal
} from '../../../../../shared/models/bubbles/TravelBubble';

@Injectable()
export class TravelDataService {

  user: User;

  constructor(private userManagementService: UserManagementService) {
    this.user = this.userManagementService.getMe();
  }

  populateTravelDataModel(travelDataModel: TravelDataModel,
                          place: AlgoliaPlace,
                          travelProposal?: TravelProposal) {
    if (travelProposal) {
      travelDataModel.seatsLeft = this.getSeatsLeft(travelProposal);
      travelDataModel.availableSeatsList = this.getAvailableSeatsList(travelProposal);
      travelDataModel.canTakeSeat = this.getCanTakeSeat(travelProposal);
    }
    travelDataModel.headerLocation = this.getHeaderLocation(place);
    travelDataModel.completeAddress = this.getCompleteAddress(place);
  }

  isCurrentUserEntity(travelEntity: TravelEntity) {
    return travelEntity.userRef === this.user.ref;
  }

  checkUserAlreadyHaveProposal(travelBubble: TravelBubble) {
    return travelBubble.proposals.find(r => r.userRef === this.user.ref);
  }

  checkSeatsAvailableUserProposal(travelBubble: TravelBubble) {
    return travelBubble.proposals.find(r => r.userRef === this.user.ref && this.getSeatsLeft(r) > 0);
  }

  checkUserAlreadyHaveRequest(travelBubble: TravelBubble) {
    return travelBubble.requests.find(r => r.userRef === this.user.ref);
  }

  getSeatsLeft(travelProposal: TravelProposal) {
    return travelProposal.capacity - travelProposal.attachedRequests.length;
  }

  getAvailableSeatsList(travelProposal: TravelProposal) {
    return Array(travelProposal.capacity - travelProposal.attachedRequests.length);
  }

  getHeaderLocation(place) {
    return place.is_city ? place.locale_names.default[0] : place.city.default[0];
  }

  getCanTakeSeat(travelProposal: TravelProposal) {
    return !(travelProposal.attachedRequests.find(r => r.userRef === this.user.ref) || travelProposal.userRef === this.user.ref);
  }

  getCompleteAddress(place): string {

    if (place.is_city) {
      return place.city.default[0];
    }

    let c = place.locale_names.default[0];
    c = c.replace('<streetnum> ', '');
    c = c.replace('<streetmod> ', '');

    if (place.city) {
      c = c + ', ' + place.city.default[0];
    }

    return c;
  }

  public getUserActivity(bubble: TravelBubble): string[] {
    let userRefs = [];
    userRefs = userRefs.concat(bubble.proposals.map(p => p.userRef));
    userRefs = userRefs.concat(bubble.requests.map(p => p.userRef));
    return userRefs;
  }

  /**
   * Equivalent to numberOfRequestsFilled / numberOfRequestsTotal as a percentage
   */
  public getBubbleCompletion(bubble: TravelBubble): number {
    const totalTaken = this.getTakenSeats(bubble);
    const totalDetachedRequested = this.getDetachedRequestedSeats(bubble);

    const totalWantedSeats = totalDetachedRequested + totalTaken;

    if (totalWantedSeats === 0) {
      return 100;
    }
    return (totalTaken / totalWantedSeats) * 100;
  }

  public getAvailableSeats(bubble: TravelBubble): number {
    const totalProposed = this.getProposedSeats(bubble);
    const totalTaken = this.getTakenSeats(bubble);
    return totalProposed - totalTaken;
  }

  public getProposedSeats(bubble: TravelBubble): number {
    if (bubble.proposals.length === 0) {
      return 0;
    }
    return bubble.proposals.map(p => p.capacity).reduce((c, n) => c + n);
  }

  public getTakenSeats(bubble: TravelBubble): number {
    let amountTaken = 0;
    const proposalsAttachedRequests = bubble.proposals.map(p => p.attachedRequests);
    if (proposalsAttachedRequests.length !== 0) {
      const attachedRequests = proposalsAttachedRequests
        .reduce((c, n) => c.concat(n));
      if (attachedRequests.length !== 0) {
        amountTaken = attachedRequests
          .map(r => r.capacity)
          .reduce((c, n) => c + n);
      }
    }

    return amountTaken;
  }

  public getDetachedRequestedSeats(bubble: TravelBubble): number {
    let totalRequested = 0;
    const detachedRequests = bubble.requests;
    if (detachedRequests.length !== 0) {
      totalRequested = detachedRequests
        .map(r => r.capacity)
        .reduce((c, n) => c + n);
    }
    return totalRequested;
  }
}
