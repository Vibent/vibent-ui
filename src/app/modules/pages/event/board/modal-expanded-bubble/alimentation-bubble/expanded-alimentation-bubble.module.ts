import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedAlimentationBubbleComponent } from './expanded-alimentation-bubble.component';
import { AlimentationEntryModule } from './alimentation-entry/alimentation-entry.module.';
import { FoodEntryCreationComponent } from './entry-creation/food/food-entry-creation.component';
import { DrinkEntryCreationComponent } from './entry-creation/drink/drink-entry-creation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AlimentationEntryModule
  ],
  declarations: [
    ExpandedAlimentationBubbleComponent,
    FoodEntryCreationComponent,
    DrinkEntryCreationComponent
  ],
  providers: [],
  exports: [ExpandedAlimentationBubbleComponent, FoodEntryCreationComponent, DrinkEntryCreationComponent]
})
export class ExpandedAlimentationBubbleComponentModule {
}
