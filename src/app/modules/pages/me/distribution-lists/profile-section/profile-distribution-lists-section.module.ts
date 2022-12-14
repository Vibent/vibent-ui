import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDistributionListsSectionComponent } from './profile-distribution-lists-section.component';
import { CreateDistributionListModule } from '../distribution-list-creation/create-distribution-list.module';
import { ExpandedDistributionListModule } from '../expanded-distribution-list/expanded-distribution-list.module';

@NgModule({
  imports: [
    CommonModule,
    CreateDistributionListModule,
    ExpandedDistributionListModule
  ],
  declarations: [
    ProfileDistributionListsSectionComponent,
  ],
  exports: [
    ProfileDistributionListsSectionComponent,
  ]
})
export class ProfileDistributionListsSectionModule {
}
