import { NgModule } from '@angular/core';
import { EventParticipantsPreviewComponent } from './event-participants-preview.component';
import { CommonModule } from '@angular/common';
import { LoaderModule } from '../../../../../../core/loader/loader.module';
import { UserProfilePreviewModule } from '../../../../../../shared/components/user-profile-preview/user-profile-preview.module';
import { AddPeopleModule } from './add-people/add-people.module';


@NgModule({
  imports: [
    CommonModule,
    LoaderModule,
    UserProfilePreviewModule,
    AddPeopleModule
  ],
  declarations: [
    EventParticipantsPreviewComponent
  ],
  providers: [],
  exports: [EventParticipantsPreviewComponent]
})
export class EventParticipantsPreviewModule {
}
