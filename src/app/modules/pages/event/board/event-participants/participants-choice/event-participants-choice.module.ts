import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventParticipantsChoiceComponent } from './event-participants-choice.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EventParticipantsChoiceComponent
  ],
  providers: [],
  exports: [EventParticipantsChoiceComponent]
})
export class EventParticipantsChoiceModule {
}
