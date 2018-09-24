import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TravelBubblePreviewComponent } from './travel-bubble-preview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TravelBubblePreviewComponent
  ],
  providers: [],
  exports: [TravelBubblePreviewComponent]
})
export class TravelBubblePreviewComponentModule {
}
