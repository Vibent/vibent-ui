import { Component, Input } from '@angular/core';
import { AlimentationBubbleService } from '../../../../../../../../core/services/bubbles-services/alimentation-bubble.service.';
import { AlimType } from '../../../../../../../../shared/models/bubbles/AlimentationBubble';
import { EventUpdateService } from '../../../../../../../../core/services/bubbles-services/event-update.service';
import { Event } from '../../../../../../../../shared/models/event';

@Component({
  selector: 'food-entry-creation',
  templateUrl: './food-entry-creation.html'
})
export class FoodEntryCreationComponent {
  
  @Input()
  toggle: boolean;
  @Input()
  bubbleId: number;
  
  constructor(private alimentationBubbleService: AlimentationBubbleService,
              private eventUpdateService: EventUpdateService) {
  }
  
  toggleCreationCard() {
    this.toggle = false;
  }
  
  addEntry() {
    this.alimentationBubbleService.createEntry({
      "bubbleId": this.bubbleId,
      "name": "string",
      "totalRequested": 115,
      "type": AlimType.FOOD
    }).subscribe((v) => {
      console.log(v);
      this.toggleCreationCard();
      this.eventUpdateService.updateEvent(<Event> v);
    });
  }
  
  
}
