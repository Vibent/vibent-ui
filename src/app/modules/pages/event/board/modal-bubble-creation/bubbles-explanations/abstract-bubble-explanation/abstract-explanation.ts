import { EventEmitter, Input, Output } from '@angular/core';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';

export abstract class AbstractExplanation {

  @Input()
  eventRef: string;
  @Output()
  sendNullToList = new EventEmitter();

  protected constructor(protected eventUpdateService: EventUpdateService) {
  }

  protected onBubbleCreated() {
    this.sendNullToList.emit();
    this.eventUpdateService.updateEvent(this.eventRef);
  }
}
