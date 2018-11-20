import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoadingPageComponent } from '../loading-page/loading-page.component';

@Injectable()
export class LoaderService {

  eventUpdated = false;
  eventUpdateCanBeDisplayed = true;
  dialogRef: MatDialogRef<LoadingPageComponent> = null;
  private pendingRequests = 0;
  private modalDisplayedCount = 0;

  constructor(public dialog: MatDialog) {
  }

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

  displayLoadingPageModal() {
    this.modalDisplayedCount++;
    if (!this.dialogRef) {
      this.dialogRef = this.dialog.open(LoadingPageComponent, {
        maxWidth: '100vw',
        maxHeight: '100vh',
        panelClass: 'full-screen-dialog-loader',
      });
    }
  }

  closeLoadingPageModal() {
    if (this.modalDisplayedCount > 0) {
      this.modalDisplayedCount--;
    }
    if (this.dialogRef && this.modalDisplayedCount === 0) {
      this.dialogRef.close();
      this.dialogRef = null;
    }
  }

}