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
  userProfileImage: File = null;

  constructor(private httpService: HttpService, private profileImageService: ProfileImageService) {
  }

  ngOnInit() {
    this.httpService.getUser(this.membership.userRef).subscribe((user) => {
      this.user = user;
    });
    this.profileImageService.getProfileImage(this.membership.userRef).subscribe((data) => {
      this.createImageFromBlob(data);
    });
    this.profileImageService.change.subscribe(() => {
      this.initValues();
    });
  }


  initValues() {
    this.profileImageService.getProfileImage(this.membership.userRef).subscribe((data) => {
      this.createImageFromBlob(data);
    });
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

}
