import { Component } from '@angular/core';
import { AlimentationHttpService } from '../../../../../../../../../../../core/services/bubbles-services/alimentation/http/alimentation-http.service';
import {
  AlimentationBubble,
  AlimType
} from '../../../../../../../../../../../shared/models/bubbles/AlimentationBubble';
import { EventUpdateService } from '../../../../../../../../../../../core/services/bubbles-services/event-update.service';
import { AbstractBubbleEntityCreationComponent } from '../../../../../abstract/abstract-bubble-entity-creation.component';
import { BubbleType } from '../../../../../../../../../../../shared/models/bubbles/IBubble';

@Component({
  selector: 'drink-entry-creation',
  templateUrl: './drink-entry-creation.html'
})
export class DrinkEntryCreationComponent extends AbstractBubbleEntityCreationComponent {

  constructor(private alimentationBubbleService: AlimentationHttpService,
              private eventUpdateService: EventUpdateService) {
    super();
  }

  addEntry() {
    this.alimentationBubbleService.createEntry({
      bubbleId: this.bubbleId,
      name: this.name.value,
      totalRequested: this.quantity.value,
      type: AlimType.DRINK
    }).subscribe((updatedBubble) => {
      this.updatedBubble.emit(<AlimentationBubble>updatedBubble);
      this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.AlimentationBubble});
      this.toggleCreationCard();
    });
  }

}
