import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupMembersComponent } from './group-members.component';
import { UserProfilePreviewModule } from '../../../../../shared/components/user-profile-preview/user-profile-preview.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    UserProfilePreviewModule
  ],
  declarations: [
    GroupMembersComponent
  ],
  providers: [],
  exports: [GroupMembersComponent]
})
export class GroupMembersModule {
}
