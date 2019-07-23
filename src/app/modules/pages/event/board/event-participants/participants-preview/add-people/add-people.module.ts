import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPeopleComponent } from './add-people.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DistributionListsService } from '../../../../../../../core/services/distribution-lists/distribution-lists.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddPeopleComponent
  ],
  providers: [DistributionListsService],
  exports: [AddPeopleComponent]
})
export class AddPeopleModule {
}
