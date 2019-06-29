import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  TravelBubble,
  TravelRequest
} from '../../../../../../../../../../shared/models/bubbles/TravelBubble';
import { AlgoliaPlacesService } from '../../../../../../../../../../core/services/algolia-places/algolia-places.service';
import { TravelHttpService } from '../../../../../../../../../../core/services/bubbles-services/travel/http/travel-http.service';
import { TravelDataService } from '../../../../../../../../../../core/services/bubbles-services/travel/data/travel-data.service';
import { UserManagementService } from '../../../../../../../../../../core/services/user-management.service';
import { User } from '../../../../../../../../../../shared/models/user';
import mapboxgl from 'mapbox-gl';
import { HttpService } from '../../../../../../../../../../core/http/http.service';
import { Observable } from 'rxjs';
import { AppSettings } from '../../../../../../../../../../shared/global/constants';
import Swal from 'sweetalert2';
import { EventUpdateService } from '../../../../../../../../../../core/services/bubbles-services/event-update.service';
import { MessageService } from '../../../../../../../../../../core/services/i18n/message.service';
import { BubbleType } from '../../../../../../../../../../shared/models/bubbles/IBubble';
import { AbstractTravelEntity } from '../abstract/abstract-travel-entity.component';

declare const $: any;

@Component({
  selector: 'travel-request',
  templateUrl: './travel-request.html'
})
export class TravelRequestComponent extends AbstractTravelEntity implements OnInit {

  @Input()
  travelRequest: TravelRequest;
  requesterUser: Observable<User>;

  constructor(
    private userManagementService: UserManagementService,
    private algoliaPlacesService: AlgoliaPlacesService,
    private eventUpdateService: EventUpdateService,
    private httpService: HttpService,
    private travelHttpService: TravelHttpService,
    protected travelDataService: TravelDataService,
    private messageService: MessageService) {
    super(travelDataService);
  }

  ngOnInit() {
    this.requesterUser = this.httpService.getUser(this.travelRequest.userRef);
    this.algoliaPlacesService.getPlace(this.travelRequest.passByCities).subscribe((place) => {
      this.place = place;
      this.populateRequestTravelDataModel(place, this.travelRequest);
    });
  }

  takeThem() {
    const proposal = this.travelDataService.checkUserAlreadyHaveProposal(this.travelBubble);
    if (proposal) {
      if (this.travelDataService.checkSeatsAvailableUserProposal(this.travelBubble)) {
        Swal({
          title: this.messageService.TAKE_THEM,
          text: this.messageService.TAKE_THEM_TEXT,
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: this.messageService.CONFIRM_BUTTON_COLOR,
          reverseButtons: true,
          cancelButtonColor: this.messageService.CANCEL_BUTTON_COLOR,
          confirmButtonText: this.messageService.YES
        }).then((result) => {
          if (result.value) {
            this.travelHttpService.attachRequest({
              proposalId: proposal.id,
              requestId: this.travelRequest.id
            }).subscribe((updatedBubble) => {
              this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.TravelBubble});
              this.updatedTravelBubble.emit(<TravelBubble>updatedBubble);
            });
          }
        });
      } else {
        Swal({
          type: 'error',
          title: this.messageService.NO_SEAT_IN_CAR,
          text: this.messageService.NO_SEAT_IN_CAR_TEXT,
          showConfirmButton: true,
        });
      }
    } else {
      Swal({
        type: 'error',
        title: this.messageService.NEED_CREATE_PROPOSAL,
        text: this.messageService.NEED_CREATE_PROPOSAL_TEXT,
        showConfirmButton: true,
      });
    }
  }

  deleteRequest() {
    Swal({
      title: this.messageService.DELETE_REQUEST,
      text: this.messageService.DELETE_REQUEST_TEXT,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: this.messageService.CONFIRM_BUTTON_COLOR,
      reverseButtons: true,
      cancelButtonColor: this.messageService.CANCEL_BUTTON_COLOR,
      confirmButtonText: this.messageService.DELETE
    }).then((result) => {
      if (result.value) {
        this.travelBubble.requests
          .splice(this.travelBubble.requests
            .findIndex(request => request.id === this.travelRequest.id), 1);
        this.updatedTravelBubble.emit(this.travelBubble);
        this.travelHttpService.deleteRequest(this.travelRequest.id).subscribe(() => {
          this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.TravelBubble});
        });
      }
    });
  }
}
