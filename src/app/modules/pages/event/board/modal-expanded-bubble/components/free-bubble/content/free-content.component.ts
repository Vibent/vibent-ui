import { Component, Input, OnInit } from '@angular/core';
import { FreeBubble } from '../../../../../../../../shared/models/bubbles/FreeBubble';

@Component({
  selector: 'free-content',
  templateUrl: './free-content.html'
})
export class FreeContentComponent implements OnInit {

  @Input()
  freeBubble: FreeBubble;
  @Input()
  eventRef: string;

  ngOnInit() {

  }

}
