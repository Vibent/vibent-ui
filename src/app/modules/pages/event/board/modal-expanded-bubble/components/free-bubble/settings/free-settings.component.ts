import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FreeBubble } from '../../../../../../../../shared/models/bubbles/FreeBubble';

@Component({
  selector: 'free-settings',
  templateUrl: './free-settings.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FreeSettingsComponent {

  @Output()
  backToContent = new EventEmitter<any>();
  @Output()
  bubbleDeleted = new EventEmitter<any>();
  @Input()
  freeBubble: FreeBubble;
  @Input()
  eventRef: string;

  sendBackToContent() {
    this.backToContent.emit();
  }

  onBubbleDeleted() {
    this.bubbleDeleted.emit();
  }

}
