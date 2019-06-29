import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBubble } from '../../../../../../../shared/models/bubbles/IBubble';

export abstract class AbstractBubbleEntityCreationComponent implements OnInit {

  @Input()
  bubbleId: number;
  @Input()
  eventRef: string;
  @Output()
  updatedBubble = new EventEmitter<IBubble>();

  toggle = false;
  form: FormGroup;
  name: FormControl;
  quantity: FormControl;
  content: FormControl;
  capacity: FormControl;

  ngOnInit() {
    this.form = new FormGroup({
      name: this.name = new FormControl(),
      quantity: this.quantity = new FormControl(),
      content: this.content = new FormControl(),
      capacity: this.capacity = new FormControl()
    });
  }

  toggleCreationCard() {
    this.toggle = !this.toggle;
    this.purge();
  }

  purge() {
    this.name.setValue('');
    this.quantity.setValue('');
    this.content.setValue('');
    this.capacity.setValue('');
  }
}
