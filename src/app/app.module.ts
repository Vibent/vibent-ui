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
import { TermsModule } from './modules/components/terms/terms.module';
import { AboutModule } from './modules/components/about/about.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoginModule } from './core/authentification/login/login.module';
import { CoreModule } from './core/core.module';
import { GetAppModule } from './modules/components/get-app/get-app.module';
import { FirebaseMessagingService } from './core/services/firebase/firebase-messaging.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { MockData } from './shared/global/mock-data';

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
    GetAppModule,
    TermsModule,
    ForgotModule,
    ResetPasswordModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    AboutModule,
    ServiceWorkerModule.register('ngsw-worker.js'),

    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [
    AppComponent
  ],
  providers: [FirebaseMessagingService, MockData],
  bootstrap: [AppComponent],
  entryComponents: [
    LoadingPageComponent
  ]
})
export class AppModule {
}
