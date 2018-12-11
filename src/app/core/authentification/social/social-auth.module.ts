import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { AuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { SocialAuthComponent } from './social-auth.component';
import SOCIAL_PROVIDERS from '../../../shared/global/social-providers';

const config = new AuthServiceConfig(SOCIAL_PROVIDERS);

export  function provideConfig() {
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
