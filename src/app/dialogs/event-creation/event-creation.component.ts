import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Group} from '../../models/group';
import {EventCreationService} from '../../services/event-creation.service';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent implements OnInit {

  /** Minimal Date for event creation**/
  minimalDate = new Date();
  /** User groups list **/
  groups: Group[];
  title: string;
  description: string;
  date: Date;
  group: string;
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EventCreationComponent>,
              private eventCreationService: EventCreationService,
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
    this.eventCreationService.createEvent(this.form.value.title, this.form.value.description, this.form.value.date, this.form.value.group);
  }

}
