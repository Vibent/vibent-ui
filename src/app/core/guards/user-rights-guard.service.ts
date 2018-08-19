import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../http/http.service';
import { User } from '../../shared/models/user';

@Injectable()
export class UserRightsGuardService implements CanActivateChild {

  user: User;

  constructor(private httpService: HttpService,  public router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    let rights = null;
    return this.httpService.getMe().toPromise().then((user) => {
      this.user = user;
      rights = this.checkHavePermission(route);
    }).then(() => rights);
  }

  private checkHavePermission(route: ActivatedRouteSnapshot) {
    switch (route.routeConfig.path) {
      case 'groups/:ref':
        return this.getGroupPermission(route);
      case 'events/:ref':
        return this.getEventPermission(route);
      default:
        return true;
    }
  }

  private getGroupPermission(route: ActivatedRouteSnapshot): Promise<boolean> {
    let rights = false;
    return this.httpService.getGroup(route.paramMap.get('ref')).toPromise().then(group => {
      rights = group.memberships.some(
        e => e.userRef === this.user.ref
      );
    }).then(() => rights);
  }

  private getEventPermission(route: ActivatedRouteSnapshot): Promise<boolean> {
    let rights = false;

    return this.httpService.getEvent(route.paramMap.get('ref')).toPromise().then(event => {
      rights = event.participationRefs.some(
        p => p.userRef === this.user.ref
      );
    }).then(() => rights);
  }

}