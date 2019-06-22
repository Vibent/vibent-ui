import { Injectable } from '@angular/core';

export enum TutorialState {
  WELCOME = 'tutorial-welcome',
  CREATE_EVENT = 'tutorial-create-event',
  JOIN_EVENT = 'tutorial-join-event',
  PROFILE = 'tutorial-profile',
  ENJOY = 'tutorial-enjoy',
}

@Injectable()
export class TutorialNavigationService {

  state: TutorialState = TutorialState.WELCOME;

  constructor() {
  }

  purge() {
    this.setState(TutorialState.WELCOME);
  }

  onBack() {
    switch (this.state) {
      case TutorialState.CREATE_EVENT:
        this.setState(TutorialState.WELCOME);
        break;
      case TutorialState.JOIN_EVENT:
        this.setState(TutorialState.CREATE_EVENT);
        break;
      case TutorialState.PROFILE:
        this.setState(TutorialState.JOIN_EVENT);
        break;
      case TutorialState.ENJOY:
        this.setState(TutorialState.PROFILE);
        break;
    }
  }

  checkState(state: TutorialState) {
    return this.state === state;
  }

  setState(state: TutorialState) {
    this.state = state;
  }
}
