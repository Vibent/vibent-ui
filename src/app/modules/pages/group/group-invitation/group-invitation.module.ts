import { NgModule } from '@angular/core';
import { GroupInvitationComponent } from './group-invitation.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    GroupInvitationComponent
  ],
  exports: [GroupInvitationComponent]
})
export class GroupInvitationModule {
}
