import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum EventCreationState {
  TITLE = 'event-creation-title',
  DESCRIPTION = 'event-creation-description',
  DATE = 'event-creation-date',
  PARTICIPANTS = 'event-creation-participants',
}

@Injectable()
export class EventCreationNavigationService {

  state: EventCreationState = EventCreationState.TITLE;
  lastTitle = null;
  lastDescription = null;
  lastDate = null;
  // In case user close modal on title state, we need to erase form (changes are detected for others)
  titleStateOnClose = new Subject();

  constructor() {
  }

  purge() {
    this.lastTitle = null;
    this.lastDescription = null;
    this.lastDate = null;
    this.setState(EventCreationState.TITLE);
    this.titleStateOnClose.next();
  }

  onBack() {
    if (this.checkState(EventCreationState.DESCRIPTION)) {
      this.setState(EventCreationState.TITLE);
    } else if (this.checkState(EventCreationState.DATE)) {
      this.setState(EventCreationState.DESCRIPTION);
    }
  }

  checkState(state: EventCreationState) {
    return this.state === state;
  }

  setState(state: EventCreationState) {
    this.state = state;
  }
}
