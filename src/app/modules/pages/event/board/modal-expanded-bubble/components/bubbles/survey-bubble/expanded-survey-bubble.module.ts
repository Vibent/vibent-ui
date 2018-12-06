import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedSurveyBubbleComponent } from './expanded-survey-bubble.component';
import { SurveyOptionComponent } from './content/survey-option/survey-option.component';
import { SurveyOptionCreationComponent } from './content/survey-option-creation/survey-option-creation.component';
import { SurveyDataService } from '../../../../../../../../core/services/bubbles-services/survey/data/survey-data.service';
import { SurveyHttpService } from '../../../../../../../../core/services/bubbles-services/survey/http/survey-http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveySettingsComponent } from './settings/survey-settings.component';
import { SettingsDeleteBubbleModule } from '../../settings/settings-delete-bubble.module';
import { SurveyContentComponent } from './content/survey-content.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SettingsDeleteBubbleModule,
    ReactiveFormsModule
  ],
  declarations: [
    ExpandedSurveyBubbleComponent,
    SurveyContentComponent,
    SurveySettingsComponent,
    SurveyOptionComponent,
    SurveyOptionCreationComponent
  ],
  providers: [SurveyHttpService, SurveyDataService],
  exports: [ExpandedSurveyBubbleComponent]
})
export class ExpandedSurveyBubbleComponentModule {
}
