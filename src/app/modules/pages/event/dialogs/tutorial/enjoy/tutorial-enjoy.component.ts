import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Event } from '../../../../../../shared/models/event';
import { ModalManagerService, VibentModals } from '../../../../../../core/services/modal-manager.service';
import { Router } from '@angular/router';
import { TutorialNavigationService } from '../../../../../../core/services/tutorial-navigation.service';

@Component({
  selector: 'tutorial-enjoy',
  templateUrl: './tutorial-enjoy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TutorialEnjoyComponent {

  @Input()
  event: Event;

  constructor(public navigation: TutorialNavigationService,
              private router: Router,
              private modalManagerService: ModalManagerService) {
  }

  onNext() {
    this.modalManagerService.hideModal(VibentModals.TUTORIAL);
    this.navigation.purge();
  }
}
