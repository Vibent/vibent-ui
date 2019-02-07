import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BubbleType } from '../../../../../../shared/models/bubbles/IBubble';

@Component({
  selector: 'bubbles-explanations',
  templateUrl: './bubbles-explanations.html'
})
export class BubblesExplanationsComponent {

  BubbleType = BubbleType;
  @Input()
  bubbleType: BubbleType;
  @Input()
  eventRef: string;
  @Output()
  sendNullToList = new EventEmitter();

  constructor() {
  }

  backToList() {
    this.sendNullToList.emit();
  }


}
