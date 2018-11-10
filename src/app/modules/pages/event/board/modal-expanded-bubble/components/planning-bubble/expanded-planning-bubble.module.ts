import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedPlanningBubbleComponent } from './expanded-planning-bubble.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ExpandedPlanningBubbleComponent
  ],
  providers: [],
  exports: [ExpandedPlanningBubbleComponent]
})
export class ExpandedPlanningBubbleComponentModule {
}
