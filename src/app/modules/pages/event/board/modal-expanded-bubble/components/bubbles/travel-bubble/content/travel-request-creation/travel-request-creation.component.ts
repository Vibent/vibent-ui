import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TravelHttpService } from '../../../../../../../../../../core/services/bubbles-services/travel/http/travel-http.service';
import { TravelBubble } from '../../../../../../../../../../shared/models/bubbles/TravelBubble';
import { AlgoliaPlacesService } from '../../../../../../../../../../core/services/algolia-places/algolia-places.service';
import places from 'places.js';
import { EventUpdateService } from '../../../../../../../../../../core/services/bubbles-services/event-update.service';
import Swal from 'sweetalert2';
import { Messages } from '../../../../../../../../../../shared/messages-codes/messages';
import { AbstractBubbleEntityCreationComponent } from '../../../../abstract/abstract-bubble-entity-creation.component';
import { AppSettings } from '../../../../../../../../../../shared/global/constants';

@Component({
  selector: 'travel-request-creation',
  templateUrl: './travel-request-creation.html'
})
export class TravelRequestCreationComponent extends AbstractBubbleEntityCreationComponent implements OnInit {

  @Input()
  travelBubble: TravelBubble;
  @Input()
  eventRef: string;
  @Output()
  updatedTravelBubble = new EventEmitter<TravelBubble>();
  placesAutocomplete: any;
  inputPlace: any;

  constructor(private algoliaPlacesService: AlgoliaPlacesService,
              private eventUpdateService: EventUpdateService,
              private travelHttpService: TravelHttpService) {
    super();
  }

  ngOnInit() {
    this.placesAutocomplete = places({
      appId: AppSettings.ALGOLIA_APP_ID,
      apiKey: AppSettings.ALGOLIA_API_KEY,
      container: document.querySelector('#address-input-request')
    });

    this.placesAutocomplete.on('change', e => this.inputPlace = e);
  }

  createRequest() {
    if (!this.inputPlace) {
      Swal({
        type: 'error',
        title:  Messages.OOPS,
        text: Messages.MUST_SELECT_REQUEST_LOCATION,
      });
    }
    this.travelHttpService.createRequest({
      bubbleId: this.travelBubble.id,
      passByCities: this.inputPlace.suggestion.hit.objectID,
      capacity: 1
    }).subscribe((updatedBubble) => {
        this.updatedTravelBubble.emit(<TravelBubble> updatedBubble);
        this.eventUpdateService.updateEvent(this.eventRef);
        this.toggleCreationCard();
      },
      (e) => {
        Swal({
          type: 'error',
          title:  Messages.OOPS,
          text: e.error.error.message,
        });
      });
  }

}
