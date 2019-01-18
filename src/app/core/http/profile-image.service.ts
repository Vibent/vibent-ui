import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProfileImageService {

  constructor(private http: HttpClient) {
  }

  public uploadProfilePic(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(environment.apiEndpoint + '/image/profile/upload', formData);
  }
}
