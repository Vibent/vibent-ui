import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { TutorialNavigationService, TutorialState } from '../../../../../../core/services/tutorial-navigation.service';

@Component({
  selector: 'tutorial-welcome',
  templateUrl: './tutorial-welcome.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TutorialWelcomeComponent {

  @Output()
  change = new EventEmitter();

  constructor(public navigation: TutorialNavigationService) {
  }

  onNext() {
    this.navigation.setState(TutorialState.CREATE_EVENT);
    this.change.emit();
  }
}
