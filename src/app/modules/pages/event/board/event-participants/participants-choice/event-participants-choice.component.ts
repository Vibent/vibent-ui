import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotificationsService, NotificationType } from '../../../../../../core/services/notifications.service';
import { HttpService } from '../../../../../../core/http/http.service';
import { EventParticipant, EventParticipantAnswer } from '../../../../../../shared/models/event-participant';
import { UserManagementService } from '../../../../../../core/services/user-management.service';
import { User } from '../../../../../../shared/models/user';
import { EventUpdateService } from '../../../../../../core/services/bubbles-services/event-update.service';

@Component({
  selector: 'event-participants-choice',
  templateUrl: './event-participants-choice.component.html'
})

export class EventParticipantsChoiceComponent implements OnInit {

  @Input()
  eventRef: string;
  userParticipation: EventParticipant;
  user: User;
  @Output()
  userParticipationEmiter = new EventEmitter<EventParticipant>();
  participationEventAnswer = EventParticipantAnswer;

  constructor(private notificationService: NotificationsService,
              private userManagementService: UserManagementService,
              private eventUpdateService: EventUpdateService,
              private httpService: HttpService) {
    this.user = this.userManagementService.getMe();
  }

  ngOnInit() {
    this.httpService.getEventParticipations(this.eventRef).subscribe((participations) => {
        this.userParticipation = participations.find(participation => this.user.ref === participation.userRef);
      }
    );
  }

  onParticipate() {
    if (!(this.userParticipation.answer === EventParticipantAnswer.YES)) {
      this.updateParticipation(EventParticipantAnswer.YES);
      this.notificationService.notify('You are participating in this event', NotificationType.SUCCESS);
    }
  }

  onMaybe() {
    if (!(this.userParticipation.answer === EventParticipantAnswer.MAYBE)) {
      this.updateParticipation(EventParticipantAnswer.MAYBE);
      this.notificationService.notify('You don\'t know yet', NotificationType.INFO);
    }
  }

  onNot() {
    if (!(this.userParticipation.answer === EventParticipantAnswer.NO)) {
      this.updateParticipation(EventParticipantAnswer.NO);
      this.httpService.patchEventParticipations(this.userParticipation).subscribe();
      this.notificationService.notify('You are not participating in this event', NotificationType.DANGER);
    }
  }

  updateParticipation(answer: EventParticipantAnswer) {
    this.userParticipation.answer = answer;
    this.httpService.patchEventParticipations(this.userParticipation).subscribe(() => this.eventUpdateService.updateEventExclusive(this.eventRef));
    this.userParticipationEmiter.emit(this.userParticipation);
  }

}
