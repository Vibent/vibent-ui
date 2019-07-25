import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { RegisterModule } from './core/authentification/register/register/register.module';
import { ForgotModule } from './core/authentification/forgot/forgot-password/forgot.module';
import { ResetPasswordModule } from './core/authentification/forgot/reset-password/reset-password.module';
import { LoadingPageComponent } from './core/services/loader/loading-page/loading-page.component';
import { HomeModule } from './modules/components/home/home.module';
import { TermsModule } from './modules/pages/terms/terms.module';
import { AboutModule } from './modules/components/about/about.module';
import { LoginModule } from './core/authentification/login/login.module';
import { CoreModule } from './core/core.module';

/**
 * This module is the primary module of Vibent
 * Each importe module, provider will be available for all Vibent app
 * BE CAREFUL: providers of lazy-loaded modules are module-scoped
 * This module is not lazy-loaded for the moment...  maybe not for long
 */
@NgModule({
  imports: [
    CoreModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    RouterModule,
    TermsModule,
    ForgotModule,
    ResetPasswordModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    AboutModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoadingPageComponent
  ]
})
export class AppModule {
}
