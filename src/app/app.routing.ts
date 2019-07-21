import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EventsResolver } from './shared/resolvers/events.resolver';
import { EventResolver } from './shared/resolvers/event.resolver';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { RegisterComponent } from './core/authentification/register/register/register.component';
import { ProfileResolver } from './shared/resolvers/profile.resolver';
import { ForgotComponent } from './core/authentification/forgot/forgot-password/forgot.component';
import { ResetPasswordComponent } from './core/authentification/forgot/reset-password/reset-password.component';
import { MailConfirmationComponent } from './core/authentification/register/mail-confirmation/mail-confirmation.component';
import { HomeComponent } from './modules/components/home/home.component';
import { LoginResolver } from './shared/resolvers/login.resolver';
import { TermsComponent } from './modules/pages/terms/terms.component';
import { AboutComponent } from './modules/components/about/about.component';
import { LoginComponent } from './core/authentification/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {LoginResolver}
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    resolve: {LoginResolver}
  },
  {
    path: 'login',
    component: LoginComponent,
    resolve: {LoginResolver}
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },
  {
    path: 'passwordReset/:token',
    component: ResetPasswordComponent
  },
  {
    path: 'confirmEmail/:token',
    component: MailConfirmationComponent
  },
  {
    path: '',
    loadChildren: './modules/components/main/main.module#MainModule',
    pathMatch: 'prefix',
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [],
  providers: [ProfileResolver, EventsResolver, LoginResolver, EventResolver, AuthGuardService]

})
export class AppRoutingModule {
}
