import { FormControl, FormGroup } from '@angular/forms';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { TutorialNavigationService, TutorialState } from '../../../../../../core/services/tutorial-navigation.service';

@Component({
  selector: 'tutorial-profile',
  templateUrl: './tutorial-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TutorialProfileComponent {

  @Output()
  change = new EventEmitter();
  form: FormGroup;
  description: FormControl;

  constructor(public navigation: TutorialNavigationService) {
  }

  onNext() {
    this.navigation.setState(TutorialState.ENJOY);
    this.change.emit();
  }
}
