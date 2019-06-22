import { FormControl, FormGroup } from '@angular/forms';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { TutorialNavigationService, TutorialState } from '../../../../../../core/services/tutorial-navigation.service';

@Component({
  selector: 'tutorial-create-event',
  templateUrl: './tutorial-create-event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TutorialCreateEventComponent {

  @Output()
  change = new EventEmitter();
  form: FormGroup;
  description: FormControl;

  constructor(public navigation: TutorialNavigationService) {
  }

  onNext() {
    this.navigation.setState(TutorialState.JOIN_EVENT);
    this.change.emit();
  }
}
