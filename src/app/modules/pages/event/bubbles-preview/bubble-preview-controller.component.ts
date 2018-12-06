import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BubbleType, IBubble } from '../../../../shared/models/bubbles/IBubble';

declare const $: any;

@Component({
  selector: 'bubble-preview-controller',
  templateUrl: './bubble-preview-controller.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BubblePreviewController implements OnInit {

  @Input()
  bubble: IBubble;

  @Output()
  bubbleToExpand = new EventEmitter<IBubble>();

  BubbleType = BubbleType;

  constructor() {
  }

  ngOnInit(): void {
  }

  expandBubble() {
    this.bubbleToExpand.emit(this.bubble);
    $('#expanded-bubble').modal('show');
  }

}
