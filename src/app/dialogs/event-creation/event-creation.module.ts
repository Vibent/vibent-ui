import {NgModule} from '@angular/core';
import {EventCreationComponent} from './event-creation.component';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
  ],
  declarations: [
    EventCreationComponent
  ],
  providers: [],
  exports: [EventCreationComponent]
})
export class EventCreationModule {
}
