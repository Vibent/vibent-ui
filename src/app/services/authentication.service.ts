///<reference path="../../../node_modules/@types/bcryptjs/index.d.ts"/>
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../http/http.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthenticationService {
  private readonly salt = '$2a$10$5ha3rRmeVC42lt0JDB0HvOnIVKG1Is6ril4RIILN9lJ1SaPCt2CB.';

  constructor(private httpService: HttpService,
              private cookieService: CookieService,
              private router: Router) {
  }

  login(loginRequest, onFail?: (e) => void): void {
    const _this = this;
    loginRequest.password = this.hash(loginRequest.password);
    _this.httpService.loginEmail(loginRequest).toPromise()
      .then(function (response) {
        _this.cookieService.set('token', response.token);
        _this.router.navigate(['/events']);
      })
      .catch(e => {
        onFail(e);
      });
  }

  register(registrationRequest, onFail?: (e) => void): void {
    const _this = this;
    registrationRequest.password = this.hash(registrationRequest.password);
    _this.httpService.register(registrationRequest).toPromise()
      .then(function (response) {
        _this.cookieService.set('username', response.username);
        _this.cookieService.set('email', response.username);
        _this.router.navigate(['/login']);
      })
      .catch(e => {
        onFail(e);
      });
  }

  hash(password: string): string {
    const hashed = bcrypt.hashSync(password, this.salt);
    return hashed;
  }

  isAuthenticated(): boolean {
    return this.cookieService.check('token');
  }

  logout(): void {
    this.cookieService.deleteAll();
  }
}

