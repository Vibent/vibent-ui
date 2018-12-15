import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProfileSettingsComponent } from '../dialogs/profile-settings/profile-settings.component';
import { User } from '../../../../shared/models/user';
import { UserManagementService } from '../../../../core/services/user-management.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit, OnDestroy {

  user: User;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              public dialogSettings: MatDialog,
              private userManagementService: UserManagementService) {
    this.user = this.userManagementService.getMe();
  }

  ngOnInit() {
    this.subscriptions.push(this.userManagementService.change$.subscribe(() => {
      this.user = this.userManagementService.getMe();
    }));
  }

  public openSettingsDialog(): void {
    this.dialogSettings.open(ProfileSettingsComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog',
      data: {user: this.user}
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

}
