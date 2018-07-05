import { NgModule } from '@angular/core';
import { ProfileSettingsComponent } from './profile-settings.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProfileSettingsComponent
  ],
  providers: [],
  exports: [ProfileSettingsComponent]
})
export class ProfileSettingsModule {
}
