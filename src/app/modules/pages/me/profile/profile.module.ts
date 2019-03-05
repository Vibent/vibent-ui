import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { ProfileImageService } from '../../../../core/http/profile-image.service';
import { ConnectedSocialModule } from '../connected-social/connected-social.module';
import { ProfileSettingsModule } from '../dialogs/profile-settings/profile-settings.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProfileSettingsModule,
    ConnectedSocialModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [ProfileImageService],
})
export class ProfileModule {
}
