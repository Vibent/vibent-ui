import { Injectable } from '@angular/core';
import { Event } from '../../shared/models/event';
import { Observable, of } from 'rxjs';
import { Email, PasswordReset, User } from '../../shared/models/user';
import { EventParticipant, EventParticipantAnswer } from '../../shared/models/event-participant';
import { MailInvite } from '../../shared/models/mailInvite';
import { DistributionList, DistributionListRequest } from '../../shared/models/distribution-list';

@Injectable()
export class HttpService {

  private users: User[] = [
    {
      ref: "user1",
      email: "email@no.domain.com",
      firstName: "First",
      lastName: "Last",
      phoneNumber: 707070707,
      memberships: [],
      participations: [],
      membershipRequests: [],
      socialCredentials: {},
      profilePicLocation: "assets/img/vibent-icon-72.png"
    }
  ]

  private events: Event[] = [{
    title: "Cool party at the beach",
    ref: "event1",
    creatorRef: this.users[0].ref,
    description: "This is an event for the beach",
    endDate: new Date(),
    startDate: new Date().toISOString(),
    groupRef: "group1",
    participationRefs: [
      {
        id: 4,
        userRef: "user1",
        eventRef: "event1",
        isVisible: true,
        answer: EventParticipantAnswer.YES
      }
    ],

    alimentationBubbles: [],
    checkboxBubbles: [],
    freeBubbles: [],
    locationBubbles: [],
    planningBubbles: [],
    surveyBubbles: [],
    travelBubbles: []
  }];




  constructor() { }



  /*** Events ***/

  public getEvents(): Observable<Event[]> {
    return of(this.events);
  }

  public getEvent(eventRef: string): Observable<Event> {
    const event = this.events.find(e => e.ref == eventRef);
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
    const user = this.users[0];
    return of(user);
  }

  public getUser(userRef: string): Observable<User> {
    const user = this.users.find(e => e.ref == userRef);
    return of(user);
  }

  public updateUser(user: User): Observable<User> {
    return of(user);
  }

  /*** Participation ***/
  public getEventParticipations(eventRef: string): Observable<EventParticipant[]> {
    const event = this.events.find(e => e.ref == eventRef);
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
    return of("hello");
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
