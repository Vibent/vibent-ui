import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlimentationBubble } from '../../../../../../../../shared/models/bubbles/AlimentationBubble';

@Component({
  selector: 'alimentation-settings',
  templateUrl: './alimentation-settings.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlimentationSettingsComponent {

  @Output()
  backToContent = new EventEmitter<any>();
  @Output()
  bubbleDeleted = new EventEmitter<any>();
  @Input()
  alimentationBubble: AlimentationBubble;
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
