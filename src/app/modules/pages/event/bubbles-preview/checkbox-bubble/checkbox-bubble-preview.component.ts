import { Component, Input } from '@angular/core';
import { CheckboxBubble } from '../../../../../shared/models/bubbles/CheckboxBubble';

declare const $: any;

@Component({
  selector: 'app-checkbox-bubble-preview',
  templateUrl: './checkbox-bubble-preview.html'
})
export class CheckboxBubblePreviewComponent {

  @Input()
  public checkboxBubble: CheckboxBubble;

}
