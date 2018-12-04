import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedTravelBubbleComponent } from './expanded-travel-bubble.component';
import { MatButtonModule, MatInputModule, MatRippleModule, MatTooltipModule } from '@angular/material';
import { SettingsDeleteBubbleModule } from '../settings/settings-delete-bubble.module';
import { TravelSettingsComponent } from './settings/travel-settings.component';
import { TravelContentComponent } from './content/travel-content.component';
import { TravelHttpService } from '../../../../../../../core/services/bubbles-services/travel/http/travel-http.service';
import { TravelDataService } from '../../../../../../../core/services/bubbles-services/travel/data/travel-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlgoliaPlacesService } from '../../../../../../../core/services/algolia-places/algolia-places.service';
import { TravelProposalComponent } from './content/travel-proposal/travel-proposal.component';
import { TravelProposalCreationComponent } from './content/travel-proposal-creation/travel-proposal-creation.component';
import { TravelRequestCreationComponent } from './content/travel-request-creation/travel-request-creation.component';
import { TravelRequestComponent } from './content/travel-request/travel-request.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsDeleteBubbleModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
  ],
  declarations: [
    ExpandedTravelBubbleComponent,
    TravelProposalComponent,
    TravelRequestComponent,
    TravelProposalCreationComponent,
    TravelRequestCreationComponent,
    TravelSettingsComponent,
    TravelContentComponent
  ],
  providers: [TravelHttpService, TravelDataService, AlgoliaPlacesService],
  exports: [ExpandedTravelBubbleComponent]
})
export class ExpandedTravelBubbleComponentModule {
}
