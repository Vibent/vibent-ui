import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import {
  AuthServiceConfig,
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialLoginModule
} from 'angularx-social-login';
import { SocialAuthComponent } from './social-auth.component';
import { AppSettings } from '../../../shared/global/constants';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(AppSettings.GOOGLE_CLIENT_ID)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(AppSettings.FACEBOOK_CLIENT_ID)
  }
]);

function provideConfig() {
  return config;
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SocialLoginModule
  ],
  declarations: [
    SocialAuthComponent
  ],
  providers: [
    AuthenticationService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  exports: [
    SocialAuthComponent
  ]
})

export class SocialAuthModule {
}
