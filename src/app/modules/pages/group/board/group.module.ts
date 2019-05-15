import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GroupComponent } from './group.component';
import { EventPreviewModule } from '../../event/event-preview/event-preview.module';
import { GroupMembersModule } from '../dialogs/group-members/group-members.module';
import { AddEventParticipantsModule } from '../../event/board/event-participants/participants-preview/add-event-participants/add-event-participants.module';
import { GroupSettingsModule } from '../../../../core/admin-panels/group/dialogs/group-settings/group-settings.module';
import { EventCreationModule } from '../../event/dialogs/event-creation/event-creation.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GroupSettingsModule,
    EventCreationModule,
    GroupMembersModule,
    AddEventParticipantsModule,
    EventPreviewModule,
    GroupMembersModule,
    AddEventParticipantsModule
  ],
  declarations: [
    GroupComponent
  ]
})
export class GroupModule {
}
