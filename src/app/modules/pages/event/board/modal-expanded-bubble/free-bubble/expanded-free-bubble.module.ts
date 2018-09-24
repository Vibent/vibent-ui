import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedFreeBubbleComponent } from './expanded-free-bubble.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ExpandedFreeBubbleComponent
  ],
  providers: [],
  exports: [ExpandedFreeBubbleComponent]
})
export class ExpandedFreeBubbleComponentModule {
}
