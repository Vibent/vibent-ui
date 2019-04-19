import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AlimentationBubble, AlimType } from '../../../../../shared/models/bubbles/AlimentationBubble';
import { AlimentationDataService } from '../../../../../core/services/bubbles-services/alimentation/data/alimentation-data.service';

@Component({
  selector: 'alimentation-bubble-preview',
  templateUrl: './alimentation-bubble-preview.html',
  styleUrls: ['../bubble-preview.scss', './alimentation-bubble-preview.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlimentationBubblePreviewComponent implements OnInit {
  @Input()
  public alimentationBubble: AlimentationBubble;
  public readonly AlimType = AlimType;

  public remainingDrinks;
  public remainingFoods;

  constructor(public alimentationDataService: AlimentationDataService) {
  }

  ngOnInit(): void {
    this.remainingFoods = this.alimentationDataService.getTypeRemaining(this.alimentationBubble, AlimType.FOOD);
    this.remainingDrinks = this.alimentationDataService.getTypeRemaining(this.alimentationBubble, AlimType.DRINK);
  }
}
