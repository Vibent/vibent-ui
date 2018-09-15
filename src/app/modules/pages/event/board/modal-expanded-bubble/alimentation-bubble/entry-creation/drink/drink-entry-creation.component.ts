import { Component, Input } from '@angular/core';
import { AlimentationBubbleService } from '../../../../../../../../core/services/bubbles-services/alimentation-bubble.service.';
import { AlimType } from '../../../../../../../../shared/models/bubbles/AlimentationBubble';

@Component({
  selector: 'drink-entry-creation',
  templateUrl: './drink-entry-creation.html'
})
export class DrinkEntryCreationComponent {
  
  @Input()
  toggle: boolean;
  @Input()
  bubbleId: number;
  
  constructor(private alimentationBubbleService: AlimentationBubbleService) {
  }
  
  toggleCreationCard() {
    this.toggle = false;
  }
  
  addEntry() {
    this.alimentationBubbleService.createEntry({
      "bubbleId": this.bubbleId,
      "name": "drikk",
      "totalRequested": 115,
      "type": AlimType.DRINK
    }).subscribe((v) => {
      console.log(v);
      this.toggleCreationCard();
    });
  }
}
