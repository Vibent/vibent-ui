import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedAlimentationBubbleComponent } from './expanded-alimentation-bubble.component';
import { FoodEntryCreationComponent } from './content/entry-creation/food/food-entry-creation.component';
import { DrinkEntryCreationComponent } from './content/entry-creation/drink/drink-entry-creation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlimentationHttpService } from '../../../../../../core/services/bubbles-services/alimentation/http/alimentation-http.service';
import { AlimentationDataService } from '../../../../../../core/services/bubbles-services/alimentation/data/alimentation-data.service';
import { AlimentationEntryComponent } from './content/alimentation-entry/alimentation-entry.component';
import { AlimentationContentComponent } from './content/alimentation-content.component';
import { AlimentationSettingsComponent } from './settings/alimentation-settings.component';
import { SettingsDeleteBubbleModule } from '../settings/settings-delete-bubble.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsDeleteBubbleModule
  ],
  declarations: [
    ExpandedAlimentationBubbleComponent,
    AlimentationContentComponent,
    AlimentationSettingsComponent,
    FoodEntryCreationComponent,
    DrinkEntryCreationComponent,
    AlimentationEntryComponent
  ],
  providers: [AlimentationHttpService, AlimentationDataService],
  exports: [ExpandedAlimentationBubbleComponent, FoodEntryCreationComponent, DrinkEntryCreationComponent, AlimentationEntryComponent]
})
export class ExpandedAlimentationBubbleComponentModule {
}
