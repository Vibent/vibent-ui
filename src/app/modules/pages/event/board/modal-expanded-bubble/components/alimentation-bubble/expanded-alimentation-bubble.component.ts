import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AlimentationBubble } from '../../../../../../../shared/models/bubbles/AlimentationBubble';
import { AbstractExpandedBubbleComponent } from '../../abstract-components/abstract-expanded-bubble.component';

declare const $: any;

@Component({
  selector: 'app-expanded-alimentation-bubble',
  templateUrl: './expanded-alimentation-bubble.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandedAlimentationBubbleComponent extends AbstractExpandedBubbleComponent {
  @Input()
  alimentationBubble: AlimentationBubble;
  @Input()
  eventRef: string;

  constructor() {
    super();
  }

}
