import { Component, OnInit } from '@angular/core';
import {EventPreview} from '../models/event-preview';
import {EventCreationComponent} from '../dialogs/event-creation/event-creation.component';
import {MatDialog } from '@angular/material';
import {Group} from '../models/group';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {

  eventsPreview: EventPreview[];
  data;
  public groups: Group[] = [];

  constructor(public dialog: MatDialog) {
  }


  ngOnInit() {
    this.eventsPreview = [
      new EventPreview('zbeubzbeub', 5, '14/04', 'Playa partyyy', 'Cannes'),
      new EventPreview('zbeubzbeub', 5, '14/04', 'Playa partyyy', 'Cannes'),
    ];
    this.groups.push(new Group('group1', 10, 'description', [], []));
    this.groups.push(new Group('group2', 10, 'description', [], []));
  }

  openDialog() {
    const dialogRef = this.dialog.open(EventCreationComponent, {
      data: {groups: this.groups}
    });

  }
}
