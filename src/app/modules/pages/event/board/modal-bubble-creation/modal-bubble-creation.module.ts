import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalBubbleCreationComponent } from './modal-bubble-creation.component';
import { RouterModule } from '@angular/router';
import { BubbleCreationService } from '../../../../../core/services/bubbles-services/bubble-creation.service.';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ModalBubbleCreationComponent],
  exports: [ModalBubbleCreationComponent],
  providers: [BubbleCreationService],
})
export class ModalBubbleCreationComponentModule {
}
