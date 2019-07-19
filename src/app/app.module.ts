import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RegisterModule } from './core/authentification/register/register/register.module';
import { ForgotModule } from './core/authentification/forgot/forgot-password/forgot.module';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { UserManagementService } from './core/services/user-management.service';
import { LoaderModule } from './core/loader/loader.module';
import { LoaderService } from './core/services/loader/service/loader.service';
import { ResetPasswordModule } from './core/authentification/forgot/reset-password/reset-password.module';
import { ScreenService } from './core/services/screen.service';
import { LoadingPageComponent } from './core/services/loader/loading-page/loading-page.component';
import { LoadingPageModule } from './core/services/loader/loading-page/loading-page.module';
import { HomeModule } from './modules/components/home/home.module';
import { I18nModule } from './core/services/i18n/i18n.module';
import { TermsModule } from './modules/pages/terms/terms.module';
import { RoutingStateService } from './core/services/routing-state.service';
import { AboutModule } from './modules/components/about/about.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpService } from './core/http/http.service';
import { LoginModule } from './core/authentification/login/login.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    TermsModule,
    LoadingPageModule,
    HttpClientModule,
    ForgotModule,
    ResetPasswordModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    AboutModule,
    LoaderModule,
    I18nModule,
    ServiceWorkerModule.register('ngsw-worker.js'),
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    CookieService,
    HttpService,
    ScreenService,
    RoutingStateService,
    LoaderService,
    UserManagementService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'en'
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoadingPageComponent
  ]
})
export class AppModule {
}
