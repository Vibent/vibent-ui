import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {

  private pendingRequests = 0;
  eventUpdated = false;
  eventUpdateCanBeDisplayed = true;

  addPendingRequest() {
    this.pendingRequests++;
    this.checkFaultyPending();
  }

  deletePendingRequest() {
    this.pendingRequests--;
  }

  // allow spinner to be displayed 1sec
  // avoid spinner displayed more than 1 time every 2sec
  displayForEventUpdate() {
    if (this.eventUpdateCanBeDisplayed) {
      this.eventUpdated = true;
      this.eventUpdateCanBeDisplayed = false;
      setTimeout(() => {
        this.eventUpdated = false;
      }, 1000);
      setTimeout(() => {
        this.eventUpdateCanBeDisplayed = true;
      }, 2000);
    }
  }

  displayLoader() {
    return this.pendingRequests > 0;
  }

  checkFaultyPending() {
    const a = this.pendingRequests;
    setTimeout(() => {
      if (this.pendingRequests !== 0 && a === this.pendingRequests) {
        this.pendingRequests = 0;
      }
    }, 7000);
  }

}