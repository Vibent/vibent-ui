import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubblesExplanationsComponent } from './bubbles-explanations.component';
import { RouterModule } from '@angular/router';
import { AlimentationExplanationComponent } from './alimentation/alimentation-explanation.component';
import { CheckboxExplanationComponent } from './checkbox/checkbox-explanation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyExplanationComponent } from './survey/survey-explanation.component';
import { PlanningExplanationComponent } from './planning/planning-explanation.component';

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
    SurveyExplanationComponent],
  exports: [
    BubblesExplanationsComponent,
    AlimentationExplanationComponent,
    CheckboxExplanationComponent,
    PlanningExplanationComponent,
    SurveyExplanationComponent],
})
export class ModalBubbleExplanationComponentModule {
}
