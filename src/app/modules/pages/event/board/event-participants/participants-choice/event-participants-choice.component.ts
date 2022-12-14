import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NotificationsService, NotificationType } from '../../../../../../core/services/notifications.service';
import { HttpService } from '../../../../../../core/http/http.service';
import { EventParticipant, EventParticipantAnswer } from '../../../../../../shared/models/event-participant';
import { UserManagementService } from '../../../../../../core/services/user-management.service';
import { User } from '../../../../../../shared/models/user';
import { EventUpdateService } from '../../../../../../core/services/bubbles-services/event-update.service';
import { EventParticipantsService } from '../../../../../../core/services/event-participants.service';
import { MessageService } from '../../../../../../core/services/i18n/message.service';

@Component({
  selector: 'event-participants-choice',
  templateUrl: './event-participants-choice.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EventParticipantsChoiceComponent implements OnInit {

  @Input()
  eventRef: string;
  fullUserParticipation: EventParticipant;
  user: User;
  participationEventAnswer = EventParticipantAnswer;

  constructor(private notificationService: NotificationsService,
              private userManagementService: UserManagementService,
              private messageService: MessageService,
              private cd: ChangeDetectorRef,
              private eventParticipantsService: EventParticipantsService,
              private eventUpdateService: EventUpdateService,
              private httpService: HttpService) {
    this.user = this.userManagementService.getMe();
  }

  ngOnInit() {
    // get full participation info
    this.httpService.getEventParticipations(this.eventRef).subscribe((participations) => {
        this.fullUserParticipation = participations.find(participation => this.user.ref === participation.userRef);
        this.cd.detectChanges();
      }
    );
  }

  onParticipate() {
    if (!(this.fullUserParticipation.answer === EventParticipantAnswer.YES)) {
      this.updateParticipation(EventParticipantAnswer.YES);
      this.notificationService.notify(this.messageService.PARTICIPATING_EVENT, NotificationType.SUCCESS);
    }
  }

  onMaybe() {
    if (!(this.fullUserParticipation.answer === EventParticipantAnswer.MAYBE)) {
      this.updateParticipation(EventParticipantAnswer.MAYBE);
      this.notificationService.notify(this.messageService.YOU_DONT_KNOW_YET, NotificationType.INFO);
    }
  }

  onNot() {
    if (!(this.fullUserParticipation.answer === EventParticipantAnswer.NO)) {
      this.updateParticipation(EventParticipantAnswer.NO);
      this.httpService.patchEventParticipations(this.fullUserParticipation).subscribe();
      this.notificationService.notify(this.messageService.NOT_PARTICIPATING_EVENT, NotificationType.DANGER);
    }
  }

  updateParticipation(answer: EventParticipantAnswer) {
    this.fullUserParticipation.answer = answer;
    this.httpService.patchEventParticipations(this.fullUserParticipation).subscribe(() => this.eventUpdateService.updateEventExclusive(this.eventRef));
    this.eventParticipantsService.onParticipationUpdate(this.fullUserParticipation);
  }

}
