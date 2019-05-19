import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../shared/models/user';
import { UserManagementService } from '../../../../core/services/user-management.service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { ScreenService } from '../../../../core/services/screen.service';
import { ModalManagerService, VibentModals } from '../../../../core/services/modal-manager.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit, OnDestroy {

  user: User;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              public screenSizesService: ScreenService,
              private authenticationService: AuthenticationService,
              private modalManagerService: ModalManagerService,
              private router: Router,
              private userManagementService: UserManagementService) {
    this.user = this.userManagementService.getMe();
  }

  ngOnInit() {
    this.modalManagerService.initHandleBackBrowser(VibentModals.PROFILE_SETTINGS);
    this.subscriptions.push(this.userManagementService.change$.subscribe(() => {
      this.user = this.userManagementService.getMe();
    }));
  }

  public openSettingsDialog(): void {
    this.modalManagerService.showModal(VibentModals.PROFILE_SETTINGS);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

}
