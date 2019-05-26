import { NgModule } from '@angular/core';
import { EventInvitationComponent } from './event-invitation.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    EventInvitationComponent
  ],
  exports: [EventInvitationComponent]
})
export class EventInvitationModule {
}
