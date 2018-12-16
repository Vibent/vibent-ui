import { Component, Input, OnInit } from '@angular/core';
import { EventParticipant, EventParticipantAnswer } from '../../../../../../shared/models/event-participant';
import { User } from '../../../../../../shared/models/user';
import { LoaderSize } from '../../../../../../shared/global/constants';
import { HttpService } from '../../../../../../core/http/http.service';

@Component({
  selector: 'app-event-participants-preview',
  templateUrl: './event-participants-preview.component.html'
})

export class EventParticipantsPreviewComponent implements OnInit {

  @Input()
  participant: EventParticipant;
  user: User = null;
  loaderSize = LoaderSize.small;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getUser(this.participant.userRef).subscribe((user) => {
      this.user = user;
    });
  }

  public getResponseCss(response: string): string {

    if (response === EventParticipantAnswer.YES) {
      return 'yes';
    }
    if (response === EventParticipantAnswer.UNANSWERED) {
      return 'unanswered';
    }
    if (response === EventParticipantAnswer.MAYBE) {
      return 'maybe';
    } else {
      return 'no';
    }
  }
}
