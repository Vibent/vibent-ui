import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { VibentRoutes } from '../../shared/components/base-component/base-component';

/**
 * Saves the history of routes taken during navigation
 */
@Injectable()
export class RoutingStateService {

  history = [];

  constructor(private router: Router) {
  }

  public loadRouting(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => {
        // if the next route is the same as the previous one we do not push it
        if (this.history.length < 1 || this.sanitizeRoute(this.history[this.history.length - 1]) !== this.sanitizeRoute(urlAfterRedirects)) {
          this.history = [...this.history, urlAfterRedirects];
        }
      });
  }

  /**
   * Return the previous url sanitized
   */
  public getPreviousRoute(): VibentRoutes {
    const previous = this.history[this.history.length - 2];
    this.unstackHistory();
    if (previous) {
      return this.sanitizeRoute(previous);
    } else {
      return VibentRoutes.DEFAULT_URL;
    }
  }

  /**
   * Delete the last history element
   */
  public unstackHistory() {
    this.history.splice(-1, 1);
  }

  /**
   *  Routes may contain returnUrl and we have to consider a route by prefix
   */
  sanitizeRoute(route: string): VibentRoutes {
    if (route.indexOf('?') > -1) {
      return this.reverseMapping(route.substring(0, route.indexOf('?')));
    } else {
      return  this.reverseMapping(route);
    }
  }

  reverseMapping(route: string): VibentRoutes {
    switch (route) {
      case '/events':
        return VibentRoutes.EVENTS_URL;
      case '/login':
        return VibentRoutes.LOGIN_URL;
      case '/register':
        return VibentRoutes.REGISTER_URL;
      case '/forgot':
        return VibentRoutes.FORGOT_URL;
      case '/':
        return VibentRoutes.DEFAULT_URL;
      case '/about':
        return VibentRoutes.ABOUT_URL;
      case '/terms':
        return VibentRoutes.TERMS_URL;
      case '/me':
        return VibentRoutes.ME_URL;
      default:
        return VibentRoutes.DEFAULT_URL;
    }
  }
}