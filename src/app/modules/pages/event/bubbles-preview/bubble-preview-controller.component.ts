import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BubbleType, IBubble } from '../../../../shared/models/bubbles/IBubble';
import { ModalManagerService, VibentModals } from '../../../../core/services/modal-manager.service';

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

  constructor(private modalManagerService: ModalManagerService) {
  }

  ngOnInit(): void {
    this.modalManagerService.initHandleBackBrowser(VibentModals.EXPANDED_BUBBLE);
  }

  expandBubble() {
    this.bubbleToExpand.emit(this.bubble);
    this.modalManagerService.showModal(VibentModals.EXPANDED_BUBBLE);
  }

}
