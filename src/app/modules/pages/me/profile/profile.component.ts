import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProfileSettingsComponent } from '../dialogs/profile-settings/profile-settings.component';
import { User } from '../../../../shared/models/user';
import { UserManagementService } from '../../../../core/services/user-management.service';

declare const $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public user: User;

  constructor(private route: ActivatedRoute,
              public dialogSettings: MatDialog,
              private userManagementService: UserManagementService) {
    this.user = this.userManagementService.getMe();
  }

  ngOnInit() {
    this.userManagementService.change.subscribe(() => {
      this.user = this.userManagementService.getMe();
    });
    $(() => {
      $('.tooltip-activation').tooltip();
    });
  }

  public openSettingsDialog(): void {
    this.dialogSettings.open(ProfileSettingsComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog',
      data: {user: this.user}
    });
  }

}
