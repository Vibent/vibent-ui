import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { AlimentationHttpService } from '../../../../../../../../../../../core/services/bubbles-services/alimentation/http/alimentation-http.service';
import {
  AlimentationBubble,
  AlimType
} from '../../../../../../../../../../../shared/models/bubbles/AlimentationBubble';
import { EventUpdateService } from '../../../../../../../../../../../core/services/bubbles-services/event-update.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractBubbleEntityCreationComponent } from '../../../../../abstract/abstract-bubble-entity-creation.component';
import { BubbleType } from '../../../../../../../../../../../shared/models/bubbles/IBubble';

@Component({
  selector: 'drink-entry-creation',
  templateUrl: './drink-entry-creation.html'
})
export class DrinkEntryCreationComponent extends AbstractBubbleEntityCreationComponent implements OnInit {

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
      type: AlimType.DRINK
    }).subscribe((updatedBubble) => {
      this.updatedAlimentationBubble.emit(<AlimentationBubble>updatedBubble);
      this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.AlimentationBubble});
      this.toggleCreationCard();
    });
  }

}
