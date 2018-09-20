import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../http/http.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

  constructor(private httpService: HttpService,
              private cookieService: CookieService,
              private router: Router) {
  }

  emailLogin(loginRequest, onFail?: (e) => void): void {
    const _this = this;
    _this.httpService.loginEmail(loginRequest).toPromise()
      .then(function (response) {
        _this.cookieService.set('token', response.token);
        _this.router.navigate(['/events']);
      })
      .catch(e => {
        onFail(e);
      });
  }

  phoneLogin(loginRequest, onFail?: (e) => void): void {
    const _this = this;
    _this.httpService.loginPhone(loginRequest).toPromise()
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
    _this.httpService.register(registrationRequest).toPromise()
      .then(function (response) {
      })
      .catch(e => {
        onFail(e);
      });
  }

  isAuthenticated(): boolean {
    return this.cookieService.check('token');
  }

  logout(): void {
    this.cookieService.deleteAll();
  }
}

