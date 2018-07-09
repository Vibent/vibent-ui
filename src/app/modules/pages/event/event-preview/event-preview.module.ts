import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventPreviewComponent } from './event-preview.component';
import { RouterModule } from '@angular/router';
import { AdditionalEventInfoService } from '../../../../core/services/additional-event-info.service.';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    EventPreviewComponent
  ],
  providers: [AdditionalEventInfoService],
  exports: [EventPreviewComponent]
})
export class EventPreviewModule {
}
