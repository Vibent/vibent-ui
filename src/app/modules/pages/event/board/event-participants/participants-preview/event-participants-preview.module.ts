import { NgModule } from '@angular/core';
import { EventParticipantsPreviewComponent } from './event-participants-preview.component';
import { CommonModule } from '@angular/common';
import { LoaderModule } from '../../../../../../core/loader/loader.module';


@NgModule({
  imports: [
    CommonModule,
    LoaderModule
  ],
  declarations: [
    EventParticipantsPreviewComponent
  ],
  providers: [],
  exports: [EventParticipantsPreviewComponent]
})
export class EventParticipantsPreviewModule {
}
