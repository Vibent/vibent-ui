import { Component, Input, OnInit } from '@angular/core';
import { BubbleCreationService } from '../../../../../../../core/services/bubbles-services/bubble-creation.service.';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { BubblesCreationsSwalAlerts } from '../../../../../../../core/services/bubbles-services/alerts/bubbles-creations-swal-alerts';
import { FormControl, FormGroup } from '@angular/forms';

declare const $: any;

@Component({
  selector: 'planning-explanation',
  templateUrl: './planning-explanation.html'
})
export class PlanningExplanationComponent implements OnInit {

  @Input()
  eventRef: string;
  form: FormGroup;
  planningTitle: FormControl;

  constructor(private bubbleCreationService: BubbleCreationService,
              private eventUpdateService: EventUpdateService,
              private bubblesCreationsSwalAlerts: BubblesCreationsSwalAlerts) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      planningTitle: this.planningTitle = new FormControl(),
    });
  }

  createBubble() {
    $('#modalSelectBubbleType').modal('hide');
    this.bubbleCreationService.createPlanningBubble(this.eventRef, this.planningTitle.value).subscribe(() => {
      this.eventUpdateService.updateEvent(this.eventRef);
      this.bubblesCreationsSwalAlerts.alertPlanningBubbleCreated();
    });
  }

}
