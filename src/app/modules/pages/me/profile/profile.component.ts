import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProfileSettingsComponent } from '../dialogs/profile-settings/profile-settings.component';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public user: User;

  constructor(private route: ActivatedRoute, public dialogSettings: MatDialog) {
    this.user = this.route.snapshot.data['user'];
  }

  ngOnInit() {

  }

  public openSettingsDialog(): void {
    this.dialogSettings.open(ProfileSettingsComponent, {
      data: {user: this.user}
    });
  }

}
