import { NgModule } from '@angular/core';
import { ListInvitationComponent } from './list-invitation.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ListInvitationComponent
  ],
  exports: [ListInvitationComponent]
})
export class ListInvitationModule {
}
