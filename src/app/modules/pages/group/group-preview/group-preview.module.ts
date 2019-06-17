import { NgModule } from '@angular/core';
import { GroupPreviewComponent } from './group-preview.component';
import { CommonModule } from '@angular/common';
import { UserProfilePreviewModule } from '../../../../shared/components/user-profile-preview/user-profile-preview.module';
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
