import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EventParticipant, ParticipantsSplitted } from '../../../../../../shared/models/event-participant';
import { HttpService } from '../../../../../../core/http/http.service';
import { EventParticipantsService } from '../../../../../../core/services/event-participants.service';
import { Subscription } from 'rxjs';

declare const $: any;

@Component({
  selector: 'event-participants-preview',
  templateUrl: './event-participants-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EventParticipantsPreviewComponent implements OnInit, OnDestroy {

  @Input()
  participationRefs: EventParticipant[];
  participantsSplitted: ParticipantsSplitted;
  subscriptions: Subscription[] = [];

  constructor(private httpService: HttpService,
              private eventParticipantsService: EventParticipantsService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscriptions.push(this.eventParticipantsService.participationUpdated$.subscribe((eventParticipation) => {
      this.participationRefs[this.participationRefs
        .findIndex(p => p.userRef === eventParticipation.userRef)] = eventParticipation;
      this.initValues();
      this.cd.detectChanges();
    }));
    this.initValues();
  }

  initValues() {
    this.participantsSplitted = this.eventParticipantsService.splitParticipantsByResponse(this.participationRefs);
  }

  close(): void {
    $('#modalEventParticipants').modal('hide');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

}
