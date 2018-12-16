import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../shared/global/constants';

@Injectable()
export class ProfileImageService {

  constructor(private http: HttpClient) {
  }

  public uploadProfilePic(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(AppSettings.API_ENDPOINT + '/image/profile/upload', formData);
  }
}
