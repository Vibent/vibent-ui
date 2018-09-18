import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlimentationBubbleService } from '../../../../../../../../core/services/bubbles-services/alimentation-bubble.service.';
import { AlimentationBubble, AlimType } from '../../../../../../../../shared/models/bubbles/AlimentationBubble';
import { EventUpdateService } from '../../../../../../../../core/services/bubbles-services/event-update.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'food-entry-creation',
  templateUrl: './food-entry-creation.html'
})
export class FoodEntryCreationComponent implements OnInit {
  
  @Input()
  toggle: boolean;
  @Input()
  bubbleId: number;
  @Input()
  eventRef: string;
  @Output()
  updatedAlimentationBubble = new EventEmitter<AlimentationBubble>();
  
  form: FormGroup;
  name: FormControl;
  quantity: FormControl;
  
  constructor(private alimentationBubbleService: AlimentationBubbleService,
              private eventUpdateService: EventUpdateService) {
  }
  
  ngOnInit() {
    this.form = new FormGroup({
      name: this.name = new FormControl(),
      quantity: this.quantity = new FormControl()
    });
  }
  
  toggleCreationCard() {
    this.toggle = false;
  }
  
  addEntry() {
    this.alimentationBubbleService.createEntry({
      "bubbleId": this.bubbleId,
      "name": this.name.value,
      "totalRequested": this.quantity.value,
      "type": AlimType.FOOD
    }).subscribe((updatedBubble) => {
      this.updatedAlimentationBubble.emit(<AlimentationBubble>updatedBubble);
      this.toggleCreationCard();
      this.eventUpdateService.updateEvent(this.eventRef);
    });
  }
  
  
}
