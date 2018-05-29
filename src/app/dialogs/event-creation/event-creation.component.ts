import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as moment from 'moment';
import {Event} from '../../models/event';
import {HttpService} from '../../http/http.service';
import {Router} from '@angular/router';
import {Group} from '../../models/group';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent implements OnInit {

  /** Minimal Date for event creation**/
  dateTime = moment().add(1, 'hours').toDate();
  /** User groups list **/
  public groups: Group[];
  public title: string;
  public description: string;
  public date: Date;
  public  group: string;
  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EventCreationComponent>,
              private httpService: HttpService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) data) {

    this.groups = data.groups;
    console.log(this.groups);
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

  public close(): void {
    this.dialogRef.close();
  }

  public saveEvent(): void {
    this.dialogRef.close(this.form.value);
    let groupRef: string;
    if (this.form.value.group) {
      groupRef = this.form.value.group;
    } else {
      groupRef = this.groups[0].ref;
    }
    console.log(this.dateTime);
    this.dateTime.setTime( this.dateTime.getTime() - this.dateTime.getTimezoneOffset() * 60 * 1000 );
    console.log(this.dateTime.toJSON());
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
