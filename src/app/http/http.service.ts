import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Group} from '../models/group';
import {Event} from '../models/event';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {

  private API_URL = 'http://vibent-back.eu-west-3.elasticbeanstalk.com';
  token: string;
  private httpOptions: {
    headers: HttpHeaders
  };

  constructor(private http: HttpClient) {
    this.getVibentToken().subscribe(data => {this.token = data['token']; console.log(this.token); this.httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.token
        })
    }; });

  }

  /** Groups **/

  getGroup(groupRef: string): Observable<Group> {
    return this.http.get<Group>(this.API_URL + '/group/' + groupRef, this.httpOptions);
  }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.API_URL + '/group/me', this.httpOptions);
  }


  createGroup(group: Group) {
    const body = JSON.stringify(group);
    return this.http.post(this.API_URL + '/group', body, this.httpOptions);
  }

  /** Events **/

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.API_URL + '/event/me', this.httpOptions);
  }

  getEvent(eventRef: string): Observable<Event> {
    return this.http.get<Event>(this.API_URL + '/event/' + eventRef, this.httpOptions);
  }

  createEvent(event: Event) {
    console.log(event);
    const body = JSON.stringify(event);
    return this.http.post(this.API_URL + '/event', body, this.httpOptions);
  }

  getVibentToken() {
    const user = {
      username: 'vibentUserPM',
      password : '$2a$10$cLAIXc2UWiVdSGjxI3Fr5uJUvinj5hBHW1ySIW02.yjrS0DaAvs1O'
    };
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})};

    return this.http.post(this.API_URL + '/auth/login', user, httpOptions);
  }

}
