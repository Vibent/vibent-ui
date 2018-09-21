import { Component, Input, OnInit } from '@angular/core';
import { BubbleType } from '../../../../../shared/models/bubbles/IBubble';

@Component({
  selector: 'app-modal-bubble-creation',
  templateUrl: './modal-bubble-creation.html'
})
export class ModalBubbleCreationComponent implements OnInit {

  BubbleType = BubbleType;
  bubbleType: BubbleType = null;

  constructor() {
  }

  @Input()
  eventRef: string;

  ngOnInit(): void {

  }

  onBubbleTypeSent(bubbleType: BubbleType) {
    this.bubbleType = bubbleType;
  }

}
