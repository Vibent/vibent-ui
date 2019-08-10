import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModalManagerService, VibentModals } from '../../../../../core/services/modal-manager.service';
import {
  EventCreationNavigationService,
  EventCreationState
} from '../../../../../core/services/event-creation-navigation.service';
import { Event } from '../../../../../shared/models/event';
import { VibentRoutes } from '../../../../../shared/components/base-component/base-component';
import { NotificationsService, NotificationType } from '../../../../../core/services/notifications.service';
import { MessageService } from '../../../../../core/services/i18n/message.service';

declare const $: any;

@Component({
  selector: 'event-creation',
  templateUrl: './event-creation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCreationComponent implements OnInit {

  createdEvent: Event;
  EventCreationState = EventCreationState;

  @Output()
  createdEventOutput = new EventEmitter<Event>();

  constructor(private modalManagerService: ModalManagerService,
              private cd: ChangeDetectorRef,
              private notificationService: NotificationsService,
              private messageService: MessageService,
              private router: Router,
              public navigation: EventCreationNavigationService) {
  }

  onNext() {
    this.cd.detectChanges();
  }

  onEventCreated(event: Event) {
    this.createdEvent = event;
    this.createdEventOutput.emit(event);
  }

  /**
   * We simulate back brower because of an unexplained issue:
   * 'hidden.bs.modal' on ngOnInit subscribe to modal close event but keeping
   * data-dismiss in close button do not work with router.navigate for a LazyLoaded route
   *
   */
  simulateBack() {
    window.history.back();
  }

  onClose() {
    if (this.navigation.checkState(EventCreationState.PARTICIPANTS)) {
      this.router.navigate([VibentRoutes.EVENTS_URL + '/' + this.createdEvent.ref]);
      this.notificationService.notify(this.messageService.EVENT_CREATED, NotificationType.SUCCESS);
    }
    this.navigation.purge();
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    $(VibentModals.EVENT_CREATION).on('hidden.bs.modal', () => {
      this.onClose();
    });
  }

}
