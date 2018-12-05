import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedPlanningBubbleComponent } from './expanded-planning-bubble.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsDeleteBubbleModule } from '../../settings/settings-delete-bubble.module';
import { PlanningSettingsComponent } from './settings/planning-settings.component';
import { PlanningEntryComponent } from './content/planning-entry/planning-entry.component';
import { PlanningEntryCreationComponent } from './content/entry-creation/planning-entry-creation.component';
import { PlanningContentComponent } from './content/planning-content.component';
import { PlanningDataService } from '../../../../../../../../core/services/bubbles-services/planning/data/planning-data.service';
import { PlanningHttpService } from '../../../../../../../../core/services/bubbles-services/planning/http/planning-http.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsDeleteBubbleModule
  ],
  declarations: [
    ExpandedPlanningBubbleComponent,
    PlanningContentComponent,
    PlanningSettingsComponent,
    PlanningEntryComponent,
    PlanningEntryCreationComponent
  ],
  providers: [PlanningHttpService, PlanningDataService],
  exports: [ExpandedPlanningBubbleComponent, PlanningEntryComponent, PlanningEntryCreationComponent]
})
export class ExpandedPlanningBubbleComponentModule {
}
