import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGroupMembersComponent } from './add-group-members.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AddGroupMembersComponent
  ],
  providers: [],
  exports: [AddGroupMembersComponent]
})
export class AddGroupMembersModule {
}
