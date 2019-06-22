import { FormControl, FormGroup } from '@angular/forms';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { TutorialNavigationService, TutorialState } from '../../../../../../core/services/tutorial-navigation.service';

@Component({
  selector: 'tutorial-join-event',
  templateUrl: './tutorial-join-event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TutorialJoinEventComponent {

  @Output()
  change = new EventEmitter();
  form: FormGroup;
  description: FormControl;

  constructor(public navigation: TutorialNavigationService) {
  }

  onNext() {
    this.navigation.setState(TutorialState.PROFILE);
    this.change.emit();
  }
}
