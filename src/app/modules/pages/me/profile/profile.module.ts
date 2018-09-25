import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { ProfileImageService } from '../../../../core/http/profile-image.service';
import { MatButtonModule, MatInputModule, MatRippleModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [ProfileImageService],
})
export class ProfileModule {
}
