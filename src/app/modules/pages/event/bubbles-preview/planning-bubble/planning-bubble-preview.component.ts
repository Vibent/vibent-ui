import { Component, Input } from '@angular/core';
import { PlanningBubble } from '../../../../../shared/models/bubbles/PlanningBubble';

declare const $: any;

@Component({
  selector: 'app-planning-bubble-preview',
  templateUrl: './planning-bubble-preview.html'
})
export class PlanningBubblePreviewComponent {

  @Input()
  public planningBubble: PlanningBubble;

}
