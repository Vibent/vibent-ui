import { Injectable } from '@angular/core';

import { HttpService } from '../http/http.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { LoaderService } from './loader/service/loader.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {

  constructor(private httpService: HttpService,
              private cookieService: CookieService,
              private loaderService: LoaderService,
              private router: Router) {
  }

  emailLogin(loginRequest, returnUrl: string, onFail?: (e) => void): void {
    this.loaderService.displayLoadingPageModal();
    this.handleLoginResponse(this.httpService.loginEmail(loginRequest), returnUrl, onFail);
  }

  phoneLogin(loginRequest, returnUrl: string, onFail?: (e) => void): void {
    this.loaderService.displayLoadingPageModal();
    this.handleLoginResponse(this.httpService.loginPhone(loginRequest), returnUrl, onFail);
  }

  socialLogin(loginRequest, returnUrl: string, onFail?: (e) => void): void {
    this.loaderService.displayLoadingPageModal();
    this.handleLoginResponse(this.httpService.socialLogin(loginRequest), returnUrl, onFail);
  }

  handleLoginResponse(p: Observable<any>, returnUrl: string, onFail?: (e) => void) {
    p.toPromise()
      .then((response) => {
        this.cookieService.set('token', response.token);
        this.cookieService.set('last-login', response.lastLogin);
        this.loaderService.closeLoadingPageModal();
        this.router.navigateByUrl(returnUrl);
      })
      .catch(e => {
        this.loaderService.closeLoadingPageModal();
        onFail(e);
      });
  }

  register(registrationRequest, onFail?: (e) => void): void {
    this.httpService.register(registrationRequest).toPromise()
      .then((response) => {
      })
      .catch(e => {
        onFail(e);
      });
  }

  isAuthenticated(): boolean {
    return this.cookieService.check('token');
  }

  logout(): void {
    this.cookieService.delete('token');
  }
}

