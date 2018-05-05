import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GroupsService {

  constructor(private http: HttpClient) {
  }

  getGroups() {
    return this.http.get('/api/groups');
  }

  // send a POST request to the API to create a new data object
  createGroup(group) {
    const body = JSON.stringify(group);
    return this.http.post('/api/groups/', body, httpOptions);
  }
}
