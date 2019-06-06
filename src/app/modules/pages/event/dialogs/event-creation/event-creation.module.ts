import { NgModule } from '@angular/core';
import { EventCreationComponent } from './event-creation.component';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EventCreationNavigationService } from '../../../../../core/services/event-creation-navigation.service';
import { EventCreationTitleComponent } from './title/event-creation-title.component';
import { EventCreationDescriptionComponent } from './description/event-creation-description.component';
import { EventCreationDateComponent } from './date/event-creation-date.component';
import { EventCreationParticipantsComponent } from './participants/event-creation-participants.component';
import { AddEventParticipantsModule } from '../../board/event-participants/participants-preview/add-event-participants/add-event-participants.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    AddEventParticipantsModule
  ],
  declarations: [
    EventCreationComponent,
    EventCreationTitleComponent,
    EventCreationDescriptionComponent,
    EventCreationParticipantsComponent,
    EventCreationDateComponent,
  ],
  providers: [EventCreationNavigationService],
  exports: [EventCreationComponent]
})
export class EventCreationModule {
}
