import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDistributionListComponent } from './create-distribution-list.component';
import { DistributionListCreationEventComponent } from './event-choice/distribution-list-creation-event.component';
import { DistributionListsNavigationService } from '../../../../../core/services/distribution-lists/distribution-lists-navigation.service';
import { DistributionListCreationTitleComponent } from './title/distribution-list-creation-title.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DistributionListCreationDescriptionComponent } from './description/distribution-list-creation-description.component';
import { DistributionListCreationSummaryComponent } from './summary/distribution-list-creation-summary.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateDistributionListComponent,
    DistributionListCreationEventComponent,
    DistributionListCreationTitleComponent,
    DistributionListCreationDescriptionComponent,
    DistributionListCreationSummaryComponent
  ],
  exports: [
    CreateDistributionListComponent,
  ],
  providers: [DistributionListsNavigationService]
})
export class CreateDistributionListModule {
}
