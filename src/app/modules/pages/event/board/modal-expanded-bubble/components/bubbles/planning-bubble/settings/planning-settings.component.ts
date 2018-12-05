import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractBubbleSettingsComponent } from '../../../abstract/abstract-bubble-settings.component';

@Component({
  selector: 'planning-settings',
  templateUrl: './planning-settings.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanningSettingsComponent extends AbstractBubbleSettingsComponent {

}
