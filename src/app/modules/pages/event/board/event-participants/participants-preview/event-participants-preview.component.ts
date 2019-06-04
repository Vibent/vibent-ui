import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EventParticipant, ParticipantsSplitted } from '../../../../../../shared/models/event-participant';
import { HttpService } from '../../../../../../core/http/http.service';
import { EventParticipantsService } from '../../../../../../core/services/event-participants.service';
import { Subscription } from 'rxjs';
import { ModalManagerService, VibentModals } from '../../../../../../core/services/modal-manager.service';

declare const $: any;

@Component({
  selector: 'event-participants-preview',
  templateUrl: './event-participants-preview.component.html',
  styleUrls: ['./event-participants-preview.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EventParticipantsPreviewComponent implements OnInit, OnDestroy {

  @Input()
  participationRefs: EventParticipant[];
  @Input()
  eventRef: string;
  participantsSplitted: ParticipantsSplitted;
  subscriptions: Subscription[] = [];
  invitationOpen = false;

  constructor(private httpService: HttpService,
              private modalManagerService: ModalManagerService,
              private eventParticipantsService: EventParticipantsService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscriptions.push(this.eventParticipantsService.participationUpdated$.subscribe((eventParticipation) => {
      this.participationRefs[this.participationRefs
        .findIndex(p => p.userRef === eventParticipation.userRef)] = eventParticipation;
      this.initValues();
    }));
    this.initValues();
    // Case modal is closed by back browser
    $(VibentModals.EVENT_PARTICIPANTS).on('hidden.bs.modal', () => {
      this.offInvitation();
    });
  }

  onInvitation() {
    this.invitationOpen = true;
    this.cd.detectChanges();
  }

  offInvitation() {
    this.invitationOpen = false;
    this.cd.detectChanges();
  }

  initValues() {
    this.participantsSplitted = this.eventParticipantsService.splitParticipantsByResponse(this.participationRefs);
    this.cd.detectChanges();
  }

  close(): void {
    this.offInvitation();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

}
