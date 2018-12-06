import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractBubbleSettingsComponent } from '../../../abstract/abstract-bubble-settings.component';

@Component({
  selector: 'free-settings',
  templateUrl: './free-settings.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FreeSettingsComponent extends AbstractBubbleSettingsComponent {

}
