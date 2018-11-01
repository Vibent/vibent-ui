import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckboxBubble } from '../../../../../../../shared/models/bubbles/CheckboxBubble';

@Component({
  selector: 'checkbox-settings',
  templateUrl: './checkbox-settings.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxSettingsComponent {

  @Output()
  backToContent = new EventEmitter<any>();
  @Output()
  bubbleDeleted = new EventEmitter<any>();
  @Input()
  checkboxBubble: CheckboxBubble;
  @Input()
  eventRef: string;

  sendBackToContent() {
    this.backToContent.emit();
  }

  // Needed in case an alimentation bubble is created after a delete
  // content will be displayed, not settings
  onBubbleDeleted() {
    this.bubbleDeleted.emit();
  }

}
