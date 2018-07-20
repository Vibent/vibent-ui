import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from '../../shared/models/group';
import { Event } from '../../shared/models/event';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../shared/models/user';

@Injectable()
export class HttpService {

  private API_URL = 'http://35.180.98.237:8080';

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  public getOptions(): object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookieService.get('token')
      })
    };
  }

  public getImageOptions(): object {
    return {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': this.cookieService.get('token')
      })
    };
  }

  /*** Groups ***/

  public getGroup(groupRef: string): Observable<Group> {
    return this.http.get<Group>(this.API_URL + '/group/' + groupRef, this.getOptions());
  }

  public getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.API_URL + '/group/me', this.getOptions());
  }


  public createGroup(group: Group) {
    const body = JSON.stringify(group);
    return this.http.post(this.API_URL + '/group', body, this.getOptions());
  }

  public updateGroup(group: Group): Observable<Group> {
    const body = JSON.stringify(group);
    return this.http.patch(this.API_URL + '/group/' + group.ref, body, this.getOptions());
  }

  public deleteGroup(groupRef: string): any {
    return this.http.delete(this.API_URL + '/group/' + groupRef, this.getOptions());
  }

  public getInviteToken(groupRef: string): any {
  return this.http.get(this.API_URL + '/group/' + groupRef + '/inviteToken', this.getOptions());
}

  /*** Events ***/

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.API_URL + '/event/me', this.getOptions());
  }

  public getEvent(eventRef: string): Observable<Event> {
    return this.http.get<Event>(this.API_URL + '/event/' + eventRef, this.getOptions());
  }

  public getGroupEvents(groupRef: string): Observable<Event[]> {
    console.log(groupRef);
    return this.http.get<Event[]>(this.API_URL + '/group/' + groupRef + '/event', this.getOptions());
  }

  public createEvent(event: Event) {
    const body = JSON.stringify(event);
    return this.http.post(this.API_URL + '/event', body, this.getOptions());
  }

  /*** User ***/

  public getMe(): Observable<User> {
    return this.http.get<User>(this.API_URL + '/user/me', this.getOptions());
  }

  public updateUser(user: User): Observable<User> {
    const body = JSON.stringify(user);
    return this.http.patch(this.API_URL + '/user/' + user.ref, body, this.getOptions());
  }

  /*** Images ***/

  public uploadProfileImage(file: File, user: User) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.API_URL + '/image/profile/upload/' + user.ref, formData, this.getImageOptions());
  }

  public getProfileImage(user: User): Observable<any>  {
    return this.http.get(this.API_URL + '/image/profile/' + user.ref, this.getImageOptions());
  }


  /*** Auth ***/

  public loginEmail(loginRequest): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(this.API_URL + '/auth/login/email', loginRequest, httpOptions);
  }

  public loginPhone(loginRequest): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(this.API_URL + '/auth/login/phone', loginRequest, httpOptions);
  }

  public register(registrationRequest): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(this.API_URL + '/auth/register', registrationRequest, httpOptions);
  }

}
