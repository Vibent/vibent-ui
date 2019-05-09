import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TravelHttpService } from '../../../../../../../../../../core/services/bubbles-services/travel/http/travel-http.service';
import { TravelBubble } from '../../../../../../../../../../shared/models/bubbles/TravelBubble';
import { AlgoliaPlacesService } from '../../../../../../../../../../core/services/algolia-places/algolia-places.service';
import places from 'places.js';
import { EventUpdateService } from '../../../../../../../../../../core/services/bubbles-services/event-update.service';
import Swal from 'sweetalert2';
import { AbstractBubbleEntityCreationComponent } from '../../../../abstract/abstract-bubble-entity-creation.component';
import { AppSettings } from '../../../../../../../../../../shared/global/constants';
import { MessageService } from '../../../../../../../../../../core/services/i18n/message.service';
import { BubbleType } from '../../../../../../../../../../shared/models/bubbles/IBubble';

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
              private travelHttpService: TravelHttpService,
              private messageService: MessageService) {
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
        title:  this.messageService.OOPS,
        text: this.messageService.MUST_SELECT_REQUEST_LOCATION,
      });
    }
    this.travelHttpService.createRequest({
      bubbleId: this.travelBubble.id,
      passByCities: this.inputPlace.suggestion.hit.objectID,
      capacity: 1
    }).subscribe((updatedBubble) => {
        this.updatedTravelBubble.emit(<TravelBubble> updatedBubble);
        this.eventUpdateService.updateEvent(this.eventRef, {id: this.travelBubble.id, type: BubbleType.TravelBubble});
        this.toggleCreationCard();
      },
      (e) => {
        Swal({
          type: 'error',
          title:  this.messageService.OOPS,
          text: e.error.error.message,
        });
      });
  }

}
