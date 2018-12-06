import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractBubbleSettingsComponent } from '../../../abstract/abstract-bubble-settings.component';

@Component({
  selector: 'checkbox-settings',
  templateUrl: './checkbox-settings.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxSettingsComponent extends AbstractBubbleSettingsComponent{

}
