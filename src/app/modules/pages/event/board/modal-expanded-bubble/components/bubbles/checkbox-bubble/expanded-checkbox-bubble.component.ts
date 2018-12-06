import { Component, Input } from '@angular/core';
import { CheckboxBubble } from '../../../../../../../../shared/models/bubbles/CheckboxBubble';
import { AbstractExpandedBubbleComponent } from '../../abstract/abstract-expanded-bubble.component';

@Component({
  selector: 'app-expanded-checkbox-bubble',
  templateUrl: './expanded-checkbox-bubble.html'
})
export class ExpandedCheckboxBubbleComponent extends AbstractExpandedBubbleComponent {

  @Input()
  checkboxBubble: CheckboxBubble;
  @Input()
  eventRef: string;

  constructor() {
    super();
  }

}
