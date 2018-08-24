import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpService } from '../../http/http.service';
import { Event } from '../../../shared/models/event';

@Component({
  selector: 'app-event-admin-panel',
  templateUrl: './event-admin-panel.component.html',
})
export class EventAdminPanelComponent implements OnInit {

  @Input()
  public eventRef: string;
  public event: Event;

  constructor(private httpService: HttpService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.httpService.getEvent(this.eventRef).subscribe((event) => {
      this.event = event;
    });
  }

  public openSettingsDialog(): void {

  }

  openRightsDialog(): void {

  }

  openRequestsDialog(): void {

  }

}
