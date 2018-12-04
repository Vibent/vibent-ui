import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TravelBubble } from '../../../../../../../shared/models/bubbles/TravelBubble';

@Component({
  selector: 'app-expanded-travel-bubble',
  templateUrl: './expanded-travel-bubble.html'
})
export class ExpandedTravelBubbleComponent implements OnInit {

  @Input()
  public travelBubble: TravelBubble;
  @Input()
  eventRef: string;

  contentDisplayed = true;

  ngOnInit(): void {

  }

  openBubbleSettings() {
    this.contentDisplayed = false;
  }

  onBackToContentSent() {
    this.contentDisplayed = true;
  }



}
