import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGroupMembersComponent } from './add-group-members.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddGroupMembersComponent
  ],
  providers: [],
  exports: [AddGroupMembersComponent]
})
export class AddGroupMembersModule {
}
