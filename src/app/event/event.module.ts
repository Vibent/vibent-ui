import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { RouterModule } from '@angular/router';
import { EventParticipantsPreviewModule } from './event-participants/event-participants-preview.module';
import { AngularDraggableModule } from 'angular2-draggable';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EventParticipantsPreviewModule,
    AngularDraggableModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
  ],
  declarations: [
    EventComponent
  ],
  providers: [],
})
export class EventModule {
}
