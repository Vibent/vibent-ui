import { NgModule } from '@angular/core';
import { ProfileSettingsComponent } from './profile-settings.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ImageCropperModule,
  ],
  declarations: [
    ProfileSettingsComponent
  ],
  providers: [],
  exports: [ProfileSettingsComponent]
})
export class ProfileSettingsModule {
}
