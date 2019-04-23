import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {
  EventParticipant,
  ParticipantsSplitted
} from '../../../../../../shared/models/event-participant';
import { HttpService } from '../../../../../../core/http/http.service';
import { EventParticipantsService } from '../../../../../../core/services/event-participants.service';

declare const $: any;

@Component({
  selector: 'event-participants-preview',
  templateUrl: './event-participants-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EventParticipantsPreviewComponent implements OnInit {

  @Input()
  participationRefs: EventParticipant[];
  participantsSplitted: ParticipantsSplitted;

  constructor(private httpService: HttpService,
              private eventParticipantsService: EventParticipantsService) {
  }

  ngOnInit() {
    this.participantsSplitted = this.eventParticipantsService.splitParticipantsByResponse(this.participationRefs);
  }

  close(): void {
    $('#modalEventParticipants').modal('hide');
  }

}
