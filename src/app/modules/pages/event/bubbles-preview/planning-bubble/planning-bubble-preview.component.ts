import { Component, Input } from '@angular/core';
import { PlanningBubble } from '../../../../../shared/models/bubbles/PlanningBubble';
import { ContributorTextType } from '../bubble-contributor-icons/bubble-contributor-icons.component';
import { PlanningDataService } from '../../../../../core/services/bubbles-services/planning/data/planning-data.service';

declare const $: any;

@Component({
  selector: 'planning-bubble-preview',
  templateUrl: './planning-bubble-preview.html',
  styleUrls: ['../bubble-preview.scss', './planning-bubble-preview.scss']
})
export class PlanningBubblePreviewComponent {

  @Input()
  public bubble: PlanningBubble;

  ContributorTextType = ContributorTextType;

  constructor(public planningDataService: PlanningDataService) {

  }
}
