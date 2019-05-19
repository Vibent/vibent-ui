import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Event } from '../../../../../shared/models/event';
import { EventParticipantsService } from '../../../../../core/services/event-participants.service';
import { Subscription } from 'rxjs';
import { ModalManagerService, VibentModals } from '../../../../../core/services/modal-manager.service';

@Component({
  selector: 'event-additional-infos',
  templateUrl: './event-additional-infos.component.html',
  styleUrls: ['./event-additional-infos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventAdditionalInfosComponent implements OnInit, OnDestroy {

  @Input()
  event: Event;
  participantsNumber: number;
  invitedNumber: number;
  subscriptions: Subscription[] = [];

  constructor(private eventParticipantsService: EventParticipantsService,
              private modalManagerService: ModalManagerService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.modalManagerService.initHandleBackBrowser(VibentModals.EVENT_PARTICIPANTS);
    this.initValues();
    this.subscriptions.push(this.eventParticipantsService.participationUpdated$.subscribe((eventParticipation) => {
      this.event.participationRefs[this.event.participationRefs
        .findIndex(p => p.userRef === eventParticipation.userRef)] = eventParticipation;
      this.initValues();
      this.cd.detectChanges();
    }));
  }

  openEventParticipantsModal() {
    this.modalManagerService.showModal(VibentModals.EVENT_PARTICIPANTS);
  }

  initValues() {
    this.participantsNumber = this.eventParticipantsService.getParticipants(this.event.participationRefs);
    this.invitedNumber = this.eventParticipantsService.getAllInvited(this.event.participationRefs);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
