
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsComponent} from './events.component';
import {EventPreviewModule} from './event-preview/event-preview.module';

@NgModule({
  imports: [
    CommonModule,
    EventPreviewModule
  ],
  declarations: [
    EventsComponent
  ],
  providers: [],
})
export class EventsModule { }
