import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AlimentationBubble } from '../../../../../../../../../shared/models/bubbles/AlimentationBubble';

declare const $: any;

@Component({
  selector: 'alimentation-content',
  templateUrl: './alimentation-content.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlimentationContentComponent implements OnInit {

  @Input()
  alimentationBubble: AlimentationBubble;
  @Input()
  eventRef: string;
  toggleAddFoodEntry = false;
  toggleAddDrinkEntry = false;

  constructor() {
  }

  ngOnInit() {
  }

  addFoodEntry() {
    this.toggleAddFoodEntry = !this.toggleAddFoodEntry;
    this.toggleAddDrinkEntry = false;
  }

  addDrinkEntry() {
    this.toggleAddDrinkEntry = !this.toggleAddDrinkEntry;
    this.toggleAddFoodEntry = false;
  }

  onBubbleUpdate(updatedBubble: AlimentationBubble) {
    this.alimentationBubble = updatedBubble;
  }

}
