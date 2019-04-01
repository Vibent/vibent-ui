import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  AlgoliaPlace,
  TravelBubble,
  TravelDataModel,
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

declare const $: any;

@Component({
  selector: 'travel-request',
  templateUrl: './travel-request.html'
})
export class TravelRequestComponent implements OnInit {

  @Input()
  travelRequest: TravelRequest;
  @Input()
  travelBubble: TravelBubble;
  @Input()
  eventRef: string;
  @Input()
  bubbleId: number;
  @Output()
  updatedTravelBubble = new EventEmitter<TravelBubble>();
  requesterUser: Observable<User>;
  firstClick = true;
  place: AlgoliaPlace;
  travelDataModel: TravelDataModel = new TravelDataModel();
  isConnectedUserRequest = false;

  map: any;

  constructor(
    private userManagementService: UserManagementService,
    private algoliaPlacesService: AlgoliaPlacesService,
    private eventUpdateService: EventUpdateService,
    private httpService: HttpService,
    private travelHttpService: TravelHttpService,
    private travelDataService: TravelDataService,
    private messageService: MessageService) {

  }

  resizeMapbox() {
    if (this.firstClick && !$('#request-collapse-' + this.travelRequest.id).hasClass('in')) {
      this.firstClick = this.place ?
        !!this.constructMap(this.place) :
        !!this.algoliaPlacesService.getPlace(this.travelRequest.passByCities).subscribe((place) => {
          this.constructMap(place);
        });
    }
    // resize is needed in case proposal was collapsed when another opened
    else {
      setTimeout(() => {
        this.map.resize();
      });
    }
  }

  constructMap(place) {
    const latLng = Array.isArray(place._geoloc) ? {
      lng: place._geoloc[0].lng,
      lat: place._geoloc[0].lat
    } : {lng: place._geoloc.lng, lat: place._geoloc.lat};
    mapboxgl.accessToken = AppSettings.MAPBOX_API_KEY;
    this.map = new mapboxgl.Map({
      container: 'request-map-' + this.travelRequest.id,
      style: AppSettings.MAPBOX_STYLE,
      center: [latLng.lng, latLng.lat],
      zoom: 14
    });

    new mapboxgl.Marker().setLngLat([latLng.lng, latLng.lat]).addTo(this.map);

    setTimeout(() => {
      this.map.resize();
    });

    return true;
  }

  ngOnInit() {
    this.requesterUser = this.httpService.getUser(this.travelRequest.userRef);
    this.algoliaPlacesService.getPlace(this.travelRequest.passByCities).subscribe((place) => {
      this.place = place;
      this.populateTravelDataModel(place);
    });
  }

  populateTravelDataModel(place: AlgoliaPlace) {
    this.travelDataService.populateTravelDataModel(this.travelDataModel, place);
    this.isConnectedUserRequest = this.travelDataService.isCurrentUserEntity(this.travelRequest);
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
              this.eventUpdateService.updateEvent(this.eventRef);
              this.updatedTravelBubble.emit(<TravelBubble> updatedBubble);
            });
          }
        });
      }
      else {
        Swal({
          type: 'error',
          title: this.messageService.NO_SEAT_IN_CAR,
          text: this.messageService.NO_SEAT_IN_CAR_TEXT,
          showConfirmButton: true,
        });
      }
    }
    else {
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
          this.eventUpdateService.updateEvent(this.eventRef);
        });
      }
    });
  }
}
