import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SurveyBubblePreviewComponent } from './survey-bubble-preview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SurveyBubblePreviewComponent
  ],
  providers: [],
  exports: [SurveyBubblePreviewComponent]
})
export class SurveyBubblePreviewComponentModule {
}
