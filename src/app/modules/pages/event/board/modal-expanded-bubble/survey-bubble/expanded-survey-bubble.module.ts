import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedSurveyBubbleComponent } from './expanded-survey-bubble.component';
import { SurveyOptionComponent } from './survey-option/survey-option.component';
import { SurveyOptionCreationComponent } from './survey-option-creation/survey-option-creation.component';
import { SurveyDataService } from '../../../../../../core/services/bubbles-services/survey/data/survey-data.service';
import { SurveyHttpService } from '../../../../../../core/services/bubbles-services/survey/http/survey-http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ExpandedSurveyBubbleComponent,
    SurveyOptionComponent,
    SurveyOptionCreationComponent
  ],
  providers: [SurveyHttpService, SurveyDataService],
  exports: [ExpandedSurveyBubbleComponent, SurveyOptionComponent, SurveyOptionCreationComponent]
})
export class ExpandedSurveyBubbleComponentModule {
}
