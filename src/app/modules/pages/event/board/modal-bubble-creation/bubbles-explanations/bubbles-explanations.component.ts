import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BubbleType } from '../../../../../../shared/models/bubbles/IBubble';

declare const $: any;

@Component({
  selector: 'bubbles-explanations',
  templateUrl: './bubbles-explanations.html'
})
export class BubblesExplanationsComponent implements OnInit {

  BubbleType =  BubbleType;
  @Input()
  bubbleType: BubbleType;
  @Input()
  eventRef: string;
  @Output()
  sendNullToList = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  backToList() {
    this.sendNullToList.emit(null);
  }


}
