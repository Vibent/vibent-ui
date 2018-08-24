import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BubbleType, IBubble } from '../../../../shared/models/bubbles/IBubble';

declare const $: any;

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble-preview-controller.html'
})
export class BubblePreviewController implements OnInit {

  @Input()
  bubble: IBubble;

  @Output()
  bubbleToExpand = new EventEmitter<IBubble>();

  public BubbleType = BubbleType;

  constructor() {
  }

  ngOnInit(): void {
  }

  expandBubble() {
    console.log(this.bubble);
    this.bubbleToExpand.emit(this.bubble);
    $('#expanded-bubble').modal('show');
  }

}
