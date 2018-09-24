import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlimentationBubblePreviewComponent } from './alimentation-bubble-preview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AlimentationBubblePreviewComponent
  ],
  providers: [],
  exports: [AlimentationBubblePreviewComponent]
})
export class AlimentationBubblePreviewComponentModule {
}
