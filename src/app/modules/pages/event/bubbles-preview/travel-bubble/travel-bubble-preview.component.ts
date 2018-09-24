import { Component, Input } from '@angular/core';
import { TravelBubble } from '../../../../../shared/models/bubbles/TravelBubble';

declare const $: any;

@Component({
  selector: 'app-travel-bubble-preview',
  templateUrl: './travel-bubble-preview.html'
})
export class TravelBubblePreviewComponent {

  @Input()
  public travelBubble: TravelBubble;

}
