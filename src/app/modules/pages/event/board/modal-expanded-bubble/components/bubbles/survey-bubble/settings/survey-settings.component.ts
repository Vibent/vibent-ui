import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractBubbleSettingsComponent } from '../../../abstract/abstract-bubble-settings.component';

@Component({
  selector: 'survey-settings',
  templateUrl: './survey-settings.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveySettingsComponent extends AbstractBubbleSettingsComponent{

}
