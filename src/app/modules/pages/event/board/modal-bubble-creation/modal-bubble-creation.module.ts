import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalBubbleCreationComponent } from './modal-bubble-creation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ModalBubbleCreationComponent],
  exports: [ModalBubbleCreationComponent],
  providers: [],
})
export class ModalBubbleCreationComponentModule {
}
