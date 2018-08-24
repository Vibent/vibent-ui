import { Component, Input, OnInit } from '@angular/core';
import { CheckboxBubble } from '../../../../../../shared/models/bubbles/CheckboxBubble';

declare const $: any;

@Component({
  selector: 'app-expanded-checkbox-bubble',
  templateUrl: './expanded-checkbox-bubble.html'
})
export class ExpandedCheckboxBubbleComponent implements OnInit {

  @Input()
  public checkboxBubble: CheckboxBubble;


  ngOnInit() {

  }
}
