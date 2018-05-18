import {NgModule} from '@angular/core';
import {GroupPreviewComponent} from './group-preview.component';
import {CommonModule} from '@angular/common';
import {GroupPreviewMemberModule} from './group-preview-member/group-preview-member.module';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    GroupPreviewMemberModule,
    RouterModule
  ],
  declarations: [
    GroupPreviewComponent
  ],
  providers: [],
  exports: [GroupPreviewComponent]
})
export class GroupPreviewModule {
}
