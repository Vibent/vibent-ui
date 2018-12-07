import { Component, OnInit } from '@angular/core';
import { AbstractExpandedBubbleComponent } from '../../abstract/abstract-expanded-bubble.component';

@Component({
  selector: 'app-expanded-planning-bubble',
  templateUrl: './expanded-planning-bubble.html'
})
export class ExpandedPlanningBubbleComponent extends AbstractExpandedBubbleComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
