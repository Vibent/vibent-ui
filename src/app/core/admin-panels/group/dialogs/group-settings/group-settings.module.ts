import { NgModule } from '@angular/core';
import { GroupSettingsComponent } from './group-settings.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    GroupSettingsComponent
  ],
  providers: [],
  exports: [GroupSettingsComponent]
})
export class GroupSettingsModule {
}
