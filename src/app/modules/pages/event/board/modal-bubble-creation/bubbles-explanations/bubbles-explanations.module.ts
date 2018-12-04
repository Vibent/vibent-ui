import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubblesExplanationsComponent } from './bubbles-explanations.component';
import { RouterModule } from '@angular/router';
import { AlimentationExplanationComponent } from './alimentation/alimentation-explanation.component';
import { CheckboxExplanationComponent } from './checkbox/checkbox-explanation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyExplanationComponent } from './survey/survey-explanation.component';
import { PlanningExplanationComponent } from './planning/planning-explanation.component';
import { TravelExplanationComponent } from './travel/travel-explanation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BubblesExplanationsComponent,
    AlimentationExplanationComponent,
    CheckboxExplanationComponent,
    PlanningExplanationComponent,
    TravelExplanationComponent,
    SurveyExplanationComponent],
  exports: [
    BubblesExplanationsComponent,
    AlimentationExplanationComponent,
    CheckboxExplanationComponent,
    TravelExplanationComponent,
    PlanningExplanationComponent,
    SurveyExplanationComponent],
})
export class ModalBubbleExplanationComponentModule {
}
