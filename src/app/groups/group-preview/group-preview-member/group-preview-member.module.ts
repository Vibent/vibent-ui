import { NgModule } from '@angular/core';
import {GroupPreviewMemberComponent} from './group-preview-member.component';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    GroupPreviewMemberComponent
  ],
  providers: [],
  exports: [GroupPreviewMemberComponent]
})
export class GroupPreviewMemberModule { }
