import { Component, OnInit } from '@angular/core';
import {EventPreview} from '../models/event-preview';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventsPreview: EventPreview[];
  constructor() { }

  ngOnInit() {
    this.eventsPreview = [
      new EventPreview('zbeubzbeub', 5, '14/04', 'Playa partyyy', 'Cannes'),
      new EventPreview('zbeubzbeub', 5, '14/04', 'Playa partyyy', 'Cannes'),
    ]
  }

}
