import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TravelBubble } from '../../../../../../../../shared/models/bubbles/TravelBubble';

@Component({
  selector: 'travel-settings',
  templateUrl: './travel-settings.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelSettingsComponent {

  @Output()
  backToContent = new EventEmitter<any>();
  @Output()
  bubbleDeleted = new EventEmitter<any>();
  @Input()
  travelBubble: TravelBubble;
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
