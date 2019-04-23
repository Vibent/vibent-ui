import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Event } from '../../../../../shared/models/event';
import { EventParticipantsService } from '../../../../../core/services/event-participants.service';

declare const $: any;

@Component({
  selector: 'event-additional-infos',
  templateUrl: './event-additional-infos.component.html',
  styleUrls: ['./event-additional-infos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventAdditionalInfosComponent implements OnInit {

  @Input()
  event: Event;
  participantsNumber: number;
  invitedNumber: number;

  constructor(private eventParticipantsService: EventParticipantsService) {
  }

  ngOnInit(): void {
    this.participantsNumber = this.eventParticipantsService.getParticipants(this.event.participationRefs);
    this.invitedNumber = this.eventParticipantsService.getAllInvited(this.event.participationRefs);
  }

  openEventParticipantsModal() {
    $('#modalEventParticipants').modal('show');
  }
}
