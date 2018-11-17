import { NgModule } from '@angular/core';
import { EventSettingsComponent } from './event-settings.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventSettingsComponent
  ],
  providers: [],
  exports: [EventSettingsComponent]
})
export class EventSettingsModule {
}
