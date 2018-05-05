import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventPreviewComponent} from './event-preview.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    EventPreviewComponent
  ],
  providers: [],
  exports: [EventPreviewComponent]
})
export class EventPreviewModule { }
