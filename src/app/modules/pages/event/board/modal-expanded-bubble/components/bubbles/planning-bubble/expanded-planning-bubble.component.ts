import { Component, Input, OnInit } from '@angular/core';
import { PlanningBubble } from '../../../../../../../../shared/models/bubbles/PlanningBubble';


@Component({
  selector: 'app-expanded-planning-bubble',
  templateUrl: './expanded-planning-bubble.html'
})
export class ExpandedPlanningBubbleComponent implements OnInit {

  @Input()
  planningBubble: PlanningBubble;
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

  ngOnInit() {

  }

}
