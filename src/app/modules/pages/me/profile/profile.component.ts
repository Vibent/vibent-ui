import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProfileSettingsComponent } from '../dialogs/profile-settings/profile-settings.component';
import { User } from '../../../../shared/models/user';
import { ProfileImageService } from '../../../../core/http/profile-image.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public user: User;

  constructor(private route: ActivatedRoute,
              public dialogSettings: MatDialog,
              private profileImageService: ProfileImageService) {
    this.user = this.route.snapshot.data['user'];
    this.initValues();
  }

  ngOnInit() {
    this.profileImageService.change.subscribe(() => {
      this.initValues();
    });
  }

  initValues() {
    this.profileImageService.getProfileImage(this.user.ref).subscribe((data) => {
      this.profileImageService.setUserImageFromBlob(this.user, data);
    },
      () => this.profileImageService.setUserImageFromGravatar(this.user));
  }

  public openSettingsDialog(): void {
    this.dialogSettings.open(ProfileSettingsComponent, {
      data: {user: this.user}
    });
  }

}
