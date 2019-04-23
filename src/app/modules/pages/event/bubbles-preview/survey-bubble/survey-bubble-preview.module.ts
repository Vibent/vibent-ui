import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SurveyBubblePreviewComponent } from './survey-bubble-preview.component';
import { BubbleContributorIconsModule } from '../bubble-contributor-icons/bubble-contributor-icons.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BubbleContributorIconsModule
  ],
  declarations: [
    SurveyBubblePreviewComponent
  ],
  providers: [],
  exports: [SurveyBubblePreviewComponent]
})
export class SurveyBubblePreviewComponentModule {
}
