import { Injectable } from '@angular/core';
import { UserManagementService } from '../../../user-management.service';
import { User } from '../../../../../shared/models/user';
import {
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

  constructTravelDataModel(travelDataModel: TravelDataModel,
                           place: { locale_names: any, _geoloc: any, city: any, is_city: boolean },
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
    let c = place.locale_names.default[0];
    c = c.replace('<streetnum>', '');
    c = c.replace('<streetmod>', '');
    if (place.city) {
      c = c + ', ' + place.city.default[0];
    }

    return c;
  }
}
