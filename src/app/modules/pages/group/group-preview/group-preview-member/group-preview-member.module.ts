import { NgModule } from '@angular/core';
import { GroupPreviewMemberComponent } from './group-preview-member.component';
import { CommonModule } from '@angular/common';
import { LoaderModule } from '../../../../../core/loader/loader.module';


@NgModule({
  imports: [
    CommonModule,
    LoaderModule
  ],
  declarations: [
    GroupPreviewMemberComponent
  ],
  providers: [],
  exports: [GroupPreviewMemberComponent]
})
export class GroupPreviewMemberModule {
}
