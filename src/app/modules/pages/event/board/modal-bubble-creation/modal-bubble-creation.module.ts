import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalBubbleCreationComponent } from './modal-bubble-creation.component';
import { RouterModule } from '@angular/router';
import { BubbleCreationService } from '../../../../../core/services/bubbles-services/bubble-creation.service.';
import { BubblesCreationsNotification } from '../../../../../core/services/bubbles-services/alerts/bubbles-creations-notification.service';
import { ModalBubbleListComponentModule } from './bubbles-list/bubbles-list.module';
import { ModalBubbleExplanationComponentModule } from './bubbles-explanations/bubbles-explanations.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModalBubbleExplanationComponentModule,
    ModalBubbleListComponentModule
  ],
  declarations: [ModalBubbleCreationComponent],
  exports: [ModalBubbleCreationComponent],
  providers: [BubbleCreationService, BubblesCreationsNotification],
})
export class ModalBubbleCreationComponentModule {
}
