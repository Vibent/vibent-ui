import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../shared/models/user';
import { Md5 } from 'ts-md5';

@Injectable()
export class ProfileImageService {
  
  private API_URL = 'http://35.180.98.237:8080';
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  
  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }
  
  public getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Accept: 'application/json',
      Authorization: this.cookieService.get('token')
    });
  }
  
  public uploadProfileImage(file: File, user: User) {
    const formData = new FormData();
    formData.append('file', file);
    this.change.emit(true);
    return this.http.post(this.API_URL + '/image/profile/upload/' + user.ref, formData, {headers: this.getHeaders()});
  }
  
  public getProfileImage(userRef: string): Observable<any> {
    return this.http.get(this.API_URL + '/image/profile/' + userRef + '.jpg', {
      headers: this.getHeaders(),
      responseType: 'blob'
    });
  }
  
  public profilePictureChanged(): void {
    this.change.emit(true);
  }
  
  public setUserImageFromBlob(user: User, file: Blob) {
    console.log(file);
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      user.imagePath = reader.result;
    }, false);
    
    if (file) {
      console.log('try to read');
      reader.readAsDataURL(file);
    }
  }
  
  public setUserImageFromGravatar(user: User) {
    let md5 = new Md5();
    user.imagePath = 'https://gravatar.com/avatar/' + md5.appendStr(user.ref).end() + '.jpg?s=272&d=retro';
  }
  
}