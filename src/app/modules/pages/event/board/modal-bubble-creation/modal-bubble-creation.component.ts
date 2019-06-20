import { Component, Input } from '@angular/core';
import { BubbleType } from '../../../../../shared/models/bubbles/IBubble';
import { Event } from '../../../../../shared/models/event';

@Component({
  selector: 'modal-bubble-creation',
  templateUrl: './modal-bubble-creation.html'
})
export class ModalBubbleCreationComponent {

  BubbleType = BubbleType;
  bubbleType: BubbleType = null;
  @Input()
  event: Event;

  constructor() {
  }

  onBubbleTypeSent(bubbleType: BubbleType) {
    this.bubbleType = bubbleType;
  }

}