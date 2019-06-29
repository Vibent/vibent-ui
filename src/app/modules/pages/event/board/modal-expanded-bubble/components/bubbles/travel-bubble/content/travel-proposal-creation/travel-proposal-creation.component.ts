import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'travel-proposal-creation',
  templateUrl: './travel-proposal-creation.html'
})
export class TravelProposalCreationComponent extends AbstractBubbleEntityCreationComponent implements OnInit {

  @Input()
  travelBubble: TravelBubble;
  placesAutocomplete: any;
  inputPlace: any;

  constructor(private algoliaPlacesService: AlgoliaPlacesService,
              private eventUpdateService: EventUpdateService,
              private travelHttpService: TravelHttpService,
              private messageService: MessageService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.placesAutocomplete = places({
      appId: AppSettings.ALGOLIA_APP_ID,
      apiKey: AppSettings.ALGOLIA_API_KEY,
      container: document.querySelector('#address-input')
    }).configure({useDeviceLocation: true, type: 'city'});

    this.placesAutocomplete.on('change', e => this.inputPlace = e);
  }

  createProposal() {
    if (!this.inputPlace) {
      Swal({
        type: 'error',
        title: this.messageService.OOPS,
        text: this.messageService.MUST_SELECT_PROPOSAL_LOCATION,
      });
    }
    this.travelHttpService.createProposal({
      bubbleId: this.travelBubble.id,
      capacity: this.capacity.value,
      passByCities: this.inputPlace.suggestion.hit.objectID
    }).subscribe((updatedBubble) => {
        this.updatedBubble.emit(<TravelBubble>updatedBubble);
        this.eventUpdateService.updateEvent(this.eventRef, {id: this.travelBubble.id, type: BubbleType.TravelBubble});
        this.toggleCreationCard();
        this.resetAlgoliaInput();
      },
      (e) => {
        Swal({
          type: 'error',
          title: this.messageService.OOPS,
          text: e.error.error.message,
        });
      });
  }

  resetAlgoliaInput() {
    this.purge();
    this.placesAutocomplete.setVal('');
  }

}
