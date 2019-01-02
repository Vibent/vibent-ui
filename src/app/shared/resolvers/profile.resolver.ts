import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { HttpService } from '../../core/http/http.service';
import { User } from '../models/user';

@Injectable()
export class ProfileResolver implements Resolve<User> {
  constructor(private httpService: HttpService) {
  }

  resolve(route: ActivatedRouteSnapshot): User | Observable<User> | Promise<User> {
    return this.httpService.getMe();
  }
}
