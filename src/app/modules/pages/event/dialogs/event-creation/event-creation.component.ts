import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { HttpService } from '../../../../../core/http/http.service';
import { Event } from '../../../../../shared/models/event';
import { NotificationsService, NotificationType } from '../../../../../core/services/notifications.service';
import { Messages } from '../../../../../shared/messages-codes/messages';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html'
})
export class EventCreationComponent implements OnInit {

  /*** Minimal Date for event creation***/
  dateTime = moment().add(1, 'hours').toDate();

  groupRef: string;

  form: FormGroup;
  title: FormControl;
  description: FormControl;
  date: FormControl;

  titleValidSetted = true;
  dateSetted = true;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EventCreationComponent>,
              private httpService: HttpService,
              private notificationService: NotificationsService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) data) {

    this.groupRef = data.groupRef;
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.title = new FormControl('', Validators.required);
    this.description = new FormControl();
    this.date = new FormControl('', Validators.required);
    this.form = this.fb.group({
      title: this.title,
      description: this.description,
      date: this.date
    });
  }

  public close(): void {
    this.dialogRef.close();
  }

  public saveEvent(): void {
    this.titleValidSetted = this.title.valid;
    this.dateSetted = this.date.valid;

    const event: Event = {
      title: this.form.value.title,
      description: this.form.value.description,
      startDate: this.date.value.toJSON(),
      groupRef: this.groupRef,
    };

    this.httpService.createEvent(event).subscribe(res => {
      this.dialogRef.close(this.form.value);
      this.router.navigate(['/events/' + res['ref']]);
      this.notificationService.notify(Messages.EVENT_CREATED, NotificationType.SUCCESS);
    });
  }

}
