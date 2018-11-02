import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SurveyBubble } from '../../../../../../../shared/models/bubbles/SurveyBubble';

@Component({
  selector: 'survey-settings',
  templateUrl: './survey-settings.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveySettingsComponent {

  @Output()
  backToContent = new EventEmitter<any>();
  @Output()
  bubbleDeleted = new EventEmitter<any>();
  @Input()
  surveyBubble: SurveyBubble;
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
