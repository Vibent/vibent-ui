import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubblePreviewController } from './bubble-preview-controller.component';
import { RouterModule } from '@angular/router';
import { CheckboxBubblePreviewComponentModule } from './checkbox-bubble/checkbox-bubble-preview.module';
import { TravelBubblePreviewComponentModule } from './travel-bubble/travel-bubble-preview.module';
import { FreeBubblePreviewComponentModule } from './free-bubble/free-bubble-preview.module';
import { PlanningBubblePreviewComponentModule } from './planning-bubble/planning-bubble-preview.module';
import { SurveyBubblePreviewComponentModule } from './survey-bubble/survey-bubble-preview.module';
import { AlimentationBubblePreviewComponentModule } from './alimentation-bubble/alimentation-bubble-preview.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AlimentationBubblePreviewComponentModule,
    CheckboxBubblePreviewComponentModule,
    TravelBubblePreviewComponentModule,
    FreeBubblePreviewComponentModule,
    PlanningBubblePreviewComponentModule,
    SurveyBubblePreviewComponentModule
  ],
  declarations: [
    BubblePreviewController,
  ],
  providers: [],
  exports: [BubblePreviewController]
})
export class BubblePreviewControllerModule {
}
