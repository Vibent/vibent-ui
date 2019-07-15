import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GroupComponent } from './group.component';
import { EventPreviewModule } from '../../event/event-preview/event-preview.module';
import { GroupMembersModule } from '../dialogs/group-members/group-members.module';
import { AddPeopleModule } from '../../event/board/event-participants/participants-preview/add-people/add-people.module';
import { GroupSettingsModule } from '../../../../core/admin-panels/group/dialogs/group-settings/group-settings.module';
import { EventCreationModule } from '../../event/dialogs/event-creation/event-creation.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GroupSettingsModule,
    EventCreationModule,
    GroupMembersModule,
    AddPeopleModule,
    EventPreviewModule,
    GroupMembersModule,
    AddPeopleModule
  ],
  declarations: [
    GroupComponent
  ]
})
export class GroupModule {
}
