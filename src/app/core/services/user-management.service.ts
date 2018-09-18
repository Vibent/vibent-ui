import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpService } from '../http/http.service';
import { User } from '../../shared/models/user';
import { ProfileImageService } from '../http/profile-image.service';

@Injectable()
export class UserManagementService {

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor(private httpService: HttpService,
              private profileImageService: ProfileImageService) {
  }

  public setMe() {
    this.httpService.getMe().subscribe((user) => {
      this.profileImageService.getProfileImage(user.ref).subscribe((data) => {
          this.getUserImageFromBlob(user, data);
        },
        () => {
          this.profileImageService.setUserImageFromGravatar(user);
          this.setMeOnCookie(user);
        });
    });
  }

  public getMe(): User {
    return JSON.parse(window.sessionStorage.getItem('me'));
  }

  public setMeOnCookie(user: User) {
    window.sessionStorage.removeItem('me');
    window.sessionStorage.setItem('me', JSON.stringify(user));
    this.change.emit(true);
  }

  // Need to duplicate it to add this.setMeOnCookie(user) after load
  public getUserImageFromBlob(user: User, file: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      user.imagePath = reader.result;
      this.setMeOnCookie(user);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

}

