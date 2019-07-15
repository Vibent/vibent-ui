import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DistributionListInvitationComponent } from './distribution-list-invitation.component';
import { AddPeopleModule } from '../../../../event/board/event-participants/participants-preview/add-people/add-people.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddPeopleModule
  ],
  declarations: [
    DistributionListInvitationComponent
  ],
  exports: [DistributionListInvitationComponent]
})
export class DistributionListInvitationModule {
}
