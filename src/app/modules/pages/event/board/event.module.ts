import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { RouterModule } from '@angular/router';
import { EventParticipantsPreviewModule } from './event-participants/event-participants-preview.module';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
import { BubblePreviewControllerModule } from '../bubbles-preview/bubble-preview-controller.module';
import { ExpandedBubbleControllerModule} from './modal-expanded-bubble/expanded-bubble-controller.module';
import { ModalBubbleCreationComponentModule } from './modal-bubble-creation/modal-bubble-creation.module';
import { AlimentationBubbleService } from "app/core/services/bubbles-services/alimentation-bubble.service.";
import { EventUpdateService } from '../../../../core/services/bubbles-services/event-update.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EventParticipantsPreviewModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    BubblePreviewControllerModule,
    ExpandedBubbleControllerModule,
    ModalBubbleCreationComponentModule
  ],
  declarations: [
    EventComponent,
  ],
  providers: [AlimentationBubbleService, EventUpdateService],
})
export class EventModule {
}
