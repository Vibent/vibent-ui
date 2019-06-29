import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../../../../../../shared/models/user';
import { UserManagementService } from '../../../../../../../../../../core/services/user-management.service';
import { EventUpdateService } from '../../../../../../../../../../core/services/bubbles-services/event-update.service';
import { PlanningBubble } from '../../../../../../../../../../shared/models/bubbles/PlanningBubble';
import { PlanningHttpService } from '../../../../../../../../../../core/services/bubbles-services/planning/http/planning-http.service';
import * as moment from 'moment';
import { AbstractBubbleEntityCreationComponent } from '../../../../abstract/abstract-bubble-entity-creation.component';
import { BubbleType } from '../../../../../../../../../../shared/models/bubbles/IBubble';

declare const $: any;

@Component({
  selector: 'planning-entry-creation',
  templateUrl: './planning-entry-creation.html'
})
export class PlanningEntryCreationComponent extends AbstractBubbleEntityCreationComponent implements OnInit {

  user: User;
  hasTime = false;
  dateInvalid = false;
  contentInvalid = false;
  timeInvalid = false;

  constructor(private userManagementService: UserManagementService,
              private planningHttpService: PlanningHttpService,
              private eventUpdateService: EventUpdateService) {
    super();
    this.user = this.userManagementService.getMe();
  }

  ngOnInit(): void {
    super.ngOnInit();
    $('#entry-date').datepicker({
      language: 'en',
      minDate: new Date(),
      autoClose: true
    });

    $('#entry-time').timepicker({timeFormat: 'H:i'});
  }

  createPlanningEntry() {
    const start = moment($('#entry-date').val() + ' ' + $('#entry-time').val(), 'MM/DD/YYYY HH:mm');
    this.hasTime = $('#add-time-entry').prop('checked');
    this.contentInvalid = !this.content.valid;
    this.dateInvalid = moment() > start;
    this.planningHttpService.createEntry({
      bubbleId: this.bubbleId,
      content: this.content.value,
      start: start.toJSON(),
      hasTime: this.hasTime
    }).subscribe((updatedBubble) => {
      this.updatedBubble.emit(<PlanningBubble>updatedBubble);
      this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.PlanningBubble});
      this.toggleCreationCard();
      this.resetDatesInput();
    }, () => {
      this.timeInvalid = true;
      this.dateInvalid = true;
    });
  }

  addTimeEntry() {
    this.hasTime = !this.hasTime;
  }

  resetDatesInput() {
    $('#entry-date').val('');
    $('#entry-time').val('');
  }

}
