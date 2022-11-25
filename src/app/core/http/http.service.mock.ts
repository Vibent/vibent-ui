import { DistributionList, DistributionListRequest } from '../../shared/models/distribution-list';
import { Email, PasswordReset, User } from '../../shared/models/user';
import { Event } from '../../shared/models/event';
import { EventParticipant } from '../../shared/models/event-participant';
import { Injectable } from '@angular/core';
import { MailInvite } from '../../shared/models/mailInvite';
import { MockData } from '../../shared/global/mock-data';
import { Observable, of } from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private mockData: MockData) { }

  /*** Events ***/

  public getEvents(): Observable<Event[]> {
    return of(this.mockData.events);
  }

  public getEvent(eventRef: string): Observable<Event> {
    const event = this.mockData.events.find(e => e.ref == eventRef);
    return of(event);
  }

  public createEvent(event: Event): Observable<Event> {
    return of({});
  }

  public getEventInviteToken(eventRef: string): any {
    return of({});
  }

  public validateEventInviteToken(content: any, token: string) {
    return of({});
  }

  public deleteEvent(eventRef: string): any {
    return of({});
  }

  public updateEvent(event: Event): Observable<Event> {
    return of(event);
  }

  public eventMailInvite(mailInvite: MailInvite) {
    const body = JSON.stringify(mailInvite);
    return of({});
  }

  public inviteDistributionList(content: any) {
    const body = JSON.stringify(content);
    return of({});
  }

  /*** User ***/

  public getMe(): Observable<User> {
    const user = this.mockData.users[0];
    return of(user);
  }

  public getUser(userRef: string): Observable<User> {
    const user = this.mockData.users.find(e => e.ref == userRef);
    return of(user);
  }

  public updateUser(user: User): Observable<User> {
    return of(user);
  }

  /*** Participation ***/
  public getEventParticipations(eventRef: string): Observable<EventParticipant[]> {
    const event = this.mockData.events.find(e => e.ref == eventRef);
    return of(event.participationRefs);
  }

  public patchEventParticipations(participation: EventParticipant) {
    const body = JSON.stringify(participation);
    return of({});
  }

  /*** Distribution list ***/
  public createDistributionList(list: DistributionListRequest) {
    const body = JSON.stringify(list);
    return of({});
  }

  public getConnectedDistributionLists(): Observable<DistributionList[]> {
    return of([]);
  }

  public updateList(list: DistributionList) {
    const body = JSON.stringify(list);
    return of({});
  }

  public deleteList(list: DistributionList) {
    return of({});
  }

  public listMailInvite(mailInvite: MailInvite) {
    const body = JSON.stringify(mailInvite);
    return of({});
  }

  public getListInviteToken(listId: number): any {
    return of({});
  }

  public validateListInviteToken(content: any, token: string) {
    const body = JSON.stringify(content);
    return of({});
  }

  /*** Auth ***/

  public loginEmail(loginRequest): Observable<any> {
    return of({ "token": "token", "last-logic": new Date() });
  }

  public loginPhone(loginRequest): Observable<any> {
    return of({});
  }

  public socialLogin(loginRequest): Observable<any> {
    return of({});
  }

  public socialLink(linkRequest): Observable<any> {
    return of({});
  }

  public socialUnlink(unlinkRequest): Observable<any> {
    return of({});
  }

  public register(registrationRequest): Observable<any> {
    return of({});
  }

  public requestPasswordResetEmail(email: Email) {
    const body = JSON.stringify(email);
    return of({});
  }

  public validatePasswordReset(passwordReset: PasswordReset) {
    const body = JSON.stringify(passwordReset);
    return of({});
  }

  public confirmEmail(token: string) {
    return of({});
  }

}
