import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { Group } from '../models/group';
import { HttpService } from '../../core/http/http.service';

@Injectable()
export class GroupResolver implements Resolve<Group> {
  constructor(private httpService: HttpService) {
  }

  resolve(route: ActivatedRouteSnapshot): Group | Observable<Group> | Promise<Group> {
    return this.httpService.getGroup(route.paramMap.get('ref'));
  }
}
