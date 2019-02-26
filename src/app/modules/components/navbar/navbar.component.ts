import { Component, ElementRef, OnInit } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { User } from '../../../shared/models/user';
import { ProfileImageService } from '../../../core/http/profile-image.service';
import { HttpService } from '../../../core/http/http.service';
import { UserManagementService } from '../../../core/services/user-management.service';
import { LoaderSize } from '../../../shared/global/constants';
import { LoaderService } from '../../../core/services/loader/service/loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  location: Location;
  loaderSize = LoaderSize.ultraSmall;
  user: User;
  private listTitles: any[];

  constructor(location: Location,
              public loaderService: LoaderService,
              private element: ElementRef,
              private router: Router,
              private route: ActivatedRoute,
              private profileImageService: ProfileImageService,
              private userManagementService: UserManagementService,
              private httpService: HttpService,
              private authenticationService: AuthenticationService) {
    this.location = location;
    this.user = this.userManagementService.getMe();
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.userManagementService.change$.subscribe(() => {
      this.user = this.userManagementService.getMe();
    });
  }

  public getTitle(): string {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(2);
    }

    const t = this.listTitles.find(function (e) {
      return (e.path === titlee);
    });

    return t ? t.title : 'Event board';
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }
}
