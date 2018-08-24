import { Component, Input } from '@angular/core';
import { FreeBubble } from '../../../../../shared/models/bubbles/FreeBubble';

declare const $: any;

@Component({
  selector: 'app-free-bubble-preview',
  templateUrl: './free-bubble-preview.html'
})
export class FreeBubblePreviewComponent {

  @Input()
  public freeBubble: FreeBubble;

}
