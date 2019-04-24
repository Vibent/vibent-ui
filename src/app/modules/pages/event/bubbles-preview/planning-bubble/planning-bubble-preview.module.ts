import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlanningBubblePreviewComponent } from './planning-bubble-preview.component';
import { BubbleContributorIconsModule } from '../bubble-contributor-icons/bubble-contributor-icons.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BubbleContributorIconsModule
  ],
  declarations: [
    PlanningBubblePreviewComponent
  ],
  providers: [],
  exports: [PlanningBubblePreviewComponent]
})
export class PlanningBubblePreviewComponentModule {
}
