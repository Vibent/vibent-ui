import { Component, Input } from '@angular/core';
import { CheckboxBubble } from '../../../../../../shared/models/bubbles/CheckboxBubble';

@Component({
  selector: 'app-expanded-checkbox-bubble',
  templateUrl: './expanded-checkbox-bubble.html'
})
export class ExpandedCheckboxBubbleComponent {

  @Input()
  checkboxBubble: CheckboxBubble;
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
