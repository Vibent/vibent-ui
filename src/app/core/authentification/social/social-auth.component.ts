import { Component, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { AuthService, SocialUser } from 'angularx-social-login';
import SOCIAL_PROVIDERS from '../../../shared/global/social-providers';
import { MessageService } from '../../services/i18n/message.service';

@Component({
  selector: 'social-auth',
  templateUrl: './social-auth.component.html',
  styleUrls: ['./social-auth.component.scss']
})
export class SocialAuthComponent implements OnInit, OnDestroy {

  private blockLogin = true;
  private authStateSubscription;
  providers = SOCIAL_PROVIDERS;

  returnUrl: string;

  constructor(private socialAuthService: AuthService,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.authStateSubscription = this.socialAuthService.authState.subscribe((user) => {
      if (user !== null && !this.blockLogin) {
        this.blockLogin = true;
        this.performSignIn(user);
        this.socialAuthService.signOut(true);
      }
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/events';
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }

  public requestSignIn(providerId: string): void {
    this.blockLogin = false;
    this.socialAuthService.signIn(providerId);
  }

  public performSignIn(user: SocialUser): void {
    this.authenticationService.socialLogin({
      idToken: user.idToken,
      authToken: user.authToken,
      provider: user.provider
    }, this.returnUrl, this.onFail.bind(this));
  }

  public onFail(e): void {
    this.blockLogin = false;
    Swal({
      type: 'error',
      title: this.messageService.OOPS,
      text: this.messageService.SOCIAL_LOGIN_FAIL,
    });
  }
}