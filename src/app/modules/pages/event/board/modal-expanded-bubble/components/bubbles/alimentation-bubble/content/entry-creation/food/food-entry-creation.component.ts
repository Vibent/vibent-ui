import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlimentationHttpService } from '../../../../../../../../../../../core/services/bubbles-services/alimentation/http/alimentation-http.service';
import { AlimentationBubble, AlimType } from '../../../../../../../../../../../shared/models/bubbles/AlimentationBubble';
import { EventUpdateService } from '../../../../../../../../../../../core/services/bubbles-services/event-update.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractBubbleEntityCreationComponent } from '../../../../../abstract/abstract-bubble-entity-creation.component';

@Component({
  selector: 'food-entry-creation',
  templateUrl: './food-entry-creation.html'
})
export class FoodEntryCreationComponent extends AbstractBubbleEntityCreationComponent implements OnInit {

  @Input()
  bubbleId: number;
  @Input()
  eventRef: string;
  @Output()
  updatedAlimentationBubble = new EventEmitter<AlimentationBubble>();
  form: FormGroup;
  name: FormControl;
  quantity: FormControl;

  constructor(private alimentationBubbleService: AlimentationHttpService,
              private eventUpdateService: EventUpdateService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: this.name = new FormControl(),
      quantity: this.quantity = new FormControl()
    });
  }

  addEntry() {
    this.alimentationBubbleService.createEntry({
      bubbleId: this.bubbleId,
      name: this.name.value,
      totalRequested: this.quantity.value,
      type: AlimType.FOOD
    }).subscribe((updatedBubble) => {
      this.updatedAlimentationBubble.emit(<AlimentationBubble>updatedBubble);
      this.toggleCreationCard();
      this.eventUpdateService.updateEvent(this.eventRef);
    });
  }

}
