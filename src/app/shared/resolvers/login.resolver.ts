import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { HttpService } from '../../core/http/http.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginResolver implements Resolve<any> {
  constructor(private httpService: HttpService, private cookieService: CookieService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    if (this.cookieService.check('token')) {
      this.router.navigate(['/events']);
    }
  }
}
