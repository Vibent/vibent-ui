import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventPreviewComponent} from './event-preview.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EventPreviewComponent
  ],
  providers: [],
  exports: [EventPreviewComponent]
})
export class EventPreviewModule { }
