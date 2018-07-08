import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GroupComponent } from './group.component';
import { EventPreviewModule } from '../../event/event-preview/event-preview.module';
import { MatDialogModule } from '@angular/material/dialog';
import { GroupMembersModule } from '../dialogs/group-members/group-members.module';
import { AddGroupMembersModule } from '../dialogs/group-members/add-group-members/add-group-members.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EventPreviewModule,
    MatDialogModule,
    GroupMembersModule,
    AddGroupMembersModule
  ],
  declarations: [
    GroupComponent
  ],
  providers: [],
})
export class GroupModule {
}
