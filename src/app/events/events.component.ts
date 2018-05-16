import { Component, OnInit } from '@angular/core';
import {EventPreview} from '../models/event-preview';
import {EventCreationComponent} from '../dialogs/event-creation/event-creation.component';
import {MatDialog } from '@angular/material';
import {Group} from '../models/group';
import {Event} from '../models/event';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../http/http.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {

  data;
  // TODO: generate groupRef - groupName array for dialog
  public groups: string[] = [];
  events: Event[];

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private httpService: HttpService) {
    this.events = this.route.snapshot.data['events'];
    this.httpService.getGroups().subscribe((groups) => {
      for (const group of groups) {
        this.groups.push(group.ref);
      }
    });
  }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(EventCreationComponent, {
      data: {groups: this.groups}
    });

  }
}
