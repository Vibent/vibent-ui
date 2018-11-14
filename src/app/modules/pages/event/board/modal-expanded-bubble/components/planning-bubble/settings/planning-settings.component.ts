import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanningBubble } from '../../../../../../../../shared/models/bubbles/PlanningBubble';

@Component({
  selector: 'planning-settings',
  templateUrl: './planning-settings.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanningSettingsComponent {

  @Output()
  backToContent = new EventEmitter<any>();
  @Output()
  bubbleDeleted = new EventEmitter<any>();
  @Input()
  planningBubble: PlanningBubble;
  @Input()
  eventRef: string;

  sendBackToContent() {
    this.backToContent.emit();
  }

  // Needed in case an planning bubble is created after a delete
  // content will be displayed, not settings
  onBubbleDeleted() {
    this.bubbleDeleted.emit();
  }

}
