import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlanningBubblePreviewComponent } from './planning-bubble-preview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PlanningBubblePreviewComponent
  ],
  providers: [],
  exports: [PlanningBubblePreviewComponent]
})
export class PlanningBubblePreviewComponentModule {
}
