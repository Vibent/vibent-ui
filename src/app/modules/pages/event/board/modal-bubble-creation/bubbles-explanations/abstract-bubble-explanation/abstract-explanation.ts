import { EventEmitter, Input, Output } from '@angular/core';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { ModalManagerService, VibentModals } from '../../../../../../../core/services/modal-manager.service';

export abstract class AbstractExplanation {

  @Input()
  eventRef: string;
  @Output()
  sendNullToList = new EventEmitter();

  protected constructor(protected eventUpdateService: EventUpdateService,
                        protected modalManagerService: ModalManagerService) {
  }

  protected closeModal() {
    this.modalManagerService.hideModal(VibentModals.SELECT_BUBBLE_TYPE);
  }
  protected onBubbleCreated() {
    this.sendNullToList.emit();
    this.eventUpdateService.updateEvent(this.eventRef);
  }
}
