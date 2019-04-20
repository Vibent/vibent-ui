import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlimentationBubblePreviewComponent } from './alimentation-bubble-preview.component';
import { BubbleContributorIconsModule } from '../bubble-contributor-icons/bubble-contributor-icons.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BubbleContributorIconsModule,
  ],
  declarations: [
    AlimentationBubblePreviewComponent
  ],
  providers: [],
  exports: [AlimentationBubblePreviewComponent]
})
export class AlimentationBubblePreviewComponentModule {
}
