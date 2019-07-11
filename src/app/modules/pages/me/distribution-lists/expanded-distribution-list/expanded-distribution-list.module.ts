import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandedDistributionListComponent } from './expanded-distribution-list.component';
import { DistributionListsNavigationService } from '../../../../../core/services/distribution-lists/distribution-lists-navigation.service';
import { UserProfilePreviewModule } from '../../../../../shared/components/user-profile-preview/user-profile-preview.module';
import { ExpandedDistributionListSettingsModule } from './settings/expanded-distribution-list-settings.module';

@NgModule({
  imports: [
    CommonModule,
    UserProfilePreviewModule,
    ExpandedDistributionListSettingsModule
  ],
  declarations: [
    ExpandedDistributionListComponent
  ],
  exports: [
    ExpandedDistributionListComponent,
  ],
  providers: [DistributionListsNavigationService]
})
export class ExpandedDistributionListModule {
}
