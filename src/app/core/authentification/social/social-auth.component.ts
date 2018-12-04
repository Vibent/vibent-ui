import { Component, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Messages } from '../../../shared/messages-codes/messages';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'social-auth',
  templateUrl: './social-auth.component.html',
  styleUrls: ['./social-auth.component.scss']
})
export class SocialAuthComponent implements OnInit, OnDestroy {

  private alreadyLoggedIn = false;
  private authStateSubscription;

  returnUrl: string;

  constructor(private socialAuthService: AuthService,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.authStateSubscription = this.socialAuthService.authState.subscribe((user) => {
      if (user !== null && !this.alreadyLoggedIn) {
        this.alreadyLoggedIn = true;
        this.login(user);
        this.socialAuthService.signOut(true);
      }
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }

  public googleSignIn(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public facebookSignIn(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  public login(user: SocialUser): void {
    this.authenticationService.socialLogin({
      idToken: user.idToken,
      authToken: user.authToken,
      provider: user.provider
    }, this.returnUrl, this.onFail.bind(this));
  }

  public onFail(e): void {
    this.alreadyLoggedIn = false;
    Swal({
      type: 'error',
      title: 'Oops...',
      text: Messages.SOCIAL_LOGIN_FAIL,
    });
  }
}