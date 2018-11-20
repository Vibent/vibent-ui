import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../../../../../../../shared/models/user';
import { UserManagementService } from '../../../../../../../../../core/services/user-management.service';
import { EventUpdateService } from '../../../../../../../../../core/services/bubbles-services/event-update.service';
import { PlanningBubble } from '../../../../../../../../../shared/models/bubbles/PlanningBubble';
import { PlanningHttpService } from '../../../../../../../../../core/services/bubbles-services/planning/http/planning-http.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

declare const $: any;

@Component({
  selector: 'planning-entry-creation',
  templateUrl: './planning-entry-creation.html'
})
export class PlanningEntryCreationComponent implements OnInit {

  @Input()
  toggle: boolean;
  @Input()
  eventRef: string;
  @Input()
  bubbleId: number;
  @Output()
  updatedPlanningBubble = new EventEmitter<PlanningBubble>();
  user: User;
  form: FormGroup;
  content: FormControl;

  hasTime = false;
  dateInvalid = false;
  contentInvalid = false;
  timeInvalid = false;

  constructor(private userManagementService: UserManagementService,
              private planningHttpService: PlanningHttpService,
              private eventUpdateService: EventUpdateService) {
    this.user = this.userManagementService.getMe();
  }

  ngOnInit(): void {
    $('#entry-date').datepicker({
      language: 'en',
      minDate: new Date(),
      autoClose: true
    });

    $('#entry-time').timepicker({timeFormat: 'H:i'});

    this.form = new FormGroup({
      content: this.content = new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
    });
  }

  closeCreationCard() {
    this.toggle = false;
    $('#entry-date').val('');
    $('#entry-time').val('');
    this.content.reset();
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
      this.updatedPlanningBubble.emit(<PlanningBubble>updatedBubble);
      this.eventUpdateService.updateEvent(this.eventRef);
      this.closeCreationCard();
    }, () => {
      this.timeInvalid = true;
      this.dateInvalid = true;
    });
  }

  addTimeEntry() {
    this.hasTime = !this.hasTime;
  }

}