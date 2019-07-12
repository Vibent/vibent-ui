import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { ProfileImageService } from '../../../../core/http/profile-image.service';
import { ConnectedSocialModule } from '../connected-social/connected-social.module';
import { ProfileSettingsModule } from './settings/profile-settings.module';
import { ProfileDistributionListsSectionModule } from '../distribution-lists/profile-section/profile-distribution-lists-section.module';
import { CreateDistributionListModule } from '../distribution-lists/distribution-list-creation/create-distribution-list.module';
import { DistributionListsService } from '../../../../core/services/distribution-lists/distribution-lists.service';
import { ExpandedDistributionListModule } from '../distribution-lists/expanded-distribution-list/expanded-distribution-list.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProfileSettingsModule,
    ConnectedSocialModule,
    ProfileDistributionListsSectionModule,
    CreateDistributionListModule,
    ExpandedDistributionListModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [ProfileImageService, DistributionListsService],
})
export class ProfileModule {
}
