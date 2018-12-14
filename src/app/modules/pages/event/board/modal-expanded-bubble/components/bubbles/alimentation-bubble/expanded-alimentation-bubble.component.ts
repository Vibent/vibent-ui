import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractExpandedBubbleComponent } from '../../abstract/abstract-expanded-bubble.component';

@Component({
  selector: 'app-expanded-alimentation-bubble',
  templateUrl: './expanded-alimentation-bubble.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandedAlimentationBubbleComponent extends AbstractExpandedBubbleComponent {

  constructor() {
    super();
  }

}
