import { NgModule } from '@angular/core';
import {EventParticipantsPreviewComponent} from './event-participants-preview.component';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    EventParticipantsPreviewComponent
  ],
  providers: [],
  exports: [EventParticipantsPreviewComponent]
})
export class EventParticipantsPreviewModule { }
