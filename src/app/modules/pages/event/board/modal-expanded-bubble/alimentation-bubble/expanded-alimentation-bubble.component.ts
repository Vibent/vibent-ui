import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AlimentationBubble } from '../../../../../../shared/models/bubbles/AlimentationBubble';

declare const $: any;

@Component({
  selector: 'app-expanded-alimentation-bubble',
  templateUrl: './expanded-alimentation-bubble.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandedAlimentationBubbleComponent {
  @Input()
  alimentationBubble: AlimentationBubble;
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
