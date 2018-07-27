import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { ProfileImageService } from '../../../../core/http/profile-image.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [ProfileImageService],
})
export class ProfileModule {
}
