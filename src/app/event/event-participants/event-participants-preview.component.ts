import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EventParticipant } from '../../models/event-participant';

@Component({
  selector: 'app-event-participants-preview',
  templateUrl: './event-participants-preview.component.html',
  styleUrls: ['./event-participants-preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EventParticipantsPreviewComponent implements OnInit {

  @Input()
  public participant: EventParticipant;

  constructor() {
  }

  ngOnInit() {
  }

  public getResponseCss(response: string): string {
    if (response === 'Participates') {
      return 'participate';
    }
    if (response === 'Don\'t know') {
      return 'idk';
    } else {
      return 'dontparticipate';
    }
  }
}
