import { EventEmitter, Input, Output } from '@angular/core';
import { IBubble } from '../../../../../../../shared/models/bubbles/IBubble';

export abstract class AbstractBubbleSettingsComponent {

  @Output()
  backToContent = new EventEmitter<any>();
  @Output()
  bubbleDeleted = new EventEmitter<any>();
  @Input()
  bubble: IBubble;
  @Input()
  eventRef: string;

  sendBackToContent() {
    this.backToContent.emit();
  }

  onBubbleDeleted() {
    this.bubbleDeleted.emit();
  }

}
