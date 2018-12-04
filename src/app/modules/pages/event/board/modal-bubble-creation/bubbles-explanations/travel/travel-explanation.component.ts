import { Component, Input, OnInit } from '@angular/core';
import { BubbleCreationService } from '../../../../../../../core/services/bubbles-services/bubble-creation.service.';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { BubblesCreationsSwalAlerts } from '../../../../../../../core/services/bubbles-services/alerts/bubbles-creations-swal-alerts';

declare const $: any;

@Component({
  selector: 'travel-explanation',
  templateUrl: './travel-explanation.html'
})
export class TravelExplanationComponent implements OnInit {

  @Input()
  eventRef: string;

  constructor(private bubbleCreationService: BubbleCreationService,
              private eventUpdateService: EventUpdateService,
              private bubblesCreationsSwalAlerts: BubblesCreationsSwalAlerts) {
  }

  ngOnInit(): void {
  }

  createBubble() {
    $('#modalSelectBubbleType').modal('hide');
    this.bubbleCreationService.createTravelBubble(this.eventRef).subscribe(() => {
      this.eventUpdateService.updateEvent(this.eventRef);
      this.bubblesCreationsSwalAlerts.alertTravelBubbleCreated();
    });
  }

}
