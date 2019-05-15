import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventParticipantsComponent } from './add-event-participants.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddEventParticipantsComponent
  ],
  providers: [],
  exports: [AddEventParticipantsComponent]
})
export class AddEventParticipantsModule {
}
