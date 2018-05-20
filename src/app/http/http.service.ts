import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Group} from '../models/group';
import {Event} from '../models/event';
import {Observable} from 'rxjs/Observable';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class HttpService {

  private API_URL = 'http://vibent-back.eu-west-3.elasticbeanstalk.com';

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  getOptions(): object {
    return {
      'headers': new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookieService.get('token')
      })
    }
  }

  /** Groups **/

  getGroup(groupRef: string): Observable<Group> {
    return this.http.get<Group>(this.API_URL + '/group/' + groupRef, this.getOptions());
  }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.API_URL + '/group/me', this.getOptions());
  }


  createGroup(group: Group) {
    const body = JSON.stringify(group);
    return this.http.post(this.API_URL + '/group', body, this.getOptions());
  }

  /** Events **/

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.API_URL + '/event/me', this.getOptions());
  }

  getEvent(eventRef: string): Observable<Event> {
    return this.http.get<Event>(this.API_URL + '/event/' + eventRef, this.getOptions());
  }

  getGroupEvents(groupRef: string): Observable<Event[]> {
    return this.http.get<Event[]>(this.API_URL + '/group/' + groupRef + '/event', this.getOptions());
  }

  createEvent(event: Event) {
    console.log(event);
    const body = JSON.stringify(event);
    return this.http.post(this.API_URL + '/event', body, this.getOptions());
  }

  login(loginRequest): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(this.API_URL + '/auth/login', loginRequest, httpOptions);
  }

  register(registrationRequest): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(this.API_URL + '/auth/register', registrationRequest, httpOptions);
  }

}
