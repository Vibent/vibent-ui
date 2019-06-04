import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalManagerService, VibentModals } from '../../../../../core/services/modal-manager.service';
import {
  EventCreationNavigationService,
  EventCreationState
} from '../../../../../core/services/event-creation-navigation.service';
import { Event } from '../../../../../shared/models/event';

declare const $: any;

@Component({
  selector: 'event-creation',
  templateUrl: './event-creation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCreationComponent implements OnInit {

  createdEvent: Event;
  EventCreationState = EventCreationState;
  constructor(private modalManagerService: ModalManagerService,
              private cd: ChangeDetectorRef,
              private router: Router,
              public navigation: EventCreationNavigationService) {
  }

  onNext() {
    this.cd.detectChanges();
  }

  onEventCreated(event: Event) {
    this.createdEvent = event;
  }

  onClose() {
    if (this.navigation.checkState(EventCreationState.PARTICIPANTS)) {
      this.router.navigate(['/events/' + this.createdEvent.ref]);
    }
    this.navigation.purge();
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    // Case modal is closed by back browser
    $(VibentModals.EVENT_CREATION).on('hidden.bs.modal', () => {
      this.onClose();
    });
  }

}
