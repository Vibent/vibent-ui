import { Component, Input, OnInit } from '@angular/core';
import { PlanningBubble } from '../../../../../../shared/models/bubbles/PlanningBubble';

declare const $: any;

@Component({
  selector: 'app-expanded-planning-bubble',
  templateUrl: './expanded-planning-bubble.html'
})
export class ExpandedPlanningBubbleComponent implements OnInit {

  @Input()
  public planningBubble: PlanningBubble;


  ngOnInit() {

  }
}
