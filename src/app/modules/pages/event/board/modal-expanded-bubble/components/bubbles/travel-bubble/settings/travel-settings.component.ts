import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractBubbleSettingsComponent } from '../../../abstract/abstract-bubble-settings.component';

@Component({
  selector: 'travel-settings',
  templateUrl: './travel-settings.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelSettingsComponent extends AbstractBubbleSettingsComponent {


}
