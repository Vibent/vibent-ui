import { Injectable } from '@angular/core';
import { Event } from '../../shared/models/event';
import { Observable } from 'rxjs';
import { Email, PasswordReset, User } from '../../shared/models/user';
import { EventParticipant } from '../../shared/models/event-participant';
import { MailInvite } from '../../shared/models/mailInvite';
import { DistributionList, DistributionListRequest } from '../../shared/models/distribution-list';

@Injectable()
export class HttpService {

  constructor() {}

  /*** Events ***/

  public getEvents(): Observable<Event[]> {
    return Observable.create("hello");
  }

  public getEvent(eventRef: string): Observable<Event> {
    return Observable.create("hello");
  }

  public createEvent(event: Event) {
    const body = JSON.stringify(event);
    return Observable.create("hello");
  }

  public getEventInviteToken(eventRef: string): any {
    return Observable.create("hello");
  }

  public validateEventInviteToken(content: any, token: string) {
    const body = JSON.stringify(content);
    return Observable.create("hello");
  }

  public deleteEvent(eventRef: string): any {
    return Observable.create("hello");
  }

  public updateEvent(event: Event): Observable<Event> {
    const body = JSON.stringify(event);
    return Observable.create("hello");
  }

  public eventMailInvite(mailInvite: MailInvite) {
    const body = JSON.stringify(mailInvite);
    return Observable.create("hello");
  }

  public inviteDistributionList(content: any) {
    const body = JSON.stringify(content);
    return Observable.create("hello");
  }

  /*** User ***/

  public getMe(): Observable<User> {
    return Observable.create("hello");
  }

  public getUser(userRef: string): Observable<User> {
    return Observable.create("hello");
  }

  public updateUser(user: User): Observable<User> {
    const body = JSON.stringify(user);
    return Observable.create("hello");
  }

  /*** Participation ***/
  public getEventParticipations(eventRef: string) {
    return Observable.create("hello");
  }

  public patchEventParticipations(participation: EventParticipant) {
    const body = JSON.stringify(participation);
    return Observable.create("hello");
  }

  /*** Distribution list ***/
  public createDistributionList(list: DistributionListRequest) {
    const body = JSON.stringify(list);
    return Observable.create("hello");
  }

  public getConnectedDistributionLists() {
    return Observable.create("hello");
  }

  public updateList(list: DistributionList) {
    const body = JSON.stringify(list);
    return Observable.create("hello");
  }

  public deleteList(list: DistributionList) {
    return Observable.create("hello");
  }

  public listMailInvite(mailInvite: MailInvite) {
    const body = JSON.stringify(mailInvite);
    return Observable.create("hello");
  }

  public getListInviteToken(listId: number): any {
    return Observable.create("hello");
  }

  public validateListInviteToken(content: any, token: string) {
    const body = JSON.stringify(content);
    return Observable.create("hello");
  }

  /*** Auth ***/

  public loginEmail(loginRequest): Observable<any> {
    return Observable.create("hello");
  }

  public loginPhone(loginRequest): Observable<any> {
    return Observable.create("hello");
  }

  public socialLogin(loginRequest): Observable<any> {
    return Observable.create("hello");
  }

  public socialLink(linkRequest): Observable<any> {
    return Observable.create("hello");
  }

  public socialUnlink(unlinkRequest): Observable<any> {
    return Observable.create("hello");
  }

  public register(registrationRequest): Observable<any> {
    return Observable.create("hello");
  }

  public requestPasswordResetEmail(email: Email) {
    const body = JSON.stringify(email);
    return Observable.create("hello");
  }

  public validatePasswordReset(passwordReset: PasswordReset) {
    const body = JSON.stringify(passwordReset);
    return Observable.create("hello");
  }

  public confirmEmail(token: string) {
    return Observable.create("hello");
  }

}
