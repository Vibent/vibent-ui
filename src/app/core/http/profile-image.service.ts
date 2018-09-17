import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../shared/models/user';
import { Md5 } from 'ts-md5';
import { AppSettings } from '../../shared/global/constants';

@Injectable()
export class ProfileImageService {

  constructor(private http: HttpClient) {
  }

  public getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Accept: 'application/json'
    });
  }

  getProfileImageOfUser(user: User) {
    this.getProfileImage(user.ref).subscribe((data) => {
        this.setUserImageFromBlob(user, data);
      },
      () => this.setUserImageFromGravatar(user)
    );
  }

  public uploadProfileImage(file: File, user: User) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(AppSettings.API_ENDPOINT + '/image/profile/upload/' + user.ref, formData, {headers: this.getHeaders()});
  }

  public getProfileImage(userRef: string) {
    return this.http.get(AppSettings.API_ENDPOINT + '/image/profile/' + userRef + '.jpg', {
      headers: this.getHeaders(),
      responseType: 'blob'
    });
  }

  public setUserImageFromBlob(user: User, file: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      user.imagePath = reader.result;
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  public setUserImageFromGravatar(user: User) {
    const md5 = new Md5();
    user.imagePath = 'https://gravatar.com/avatar/' + md5.appendStr(user.ref).end() + '.jpg?s=272&d=retro';
  }

}
