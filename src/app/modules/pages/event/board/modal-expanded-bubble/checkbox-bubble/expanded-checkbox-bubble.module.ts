import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedCheckboxBubbleComponent } from './expanded-checkbox-bubble.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ExpandedCheckboxBubbleComponent
  ],
  providers: [],
  exports: [ExpandedCheckboxBubbleComponent]
})
export class ExpandedCheckboxBubbleComponentModule {
}
