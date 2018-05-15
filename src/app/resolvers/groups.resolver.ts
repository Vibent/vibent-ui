import {Injectable} from '@angular/core';

import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {Group} from '../models/group';
import {HttpService} from '../http/http.service';

@Injectable()
export class GroupsResolver implements Resolve<Group[]> {
  constructor(private httpService: HttpService) {
  }

  resolve(route: ActivatedRouteSnapshot): Group[] | Observable<Group[]> | Promise<Group[]> {
    return this.httpService.getGroups();
  }
}
