import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { ProfileImageService } from '../../../../core/http/profile-image.service';
import { MatButtonModule, MatInputModule, MatRippleModule, MatTooltipModule } from '@angular/material';
import { ConnectedSocialModule } from '../connected-social/connected-social.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    ConnectedSocialModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [ProfileImageService],
})
export class ProfileModule {
}
