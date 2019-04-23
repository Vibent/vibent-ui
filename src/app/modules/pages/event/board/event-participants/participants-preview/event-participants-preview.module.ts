import { NgModule } from '@angular/core';
import { EventParticipantsPreviewComponent } from './event-participants-preview.component';
import { CommonModule } from '@angular/common';
import { LoaderModule } from '../../../../../../core/loader/loader.module';
import { UserProfilePreviewModule } from '../../../../group/group-preview/group-preview-member/user-profile-preview.module';


@NgModule({
  imports: [
    CommonModule,
    LoaderModule,
    UserProfilePreviewModule
  ],
  declarations: [
    EventParticipantsPreviewComponent
  ],
  providers: [],
  exports: [EventParticipantsPreviewComponent]
})
export class EventParticipantsPreviewModule {
}
