import { Input } from '@angular/core';
import { IBubble } from '../../../../../../../shared/models/bubbles/IBubble';

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

}
