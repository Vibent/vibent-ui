import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedAlimentationBubbleComponent } from './expanded-alimentation-bubble.component';
import { FoodEntryCreationComponent } from './entry-creation/food/food-entry-creation.component';
import { DrinkEntryCreationComponent } from './entry-creation/drink/drink-entry-creation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlimentationHttpService } from '../../../../../../core/services/bubbles-services/alimentation/http/alimentation-http.service';
import { AlimentationDataService } from '../../../../../../core/services/bubbles-services/alimentation/data/alimentation-data.service';
import { AlimentationEntryComponent } from './alimentation-entry/alimentation-entry.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ExpandedAlimentationBubbleComponent,
    FoodEntryCreationComponent,
    DrinkEntryCreationComponent,
    AlimentationEntryComponent
  ],
  providers: [AlimentationHttpService, AlimentationDataService],
  exports: [ExpandedAlimentationBubbleComponent, FoodEntryCreationComponent, DrinkEntryCreationComponent, AlimentationEntryComponent]
})
export class ExpandedAlimentationBubbleComponentModule {
}
