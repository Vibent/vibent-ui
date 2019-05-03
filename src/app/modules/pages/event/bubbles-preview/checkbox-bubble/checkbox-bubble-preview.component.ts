import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CheckboxBubble } from '../../../../../shared/models/bubbles/CheckboxBubble';
import { CheckboxDataService } from '../../../../../core/services/bubbles-services/checkbox/data/checkbox-data.service';

@Component({
  selector: 'checkbox-bubble-preview',
  templateUrl: './checkbox-bubble-preview.html',
  styleUrls: ['../bubble-preview.scss', './checkbox-bubble-preview.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxBubblePreviewComponent implements OnInit {

  @Input()
  bubble: CheckboxBubble;

  amountOptions;
  amountUnchecked;

  constructor(public checkboxDataService: CheckboxDataService) {
  }


  ngOnInit(): void {
    this.amountOptions = this.checkboxDataService.getAmountOptions(this.bubble);
    this.amountUnchecked = this.checkboxDataService.getAmountUnchecked(this.bubble);
  }
}
