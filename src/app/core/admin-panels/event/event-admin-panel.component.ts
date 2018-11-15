import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpService } from '../../http/http.service';
import { Event } from '../../../shared/models/event';
import { EventSettingsComponent } from './dialogs/event-settings/event-settings.component';

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
    this.dialog.open(EventSettingsComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog',
      data: {event: this.event}
    });
  }

}
