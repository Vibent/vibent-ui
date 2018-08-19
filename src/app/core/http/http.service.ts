import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../../shared/models/group';
import { Event } from '../../shared/models/event';
import { Observable } from 'rxjs/Observable';
import { User } from '../../shared/models/user';
import { AppSettings } from '../../shared/global/constants';

@Injectable()
export class HttpService {

  private API_URL = AppSettings.API_ENDPOINT;

  constructor(private http: HttpClient) {}

  /*** Groups ***/

  public getGroup(groupRef: string): Observable<Group> {
    return this.http.get<Group>(this.API_URL + '/group/' + groupRef);
  }

  public getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.API_URL + '/group/me');
  }

  public createGroup(group: Group) {
    const body = JSON.stringify(group);
    return this.http.post(this.API_URL + '/group', body);
  }

  public updateGroup(group: Group): Observable<Group> {
    const body = JSON.stringify(group);
    return this.http.patch(this.API_URL + '/group/' + group.ref, body);
  }

  public deleteGroup(groupRef: string): any {
    return this.http.delete(this.API_URL + '/group/' + groupRef);
  }

  public getInviteToken(groupRef: string): any {
    return this.http.get(this.API_URL + '/group/' + groupRef + '/inviteToken');
  }

  public validateInviteToken(content: any, token: string) {
    const body = JSON.stringify(content);
    return this.http.post(this.API_URL + '/group/validateInviteToken/' + token, body);
  }

  /*** Events ***/

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.API_URL + '/event/me');
  }

  public getEvent(eventRef: string): Observable<Event> {
    return this.http.get<Event>(this.API_URL + '/event/' + eventRef);
  }

  public getGroupEvents(groupRef: string): Observable<Event[]> {
    return this.http.get<Event[]>(this.API_URL + '/group/' + groupRef + '/event');
  }

  public createEvent(event: Event) {
    const body = JSON.stringify(event);
    return this.http.post(this.API_URL + '/event', body);
  }

  /*** User ***/

  public getMe(): Observable<User> {
    return this.http.get<User>(this.API_URL + '/user/me');
  }

  public getUser(userRef: string): Observable<User> {
    return this.http.get<User>(this.API_URL + '/user/' + userRef);
  }

  public updateUser(user: User): Observable<User> {
    const body = JSON.stringify(user);
    return this.http.patch(this.API_URL + '/user/' + user.ref, body);
  }

  /*** Auth ***/

  public loginEmail(loginRequest): Observable<any> {
    return this.http.post(this.API_URL + '/auth/login/email', loginRequest);
  }

  public loginPhone(loginRequest): Observable<any> {
    return this.http.post(this.API_URL + '/auth/login/phone', loginRequest);
  }

  public register(registrationRequest): Observable<any> {
    return this.http.post(this.API_URL + '/auth/register', registrationRequest);
  }

}
