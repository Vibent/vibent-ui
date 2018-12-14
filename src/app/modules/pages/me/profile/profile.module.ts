import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { ProfileImageService } from '../../../../core/http/profile-image.service';
import { ConnectedSocialModule } from '../connected-social/connected-social.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ConnectedSocialModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [ProfileImageService],
})
export class ProfileModule {
}
