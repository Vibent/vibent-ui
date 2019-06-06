import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventCreationNavigationService } from '../../../../../../core/services/event-creation-navigation.service';
import { Event } from '../../../../../../shared/models/event';
import { ModalManagerService, VibentModals } from '../../../../../../core/services/modal-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'event-creation-participants',
  templateUrl: './event-creation-participants.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCreationParticipantsComponent {

  @Output()
  change = new EventEmitter();
  @Input()
  event: Event;

  constructor(public navigation: EventCreationNavigationService,
              private router: Router,
              private modalManagerService: ModalManagerService) {
  }

  onNext() {
    this.modalManagerService.hideModal(VibentModals.EVENT_CREATION);
    this.navigation.purge();
    this.router.navigate(['/events/' +  this.event.ref]);
  }

}
