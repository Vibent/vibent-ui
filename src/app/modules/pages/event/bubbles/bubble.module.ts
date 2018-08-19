import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bubble } from './bubble.component';
import { RouterModule } from '@angular/router';
import { AdditionalEventInfoService } from '../../../../core/services/additional-event-info.service.';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    Bubble
  ],
  providers: [],
  exports: [Bubble]
})
export class BubbleModule {
}
