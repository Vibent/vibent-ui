import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { Group } from '../../../../../shared/models/group';
import { HttpService } from '../../../../../core/http/http.service';
import { Event } from '../../../../../shared/models/event';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html'
})
export class EventCreationComponent implements OnInit {

  /*** Minimal Date for event creation***/
  dateTime = moment().add(1, 'hours').toDate();

  /*** User groups list ***/
  public groups: Group[];

  /*** Form ***/
  public form: FormGroup;
  public title: FormControl;
  public description: FormControl;
  public date: FormControl;
  public group: FormControl;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EventCreationComponent>,
              private httpService: HttpService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) data) {

    this.groups = data.groups;
    dialogRef.disableClose = true;
    dialogRef.updateSize('600px', '700px');
  }

  ngOnInit() {
    this.title = new FormControl('', Validators.required);
    this.description = new FormControl();
    this.date = new FormControl();
    this.group = new FormControl();
    this.form = this.fb.group({
      title: this.title,
      description: this.description,
      group: this.group,
      date: this.date
    });
  }

  public close(): void {
    this.dialogRef.close();
  }

  public saveEvent(): void {
    this.dialogRef.close(this.form.value);
    const groupRef = this.form.value.group ? this.form.value.group : this.groups[0].ref;
    this.dateTime.setTime(this.dateTime.getTime() - this.dateTime.getTimezoneOffset() * 60 * 1000);
    console.log(this.dateTime);
    const event: Event = {
      title: this.form.value.title,
      description: this.form.value.description,
      startDate: this.dateTime.toJSON(),
      groupRef: groupRef,
    };
    this.httpService.createEvent(event).subscribe(res => {
      this.router.navigate(['/events/' + res['ref']]);
    });
  }

}
