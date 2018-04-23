import { NgModule } from '@angular/core';
import {GroupPreviewComponent} from './group-preview.component';
import {CommonModule} from '@angular/common';
import {GroupPreviewMemberModule} from './group-preview-member/group-preview-member.module';


@NgModule({
  imports: [
    CommonModule,
    GroupPreviewMemberModule
  ],
  declarations: [
    GroupPreviewComponent
  ],
  providers: [],
  exports: [GroupPreviewComponent]
})
export class GroupPreviewModule { }
