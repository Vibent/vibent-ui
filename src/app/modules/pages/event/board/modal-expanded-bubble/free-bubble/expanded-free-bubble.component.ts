import { Component, Input, OnInit } from '@angular/core';
import { FreeBubble } from '../../../../../../shared/models/bubbles/FreeBubble';

declare const $: any;

@Component({
  selector: 'app-expanded-free-bubble',
  templateUrl: './expanded-free-bubble.html'
})
export class ExpandedFreeBubbleComponent implements OnInit {

  @Input()
  public freeBubble: FreeBubble;


  ngOnInit() {

  }
}
