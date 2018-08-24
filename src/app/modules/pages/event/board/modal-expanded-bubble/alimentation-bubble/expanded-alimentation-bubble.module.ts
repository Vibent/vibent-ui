import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedAlimentationBubbleComponent } from './expanded-alimentation-bubble.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ExpandedAlimentationBubbleComponent
  ],
  providers: [],
  exports: [ExpandedAlimentationBubbleComponent]
})
export class ExpandedAlimentationBubbleComponentModule {
}
