import { Component, Input, OnInit } from '@angular/core';
import { BubbleCreationService } from '../../../../../../../core/services/bubbles-services/bubble-creation.service.';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { BubblesCreationsSwalAlerts } from '../../../../../../../core/services/bubbles-services/alerts/bubbles-creations-swal-alerts';
import { FormControl, FormGroup } from '@angular/forms';

declare const $: any;

@Component({
  selector: 'free-explanation',
  templateUrl: './free-explanation.html'
})
export class FreeExplanationComponent implements OnInit {

  @Input()
  eventRef: string;
  form: FormGroup;
  freeTitle: FormControl;
  freeContent: FormControl;

  constructor(private bubbleCreationService: BubbleCreationService,
              private eventUpdateService: EventUpdateService,
              private bubblesCreationsSwalAlerts: BubblesCreationsSwalAlerts) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      freeTitle: this.freeTitle = new FormControl(),
      freeContent: this.freeContent = new FormControl(),
    });
  }

  createBubble() {
    $('#modalSelectBubbleType').modal('hide');
    this.bubbleCreationService.createFreeBubble(this.eventRef, this.freeTitle.value, this.freeContent.value).subscribe(() => {
      this.eventUpdateService.updateEvent(this.eventRef);
      this.bubblesCreationsSwalAlerts.alertFreeBubbleCreated();
    });
  }

}
