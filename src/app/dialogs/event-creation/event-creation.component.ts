import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Group} from '../../models/group';
import * as moment from 'moment';
import {Event} from '../../models/event';
import {HttpService} from '../../http/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent implements OnInit {

  /** Minimal Date for event creation**/
  minimalDate: Date =  moment().add(1, 'hours').toDate();
  dateTime = moment().add(1, 'hours').toDate();
  /** User groups list **/
  groups: Group[];
  title: string;
  description: string;
  date: Date;
  group: string;
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EventCreationComponent>,
              private httpService: HttpService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) data) {

    this.groups = data.groups;
    dialogRef.disableClose = true;
    dialogRef.updateSize('600px', '90%');
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.title, []],
      description: [this.description, []],
      group: [this.group, []],
      date: [this.date, []],
    });
  }

  public saveEvent() {
    this.dialogRef.close(this.form.value);
    console.log(this.dateTime.toJSON());
    const event: Event = {
      title: this.form.value.title,
      description: this.form.value.description,
      startDate: this.dateTime.toJSON(),
      groupRef: '8a8e2acc-5b04-4de4-b006-233474b37626',
    };
    this.httpService.createEvent(event).subscribe(res => {  this.router.navigate(['/events/' + res['ref']]); });
  }

}
