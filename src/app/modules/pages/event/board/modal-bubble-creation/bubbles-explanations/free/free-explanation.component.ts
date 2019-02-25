import { Component, Input, OnInit } from '@angular/core';
import { BubbleCreationService } from '../../../../../../../core/services/bubbles-services/bubble-creation.service.';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { BubblesCreationsSwalAlerts } from '../../../../../../../core/services/bubbles-services/alerts/bubbles-creations-swal-alerts';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractExplanation } from '../abstract-bubble-explanation/abstract-explanation';

declare const $: any;

@Component({
  selector: 'free-explanation',
  templateUrl: './free-explanation.html',
  styleUrls: ['./free-explanation.scss']
})
export class FreeExplanationComponent extends AbstractExplanation implements OnInit {

  form: FormGroup;
  freeTitle: FormControl;
  freeContent: FormControl;

  constructor(private bubbleCreationService: BubbleCreationService,
              protected eventUpdateService: EventUpdateService,
              private bubblesCreationsSwalAlerts: BubblesCreationsSwalAlerts) {
    super(eventUpdateService);
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
      this.onBubbleCreated();
      this.bubblesCreationsSwalAlerts.alertFreeBubbleCreated();
    });
  }

}
