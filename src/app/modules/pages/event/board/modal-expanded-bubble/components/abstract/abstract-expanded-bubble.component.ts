import { EventEmitter, Input, Output } from '@angular/core';
import { IBubble } from '../../../../../../../shared/models/bubbles/IBubble';
import { PlanningBubble } from '../../../../../../../shared/models/bubbles/PlanningBubble';

/**
 * Abstract component for expanded bubbles
 */
export abstract class AbstractExpandedBubbleComponent {

  @Input()
  bubble: IBubble;
  @Input()
  eventRef: string;

  contentDisplayed = true;

  constructor() {
  }

  openBubbleSettings() {
    this.contentDisplayed = false;
  }

  onBackToContentSent() {
    this.contentDisplayed = true;
  }

  onBubbleUpdate(updatedBubble: IBubble) {
    this.bubble = updatedBubble;
  }

}
