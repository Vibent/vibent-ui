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
  public userProfileImage: File = null;

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
    this.profileImageService.getProfileImage(this.user.ref).subscribe((data) => {this.createImageFromBlob(data); });
  }

  public createImageFromBlob(image: Blob): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.userProfileImage = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  public openSettingsDialog(): void {
    this.dialogSettings.open(ProfileSettingsComponent, {
      data: {user: this.user}
    });
  }

}
