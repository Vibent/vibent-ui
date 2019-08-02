/**
 * Abstract base component components
 */
import { OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export enum VibentRoutes {
  EVENTS_URL = '/events',
  LOGIN_URL = '/login',
  REGISTER_URL = '/register',
  FORGOT_URL = '/forgot',
  TERMS_URL = '/terms',
  ME_URL = '/me',
  GET_APP = '/getApp',
  ABOUT_URL = '/about',
  DEFAULT_URL = '/'
}

export abstract class VibentBaseComponent implements OnInit {

  returnUrl: string;

  protected constructor(protected route: ActivatedRoute,
                        protected router: Router,
                        protected cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || VibentRoutes.EVENTS_URL;
  }

  /**
   *  Navigate through specified url
   *  A route can be added in paramater to override exiting route
   * @param url
   * @param specificRoute
   */
  protected navigateToUrl(url: VibentRoutes, specificRoute ?: string) {
    let extras: NavigationExtras;
    if (specificRoute) {
      extras = {queryParams: {returnUrl: specificRoute}};
    } else {
      extras = {queryParams: {returnUrl: this.returnUrl}};
    }
    this.router.navigate([url], extras);
  }

}