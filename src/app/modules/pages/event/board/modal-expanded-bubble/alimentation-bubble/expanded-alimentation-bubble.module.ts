import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedAlimentationBubbleComponent } from './expanded-alimentation-bubble.component';
import { AlimentationEntryModule } from './alimentation-entry/alimentation-entry.module.';
import { FoodEntryCreationComponent } from './entry-creation/food/food-entry-creation.component';
import { DrinkEntryCreationComponent } from './entry-creation/drink/drink-entry-creation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlimentationHttpService } from '../../../../../../core/services/bubbles-services/alimentation/http/alimentation-http.service';
import { AlimentationDataService } from '../../../../../../core/services/bubbles-services/alimentation/data/alimentation-data.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AlimentationEntryModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ExpandedAlimentationBubbleComponent,
    FoodEntryCreationComponent,
    DrinkEntryCreationComponent
  ],
  providers: [AlimentationHttpService, AlimentationDataService],
  exports: [ExpandedAlimentationBubbleComponent, FoodEntryCreationComponent, DrinkEntryCreationComponent]
})
export class ExpandedAlimentationBubbleComponentModule {
}
