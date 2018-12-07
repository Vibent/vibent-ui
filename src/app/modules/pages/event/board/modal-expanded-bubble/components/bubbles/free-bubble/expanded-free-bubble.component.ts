import { Component } from '@angular/core';
import { AbstractExpandedBubbleComponent } from '../../abstract/abstract-expanded-bubble.component';

@Component({
  selector: 'app-expanded-free-bubble',
  templateUrl: './expanded-free-bubble.html'
})
export class ExpandedFreeBubbleComponent extends AbstractExpandedBubbleComponent {

  constructor() {
    super();
  }
}
