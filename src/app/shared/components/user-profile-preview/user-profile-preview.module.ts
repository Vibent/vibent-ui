import { NgModule } from '@angular/core';
import { UserProfilePreviewComponent } from './user-profile-preview.component';
import { CommonModule } from '@angular/common';
import { LoaderModule } from '../../../core/loader/loader.module';


@NgModule({
  imports: [
    CommonModule,
    LoaderModule
  ],
  declarations: [
    UserProfilePreviewComponent
  ],
  providers: [],
  exports: [UserProfilePreviewComponent]
})
export class UserProfilePreviewModule {
}
