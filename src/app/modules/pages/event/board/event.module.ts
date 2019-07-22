import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { EventParticipantsPreviewModule } from './event-participants/participants-preview/event-participants-preview.module';
import { BubblePreviewControllerModule } from '../bubbles-preview/bubble-preview-controller.module';
import { ExpandedBubbleControllerModule } from './modal-expanded-bubble/controller/expanded-bubble-controller.module';
import { ModalBubbleCreationComponentModule } from './modal-bubble-creation/modal-bubble-creation.module';
import { EventUpdateService } from '../../../../core/services/bubbles-services/event-update.service';
import { BlacknoteService } from '../../../../core/services/blacknote/blacknote.service';
import { EventParticipantsChoiceModule } from './event-participants/participants-choice/event-participants-choice.module';
import { EventSettingsModule } from '../../../../core/admin-panels/event/dialogs/event-settings/event-settings.module';
import { EventParticipantsService } from '../../../../core/services/event-participants.service';
import { EventAdditionalInfosComponent } from './event-additional-infos/event-additional-infos.component';
import { AddBubbleIconComponent } from './add-bubble-icon/add-bubble-icon.component';


const routes: Routes = [
  {
    path: '',
    component: EventComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    EventParticipantsPreviewModule,
    EventParticipantsChoiceModule,
    EventSettingsModule,
    BubblePreviewControllerModule,
    ExpandedBubbleControllerModule,
    ModalBubbleCreationComponentModule
  ],
  declarations: [
    EventComponent,
    EventAdditionalInfosComponent,
    AddBubbleIconComponent
  ],
  providers: [EventUpdateService, BlacknoteService, EventParticipantsService],
  exports: [RouterModule]
})
export class EventModule {
}
