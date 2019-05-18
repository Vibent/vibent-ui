import { Component, Input, OnInit } from '@angular/core';
import { BubbleCreationService } from '../../../../../../../core/services/bubbles-services/bubble-creation.service.';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { BubblesCreationsNotification } from '../../../../../../../core/services/bubbles-services/alerts/bubbles-creations-notification.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractExplanation } from '../abstract-bubble-explanation/abstract-explanation';

declare const $: any;

@Component({
  selector: 'checkbox-explanation',
  templateUrl: './checkbox-explanation.html',
  styleUrls: ['./checkbox-explanation.scss']
})
export class CheckboxExplanationComponent extends AbstractExplanation implements OnInit {

  form: FormGroup;
  checkboxTitle: FormControl;

  constructor(private bubbleCreationService: BubbleCreationService,
              protected eventUpdateService: EventUpdateService,
              private bubblesCreationsSwalAlerts: BubblesCreationsNotification) {
    super(eventUpdateService);
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      checkboxTitle: this.checkboxTitle = new FormControl(),
    });
  }

  createBubble() {
    $('#modalSelectBubbleType').modal('hide');
    this.bubbleCreationService.createCheckboxBubble(this.eventRef, this.checkboxTitle.value).subscribe(() => {
      this.onBubbleCreated();
      this.bubblesCreationsSwalAlerts.alertCheckboxBubbleCreated();
    });
  }

}
