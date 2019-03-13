import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupAdminPanelService } from '../../../core/services/group-admin-panel.service';
import { User } from '../../../shared/models/user';
import { HttpService } from '../../../core/http/http.service';
import { EventAdminPanelService } from '../../../core/services/event-admin-panel.service';
import { UserManagementService } from '../../../core/services/user-management.service';
import { Subscription } from 'rxjs';
import { ScreenService } from '../../../core/services/screen.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, OnDestroy {

  groupAdminPanelInput = null;
  eventAdminPanelInput = null;
  user: User;
  subscriptions: Subscription[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private userManagementService: UserManagementService,
              private httpService: HttpService,
              private groupAdminPanelService: GroupAdminPanelService,
              private eventAdminPanelService: EventAdminPanelService,
              public screenSizesService: ScreenService) {
    this.user = this.userManagementService.getMe();
  }

  ngOnInit() {
    this.subscriptions.push(
      this.groupAdminPanelService.change$.subscribe(result => {
        this.groupAdminPanelInput = result;
      }),
      this.eventAdminPanelService.change$.subscribe(result => {
        this.eventAdminPanelInput = result;
      }),
      this.userManagementService.change$.subscribe(() => {
        this.user = this.userManagementService.getMe();
      })
    );
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
