import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../shared/models/user';
import { UserManagementService } from '../../../core/services/user-management.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, OnDestroy {

  user: User;
  subscriptions: Subscription[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private userManagementService: UserManagementService) {
    this.user = this.userManagementService.getMe();
  }

  ngOnInit() {
    this.subscriptions.push(
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
