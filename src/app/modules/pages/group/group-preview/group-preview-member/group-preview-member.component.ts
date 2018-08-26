import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../../core/http/http.service';
import { ProfileImageService } from '../../../../../core/http/profile-image.service';
import { Membership } from '../../../../../shared/models/membership';

@Component({
  selector: 'app-group-preview-member',
  templateUrl: './group-preview-member.component.html',
})

export class GroupPreviewMemberComponent implements OnInit {

  @Input()
  membership: Membership;
  user: User = null;

  constructor(private httpService: HttpService, private profileImageService: ProfileImageService) {
  }

  ngOnInit() {
    this.httpService.getUser(this.membership.userRef).subscribe((user) => {
      this.user = user;
      if (!this.user.imagePath) {
        this.initValues();
      }
    });

  }

  initValues() {
    this.profileImageService.getProfileImage(this.membership.userRef).subscribe((data) => {
      this.profileImageService.setUserImageFromBlob(this.user, data);
      },
      () => this.profileImageService.setUserImageFromGravatar(this.user));
  }

}
