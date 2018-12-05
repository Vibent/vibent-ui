import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../http/http.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { LoaderService } from './loader/service/loader.service';

@Injectable()
export class AuthenticationService {

  constructor(private httpService: HttpService,
              private cookieService: CookieService,
              private loaderService: LoaderService,
              private router: Router) {
  }

  emailLogin(loginRequest, returnUrl: string, onFail?: (e) => void): void {
    const _this = this;
    _this.loaderService.displayLoadingPageModal();
    _this.httpService.loginEmail(loginRequest).toPromise()
      .then(function (response) {
        _this.cookieService.set('token', response.token);
        _this.router.navigateByUrl(returnUrl);
        _this.loaderService.closeLoadingPageModal();
      })
      .catch(e => {
        _this.loaderService.closeLoadingPageModal();
        onFail(e);
      });
  }

  phoneLogin(loginRequest, returnUrl: string, onFail?: (e) => void): void {
    const _this = this;
    _this.loaderService.displayLoadingPageModal();
    _this.httpService.loginPhone(loginRequest).toPromise()
      .then(function (response) {
        _this.cookieService.set('token', response.token);
        _this.loaderService.closeLoadingPageModal();
        _this.router.navigateByUrl(returnUrl);
      })
      .catch(e => {
        _this.loaderService.closeLoadingPageModal();
        onFail(e);
      });
  }

  socialLogin(loginRequest, returnUrl: string, onFail?: (e) => void): void {
    this.loaderService.displayLoadingPageModal();
    this.httpService.socialLogin(loginRequest).toPromise()
      .then((response) => {
        this.cookieService.set('token', response.token);
        this.loaderService.closeLoadingPageModal();
        this.router.navigateByUrl(returnUrl);
      })
      .catch(e => {
        this.loaderService.closeLoadingPageModal();
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
    this.cookieService.delete('token');
  }
}

