import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { RouterModule } from '@angular/router';
import { EventParticipantsPreviewModule } from './event-participants/event-participants-preview.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EventParticipantsPreviewModule
  ],
  declarations: [
    EventComponent
  ],
  providers: [],
})
export class EventModule {
}
