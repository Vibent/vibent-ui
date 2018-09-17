import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminPanelService } from '../../../core/services/admin-panel.service';
import { User } from '../../../shared/models/user';
import { HttpService } from '../../../core/http/http.service';
import { UserManagementService } from '../../../core/services/user-management.service';

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
              private userManagementService: UserManagementService,
              private httpService: HttpService,
              private adminPanel: AdminPanelService) {
    this.user = this.userManagementService.getMe();
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.adminPanel.change.subscribe(result => {
      this.adminPanelResult = result;
    });
    this.userManagementService.change.subscribe(() => {
      this.user = this.userManagementService.getMe();
    });
  }

  public isMobileMenu(): boolean {
    return !($(window).width() > 991);
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
