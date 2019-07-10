import { Injectable } from '@angular/core';

export enum DistributionListState {
  EVENT_CHOICE = 'event-choice-dist-list',
  TITLE = 'title-dist-list',
  DESCRIPTION = 'description-dist-list',
  SUMMARY = 'summary-dist-list',
}

@Injectable()
export class DistributionListsNavigationService {

  state: DistributionListState = DistributionListState.EVENT_CHOICE;
  lastEvent = null;
  lastTitle = null;
  lastDescription = null;

  constructor() {
  }

  purge() {
    this.lastEvent = null;
    this.lastTitle = null;
    this.lastDescription = null;
    this.setState(DistributionListState.EVENT_CHOICE);
  }

  onBack() {
    if (this.checkState(DistributionListState.TITLE)) {
      this.setState(DistributionListState.EVENT_CHOICE);
    }
    if (this.checkState(DistributionListState.DESCRIPTION)) {
      this.setState(DistributionListState.TITLE);
    }
  }

  checkState(state: DistributionListState) {
    return this.state === state;
  }

  setState(state: DistributionListState) {
    this.state = state;
  }
}
