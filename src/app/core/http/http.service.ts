import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from '../../shared/models/group';
import { Event } from '../../shared/models/event';
import { Observable } from 'rxjs';
import { Email, PasswordReset, User } from '../../shared/models/user';
import { EventParticipant } from '../../shared/models/event-participant';
import { environment } from '../../../environments/environment';
import { MailInvite } from '../../shared/models/mailInvite';

@Injectable()
export class HttpService {

  private API_URL = environment.apiEndpoint;

  constructor(private http: HttpClient) {
  }

  public getOptions(): object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
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

  public leaveGroup(groupRef: string) {
    return this.http.post(this.API_URL + '/group/' + groupRef + '/leave', this.getOptions());
  }

  public getInviteToken(groupRef: string): any {
    return this.http.get(this.API_URL + '/group/' + groupRef + '/inviteToken', this.getOptions());
  }

  public validateInviteToken(content: any, token: string) {
    const body = JSON.stringify(content);
    return this.http.post(this.API_URL + '/group/validateInviteToken/' + token, body, this.getOptions());
  }

  public groupMailInvite(mailInvite: MailInvite) {
    const body = JSON.stringify(mailInvite);
    return this.http.post(this.API_URL + '/group/mailInvite', body, this.getOptions());
  }

  /*** Events ***/

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.API_URL + '/event/me', this.getOptions());
  }

  public getEvent(eventRef: string): Observable<Event> {
    return this.http.get<Event>(this.API_URL + '/event/' + eventRef, this.getOptions());
  }

  public getGroupEvents(groupRef: string): Observable<Event[]> {
    return this.http.get<Event[]>(this.API_URL + '/group/' + groupRef + '/event', this.getOptions());
  }

  public createEvent(event: Event) {
    const body = JSON.stringify(event);
    return this.http.post(this.API_URL + '/event', body, this.getOptions());
  }

  public createStandaloneEvent(event: Event) {
    const body = JSON.stringify(event);
    return this.http.post(this.API_URL + '/event/standalone', body, this.getOptions());
  }

  public getStandaloneInviteToken(eventRef: string): any {
    return this.http.get(this.API_URL + '/event/standalone/' + eventRef + '/inviteToken', this.getOptions());
  }

  public validateStandaloneInviteToken(content: any, token: string) {
    const body = JSON.stringify(content);
    return this.http.post(this.API_URL + '/event/standalone/validateInviteToken/' + token, body, this.getOptions());
  }

  public deleteEvent(eventRef: string): any {
    return this.http.delete(this.API_URL + '/event/' + eventRef, this.getOptions());
  }

  public updateEvent(event: Event): Observable<Event> {
    const body = JSON.stringify(event);
    return this.http.patch<Event>(this.API_URL + '/event/' + event.ref, body, this.getOptions());
  }

  public standaloneEventMailInvite(mailInvite: MailInvite) {
    const body = JSON.stringify(mailInvite);
    return this.http.post(this.API_URL + '/event/standalone/mailInvite', body, this.getOptions());
  }

  /*** User ***/

  public getMe(): Observable<User> {
    return this.http.get<User>(this.API_URL + '/user/me', this.getOptions());
  }

  public getUser(userRef: string): Observable<User> {
    return this.http.get<User>(this.API_URL + '/user/' + userRef, this.getOptions());
  }

  public updateUser(user: User): Observable<User> {
    const body = JSON.stringify(user);
    return this.http.patch(this.API_URL + '/user/' + user.ref, body, this.getOptions());
  }

  /*** Participation ***/
  public getEventParticipations(eventRef: string) {
    return this.http.get<EventParticipant[]>(this.API_URL + '/participation/event/' + eventRef, this.getOptions());
  }

  public patchEventParticipations(participation: EventParticipant) {
    const body = JSON.stringify(participation);
    return this.http.patch(this.API_URL + '/participation/' + participation.id, body, this.getOptions());
  }

  /*** Auth ***/

  public loginEmail(loginRequest): Observable<any> {
    return this.http.post(this.API_URL + '/auth/login/email', loginRequest, this.getOptions());
  }

  public loginPhone(loginRequest): Observable<any> {
    return this.http.post(this.API_URL + '/auth/login/phone', loginRequest, this.getOptions());
  }

  public socialLogin(loginRequest): Observable<any> {
    return this.http.post(this.API_URL + '/auth/social/login', loginRequest, this.getOptions());
  }

  public socialLink(linkRequest): Observable<any> {
    return this.http.post(this.API_URL + '/social/link', linkRequest, this.getOptions());
  }

  public socialUnlink(unlinkRequest): Observable<any> {
    return this.http.post(this.API_URL + '/social/unlink', unlinkRequest, this.getOptions());
  }

  public register(registrationRequest): Observable<any> {
    return this.http.post(this.API_URL + '/auth/register', registrationRequest, this.getOptions());
  }

  public requestPasswordResetEmail(email: Email) {
    const body = JSON.stringify(email);
    return this.http.post(this.API_URL + '/auth/passwordReset', body, this.getOptions());
  }

  public validatePasswordReset(passwordReset: PasswordReset) {
    const body = JSON.stringify(passwordReset);
    return this.http.post(this.API_URL + '/auth/validatePasswordReset', body, this.getOptions());
  }

  public confirmEmail(token: string) {
    return this.http.post(this.API_URL + '/auth/confirmEmail/' + token, this.getOptions());
  }

}
