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
import { BubblePreviewControllerModule } from '../bubbles-preview/bubble-preview-controller.module';
import {ExpandedBubbleControllerModule} from './modal-expanded-bubble/expanded-bubble-controller.module';

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
    BubblePreviewControllerModule,
    ExpandedBubbleControllerModule,
  ],
  declarations: [
    EventComponent,
  ],
  providers: [],
})
export class EventModule {
}
