import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TravelBubblePreviewComponent } from './travel-bubble-preview.component';
import { BubbleContributorIconsModule } from '../bubble-contributor-icons/bubble-contributor-icons.module';
import { SeatsIconsModule } from './seats-icons/seats-icons.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BubbleContributorIconsModule,
    SeatsIconsModule
  ],
  declarations: [
    TravelBubblePreviewComponent,
  ],
  providers: [],
  exports: [TravelBubblePreviewComponent]
})
export class TravelBubblePreviewComponentModule {
}
