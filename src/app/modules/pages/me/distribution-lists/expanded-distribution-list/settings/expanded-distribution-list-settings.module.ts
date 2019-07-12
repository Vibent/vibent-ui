import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpandedDistributionListSettingsComponent } from './expanded-distribution-list-settings.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ExpandedDistributionListSettingsComponent
  ],
  exports: [ExpandedDistributionListSettingsComponent]
})
export class ExpandedDistributionListSettingsModule {
}
