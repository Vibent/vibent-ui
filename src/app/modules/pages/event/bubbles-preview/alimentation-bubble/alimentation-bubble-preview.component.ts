import { Component, Input } from '@angular/core';
import { AlimentationBubble } from '../../../../../shared/models/bubbles/AlimentationBubble';

declare const $: any;

@Component({
  selector: 'app-alimentation-bubble-preview',
  templateUrl: './alimentation-bubble-preview.html'
})
export class AlimentationBubblePreviewComponent {

  @Input()
  public alimentationBubble: AlimentationBubble;

}
