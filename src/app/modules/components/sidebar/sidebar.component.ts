import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupAdminPanelService } from '../../../core/services/group-admin-panel.service';
import { ProfileImageService } from '../../../core/http/profile-image.service';
import { User } from '../../../shared/models/user';
import { HttpService } from '../../../core/http/http.service';
import { EventAdminPanelService } from '../../../core/services/event-admin-panel.service';

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
  public groupAdminPanelResult = {groupRef: null, isOpen: false};
  @Input()
  public eventAdminPanelResult = {eventRef: null, isOpen: false};
  public user: User;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private profileImageService: ProfileImageService,
              private httpService: HttpService,
              private groupAdminPanelService: GroupAdminPanelService,
              private eventAdminPanelService: EventAdminPanelService) {
    this.httpService.getMe().subscribe((user) => {
      this.user = user;
      this.initValues();
    });
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.groupAdminPanelService.change.subscribe(result => {
      this.groupAdminPanelResult = result;
    });
    this.eventAdminPanelService.change.subscribe(result => {
      this.eventAdminPanelResult = result;
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
