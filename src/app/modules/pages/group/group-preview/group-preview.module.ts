import { NgModule } from '@angular/core';
import { GroupPreviewComponent } from './group-preview.component';
import { CommonModule } from '@angular/common';
import { UserProfilePreviewModule } from './group-preview-member/user-profile-preview.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    UserProfilePreviewModule,
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
