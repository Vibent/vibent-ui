import { EventEmitter, Input, Output } from '@angular/core';
import {
  AlgoliaPlace,
  TravelBubble, TravelDataModel, TravelEntity, TravelProposal, TravelRequest
} from '../../../../../../../../../../shared/models/bubbles/TravelBubble';
import { TravelDataService } from '../../../../../../../../../../core/services/bubbles-services/travel/data/travel-data.service';
import { AppSettings } from '../../../../../../../../../../shared/global/constants';
import mapboxgl from 'mapbox-gl';

export abstract class AbstractTravelEntity {

  @Input()
  travelBubble: TravelBubble;
  @Input()
  eventRef: string;
  @Input()
  bubbleId: number;
  @Output()
  updatedTravelBubble = new EventEmitter<TravelBubble>();

  travelDataModel: TravelDataModel = new TravelDataModel();
  firstClick = true;
  place: AlgoliaPlace;
  map: any;
  dataModelLoaded = false;
  isConnectedUserRequest = false;

  protected constructor(protected travelDataService: TravelDataService) {

  }

  populateRequestTravelDataModel(place, travelRequest: TravelRequest) {
    this.travelDataService.populateRequestTravelDataModel(this.travelDataModel, place);
    this.isConnectedUserRequest = this.travelDataService.isCurrentUserEntity(travelRequest);
    this.dataModelLoaded = true;
  }

  populateProposalTravelDataModel(place, travelProposal: TravelProposal) {
    this.travelDataService.populateProposalTravelDataModel(this.travelDataModel, place, travelProposal);
    this.isConnectedUserRequest = this.travelDataService.isCurrentUserEntity(travelProposal);
    this.dataModelLoaded = true;
  }

  resizeRequestMapbox(travelRequest: TravelRequest) {
    if (this.firstClick) {
      this.constructRequestMap(this.place, travelRequest);
      this.firstClick = false;
    }
  }

  resizeProposalMapbox(travelProposal: TravelProposal) {
    if (this.firstClick) {
      this.constructProposalMap(this.place, travelProposal);
      this.firstClick = false;
    }
  }

  constructProposalMap(place, travelProposal: TravelProposal) {
     return this.constructMap(place, 'proposal-map-' + travelProposal.id);
  }

  constructRequestMap(place, travelRequest: TravelRequest) {
    return this.constructMap(place, 'request-map-' + travelRequest.id);
  }

  private constructMap(place, container: string) {
    const latLng = Array.isArray(place._geoloc) ? {
      lng: place._geoloc[0].lng,
      lat: place._geoloc[0].lat
    } : {lng: place._geoloc.lng, lat: place._geoloc.lat};
    mapboxgl.accessToken = AppSettings.MAPBOX_API_KEY;
    this.map = new mapboxgl.Map({
      container: container,
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

}
