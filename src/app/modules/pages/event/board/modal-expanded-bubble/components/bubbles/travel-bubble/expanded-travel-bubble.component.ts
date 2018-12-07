import { Component, OnInit } from '@angular/core';
import { AbstractExpandedBubbleComponent } from '../../abstract/abstract-expanded-bubble.component';

@Component({
  selector: 'app-expanded-travel-bubble',
  templateUrl: './expanded-travel-bubble.html'
})
export class ExpandedTravelBubbleComponent extends AbstractExpandedBubbleComponent implements OnInit {

  ngOnInit(): void {
  }

}
