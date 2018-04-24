import {Component, Input, OnInit} from '@angular/core';
import {EventPreview} from '../../models/event-preview';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent implements OnInit {

  @Input()
  eventPreview: EventPreview;

  constructor() { }

  ngOnInit() {
  }

}
