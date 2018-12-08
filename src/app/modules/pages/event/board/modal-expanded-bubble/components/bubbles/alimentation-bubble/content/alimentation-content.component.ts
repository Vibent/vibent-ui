import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlimentationBubble } from '../../../../../../../../../shared/models/bubbles/AlimentationBubble';
import { DrinkEntryCreationComponent } from './entry-creation/drink/drink-entry-creation.component';
import { FoodEntryCreationComponent } from './entry-creation/food/food-entry-creation.component';

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
  @ViewChild(DrinkEntryCreationComponent)
  private drinkEntryCreationComponent: DrinkEntryCreationComponent;
  @ViewChild(FoodEntryCreationComponent)
  private foodkEntryCreationComponent: FoodEntryCreationComponent;

  constructor() {
  }

  ngOnInit() {
  }

  addFoodEntry() {
    if (this.drinkEntryCreationComponent.toggle) {
      this.drinkEntryCreationComponent.toggleCreationCard();
    }
    this.foodkEntryCreationComponent.toggleCreationCard();
  }

  addDrinkEntry() {
    if (this.foodkEntryCreationComponent.toggle) {
      this.foodkEntryCreationComponent.toggleCreationCard();
    }
    this.drinkEntryCreationComponent.toggleCreationCard();
  }

  onBubbleUpdate(updatedBubble: AlimentationBubble) {
    this.alimentationBubble = updatedBubble;
  }

}
