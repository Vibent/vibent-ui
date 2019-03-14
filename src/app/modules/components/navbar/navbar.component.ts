import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { User } from '../../../shared/models/user';
import { ProfileImageService } from '../../../core/http/profile-image.service';
import { HttpService } from '../../../core/http/http.service';
import { UserManagementService } from '../../../core/services/user-management.service';
import { LoaderSize } from '../../../shared/global/constants';
import { LoaderService } from '../../../core/services/loader/service/loader.service';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../core/services/i18n/language.service';

declare const $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  loaderSize = LoaderSize.ultraSmall;
  user: User;
  subscriptions: Subscription[] = [];
  public activeRoute: string;

  constructor(public loaderService: LoaderService,
              private element: ElementRef,
              private router: Router,
              private route: ActivatedRoute,
              private profileImageService: ProfileImageService,
              private userManagementService: UserManagementService,
              private httpService: HttpService,
              private authenticationService: AuthenticationService,
              private cookieService: CookieService,
              private languageService: LanguageService) {
    this.user = this.userManagementService.getMe();
    this.activeRoute = this.route.firstChild.routeConfig.path;
  }

  ngOnInit() {
    const userSub = this.userManagementService.change$.subscribe(() => {
      this.user = this.userManagementService.getMe();
    });
    const routeSub = this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.activeRoute = this.route.firstChild.routeConfig.path;
      }
    });

    this.subscriptions.push(userSub, routeSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public toggleLanguagesSubmenu(e: Event) {
    $('#languageMenu').collapse('toggle');
    e.stopPropagation();
  }

  public changeLanguage(code: string) {
    this.languageService.setLanguage(code);
  }

  public isActive(path: string): boolean {
    return this.router.isActive(path, false);
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
