import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupMembersComponent } from './group-members.component';
import { GroupPreviewMemberModule } from '../../groups/group-preview/group-preview-member/group-preview-member.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    GroupPreviewMemberModule
  ],
  declarations: [
    GroupMembersComponent
  ],
  providers: [],
  exports: [GroupMembersComponent]
})
export class GroupMembersModule {
}
