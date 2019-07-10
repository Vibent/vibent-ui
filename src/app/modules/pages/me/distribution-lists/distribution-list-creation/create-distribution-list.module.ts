import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDistributionListComponent } from './create-distribution-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CreateDistributionListComponent,
  ],
  exports: [
    CreateDistributionListComponent,
  ]
})
export class CreateDistributionListModule {
}
