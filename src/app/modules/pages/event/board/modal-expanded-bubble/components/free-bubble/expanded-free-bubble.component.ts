import { Component, Input, OnInit } from '@angular/core';
import { FreeBubble } from '../../../../../../../shared/models/bubbles/FreeBubble';
import { AbstractExpandedBubbleComponent } from '../../abstract-components/abstract-expanded-bubble.component';

@Component({
  selector: 'app-expanded-free-bubble',
  templateUrl: './expanded-free-bubble.html'
})
export class ExpandedFreeBubbleComponent extends AbstractExpandedBubbleComponent {

  @Input()
  freeBubble: FreeBubble;
  @Input()
  eventRef: string;

  constructor() {
    super();
  }
}
