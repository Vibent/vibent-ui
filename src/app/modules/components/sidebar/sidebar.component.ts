import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminPanelService } from '../../../core/services/admin-panel.service';
import { ProfileImageService } from '../../../core/http/profile-image.service';
import { User } from '../../../shared/models/user';
import { HttpService } from '../../../core/http/http.service';

declare const $: any;

declare interface IRouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: IRouteInfo[] = [
  {path: '/events', title: 'Events', icon: 'bubble_chart', class: ''},
  {path: '/groups', title: 'Groups', icon: 'group', class: ''},
  {path: '/me', title: 'Profile', icon: 'account_circle', class: 'active-pro'},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  @Input()
  public adminPanelResult = {groupRef: null, isOpen: false};
  public user: User;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private profileImageService: ProfileImageService,
              private httpService: HttpService,
              private adminPanel: AdminPanelService) {
    this.httpService.getMe().subscribe((user) => {
      this.user = user;
      this.initValues();
    });
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.adminPanel.change.subscribe(result => {
      this.adminPanelResult = result;
    });
    this.profileImageService.change.subscribe(() => {
      this.initValues();
    });
  }

  initValues() {
    this.profileImageService.getProfileImage(this.user.ref).subscribe((data) => {
        this.profileImageService.setUserImageFromBlob(this.user, data);
      },
      () => this.profileImageService.setUserImageFromGravatar(this.user));
  }

  public isMobileMenu(): boolean {
    return !($(window).width() > 991);
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
