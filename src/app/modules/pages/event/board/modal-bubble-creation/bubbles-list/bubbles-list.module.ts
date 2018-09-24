import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubblesListComponent } from './bubbles-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [BubblesListComponent],
  exports: [BubblesListComponent]
})
export class ModalBubbleListComponentModule {
}
