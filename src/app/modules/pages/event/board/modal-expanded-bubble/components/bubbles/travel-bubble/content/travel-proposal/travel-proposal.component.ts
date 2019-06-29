import { Component, Input, OnInit } from '@angular/core';
import {
  TravelBubble,
  TravelProposal,
  TravelRequest
} from '../../../../../../../../../../shared/models/bubbles/TravelBubble';
import { AlgoliaPlacesService } from '../../../../../../../../../../core/services/algolia-places/algolia-places.service';
import { TravelHttpService } from '../../../../../../../../../../core/services/bubbles-services/travel/http/travel-http.service';
import { TravelDataService } from '../../../../../../../../../../core/services/bubbles-services/travel/data/travel-data.service';
import { UserManagementService } from '../../../../../../../../../../core/services/user-management.service';
import { User } from '../../../../../../../../../../shared/models/user';
import mapboxgl from 'mapbox-gl';
import Swal from 'sweetalert2';
import { EventUpdateService } from '../../../../../../../../../../core/services/bubbles-services/event-update.service';
import { AppSettings } from '../../../../../../../../../../shared/global/constants';
import { HttpService } from '../../../../../../../../../../core/http/http.service';
import { MessageService } from '../../../../../../../../../../core/services/i18n/message.service';
import { BubbleType } from '../../../../../../../../../../shared/models/bubbles/IBubble';
import { AbstractTravelEntity } from '../abstract/abstract-travel-entity.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'travel-proposal',
  templateUrl: './travel-proposal.html'
})
export class TravelProposalComponent extends AbstractTravelEntity implements OnInit {

  @Input()
  travelProposal: TravelProposal;
  user: User;
  proposerUser: Observable<User>;
  requesterUsers: Observable<User>[] = [];

  constructor(
    public httpService: HttpService,
    private userManagementService: UserManagementService,
    private algoliaPlacesService: AlgoliaPlacesService,
    private eventUpdateService: EventUpdateService,
    private travelHttpService: TravelHttpService,
    protected travelDataService: TravelDataService,
    private messageService: MessageService) {
    super(travelDataService);
    this.user = this.userManagementService.getMe();
  }

  ngOnInit() {
    this.requesterUsers[this.user.ref] = this.user;
    this.proposerUser = this.httpService.getUser(this.travelProposal.userRef);
    this.travelProposal.attachedRequests.forEach(req => {
      this.requesterUsers[req.userRef] = this.httpService.getUser(req.userRef);
    });
    this.algoliaPlacesService.getPlace(this.travelProposal.passByCities).subscribe((place) => {
      this.place = place;
      this.populateProposalTravelDataModel(place, this.travelProposal);
    });
  }

  takeASeat() {
    const userRequest = this.travelDataService.checkUserAlreadyHaveRequest(this.travelBubble);
    if (userRequest) {
      Swal({
        title: this.messageService.ATTACH_REQUEST,
        text: this.messageService.ATTACH_REQUEST_TEXT,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: this.messageService.CONFIRM_BUTTON_COLOR,
        reverseButtons: true,
        cancelButtonColor: this.messageService.CANCEL_BUTTON_COLOR,
        confirmButtonText: this.messageService.BOOK
      }).then((result) => {
        if (result.value) {
          this.travelHttpService.createRequestAndAttach({
            capacity: 1,
            proposalId: this.travelProposal.id
          }).subscribe((c) => {
            this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.TravelBubble});
          });
        }
      });
    }
    else {
      Swal({
        title: this.messageService.TAKE_A_SEAT,
        text: this.messageService.TAKE_A_SEAT_TEXT,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: this.messageService.CONFIRM_BUTTON_COLOR,
        reverseButtons: true,
        cancelButtonColor: this.messageService.CANCEL_BUTTON_COLOR,
        confirmButtonText: this.messageService.BOOK
      }).then((result) => {
        if (result.value) {
          this.travelHttpService.createRequestAndAttach({
            capacity: 1,
            proposalId: this.travelProposal.id
          }).subscribe((updatedBubble: TravelBubble) => {
            this.travelProposal.attachedRequests.push(
              updatedBubble.proposals
                .find(p => p.id === this.travelProposal.id).attachedRequests
                .find(r => r.userRef === this.user.ref));
            this.populateProposalTravelDataModel(this.place, this.travelProposal);
            this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.TravelBubble});
          });
        }
      });
    }
  }

  deleteRequest(request: TravelRequest) {
    Swal({
      title: this.messageService.DELETE_BOOKING,
      text: this.messageService.DELETE_BOOKING_TEXT,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: this.messageService.CONFIRM_BUTTON_COLOR,
      reverseButtons: true,
      cancelButtonColor: this.messageService.CANCEL_BUTTON_COLOR,
      confirmButtonText: this.messageService.DELETE
    }).then((result) => {
      if (result.value) {
        this.travelProposal.attachedRequests.splice(this.travelProposal.attachedRequests
          .findIndex(request => request.userRef === this.user.ref), 1);
        this.populateProposalTravelDataModel(this.place, this.travelProposal);
        this.travelHttpService.deleteRequest(request.id).subscribe(() => {
          this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.TravelBubble});
        });
      }
    });
  }

  deleteProposal() {
    Swal({
      title: this.messageService.DELETE_PROPOSAL,
      text: this.messageService.DELETE_PROPOSAL_TEXT,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: this.messageService.CONFIRM_BUTTON_COLOR,
      reverseButtons: true,
      cancelButtonColor: this.messageService.CANCEL_BUTTON_COLOR,
      confirmButtonText: this.messageService.DELETE
    }).then((result) => {
      if (result.value) {
        this.travelBubble.proposals.splice(this.travelBubble.proposals
          .findIndex(proposal => proposal.id === this.travelProposal.id), 1);
        this.updatedTravelBubble.emit(this.travelBubble);
        this.travelHttpService.deleteProposal(this.travelProposal.id).subscribe(() => {
          this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.TravelBubble});
        });
      }
    });
  }
}
