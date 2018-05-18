import {NgModule} from '@angular/core';
import {EventCreationComponent} from './event-creation.component';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {OwlMomentDateTimeModule} from 'ng-pick-datetime-moment';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlMomentDateTimeModule,
  ],
  declarations: [
    EventCreationComponent
  ],
  providers: [],
  exports: [EventCreationComponent]
})
export class EventCreationModule {
}
