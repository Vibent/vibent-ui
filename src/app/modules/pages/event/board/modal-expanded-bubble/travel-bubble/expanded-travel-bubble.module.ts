import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedTravelBubbleComponent } from './expanded-travel-bubble.component';
import { MatButtonModule, MatInputModule, MatRippleModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
  ],
  declarations: [
    ExpandedTravelBubbleComponent
  ],
  providers: [],
  exports: [ExpandedTravelBubbleComponent]
})
export class ExpandedTravelBubbleComponentModule {
}
