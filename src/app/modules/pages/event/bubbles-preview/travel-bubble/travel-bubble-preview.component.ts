import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TravelBubble } from '../../../../../shared/models/bubbles/TravelBubble';
import { TravelDataService } from '../../../../../core/services/bubbles-services/travel/data/travel-data.service';

@Component({
  selector: 'travel-bubble-preview',
  templateUrl: './travel-bubble-preview.html',
  styleUrls: ['../bubble-preview.scss', './travel-bubble-preview.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelBubblePreviewComponent {

  @Input()
  public bubble: TravelBubble;

  constructor(public travelDataService: TravelDataService) {
  }

}
