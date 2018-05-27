import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {AdminPanelService} from '../../services/admin-panel.service';

declare const $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/events', title: 'Events', icon: 'bubble_chart', class: ''},
  {path: '/groups', title: 'Groups', icon: 'group', class: ''},
  {path: '/me', title: 'Profile', icon: 'account_circle', class: 'active-pro'},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  @Input()
  adminPanelResult = {groupRef: null, isOpen: false};

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private adminPanel: AdminPanelService) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.adminPanel.change.subscribe(result => {
      this.adminPanelResult = result;
    });
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
