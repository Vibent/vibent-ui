import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {GroupComponent} from './group.component';
import {EventPreviewModule} from '../events/event-preview/event-preview.module';
import {MatDialogModule} from '@angular/material/dialog';
import {GroupMembersModule} from '../dialogs/group-members/group-members.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EventPreviewModule,
    MatDialogModule,
    GroupMembersModule,
  ],
  declarations: [
    GroupComponent
  ],
  providers: [],
})
export class GroupModule { }
