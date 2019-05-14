import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../../../shared/models/event';
declare const $: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  public events: Event[];

  constructor(private route: ActivatedRoute) {
    this.events = this.route.snapshot.data['events'].sort(this.sortEventByDate);
  }

  ngOnInit() {
  }

  openEventCreationDialog(): void {
    $('#modalEventCreation').modal('show');
  }

  sortEventByDate(a, b) {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateA < dateB ? 1 : -1;
  }
}
