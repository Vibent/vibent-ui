import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { GroupsResolver } from './shared/resolvers/groups.resolver';
import { EventsResolver } from './shared/resolvers/events.resolver';
import { EventResolver } from './shared/resolvers/event.resolver';
import { LoginComponent } from './core/authentification/login/login.component';
import { GroupEventsResolver } from './shared/resolvers/group-events.resolver';
import { MainComponent } from './modules/components/main/main.component';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { RegisterComponent } from './core/authentification/register/register/register.component';
import { ProfileResolver } from './shared/resolvers/profile.resolver';
import { GroupResolver } from './shared/resolvers/group.resolver';
import { ForgotComponent } from './core/authentification/forgot/forgot-password/forgot.component';
import { ProfileComponent } from './modules/pages/me/profile/profile.component';
import { EventsComponent } from './modules/pages/event/attended-events/events.component';
import { EventComponent } from './modules/pages/event/board/event.component';
import { GroupsComponent } from './modules/pages/group/joined-groups/groups.component';
import { GroupComponent } from './modules/pages/group/board/group.component';
import { PublicGroupComponent } from './modules/pages/group/public-board/public-group.component';
import { EventInvitationComponent } from './modules/pages/event/board/event-participants/participants-preview/event-invitation/event-invitation.component';
import { ResetPasswordComponent } from './core/authentification/forgot/reset-password/reset-password.component';
import { MailConfirmationComponent } from './core/authentification/register/mail-confirmation/mail-confirmation.component';
import { HomeComponent } from './modules/components/home/home.component';
import { LoginResolver } from './shared/resolvers/login.resolver';
import { TermsComponent } from './modules/pages/terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {LoginResolver}
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
    component: MainComponent,
    pathMatch: 'prefix',
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'me',
        component: ProfileComponent,
        resolve: {user: ProfileResolver}
      },
      {
        path: 'events',
        component: EventsComponent,
        resolve: {events: EventsResolver}
      },
      {
        path: 'events/:ref',
        component: EventComponent,
        resolve: {event: EventResolver}
      },
      {
        path: 'groups',
        component: GroupsComponent,
        resolve: {groups: GroupsResolver}
      },
      {
        path: 'groups/:ref',
        component: GroupComponent,
        resolve: {group: GroupResolver, groupEvents: GroupEventsResolver}
      },
      {
        path: 'groups/public/:ref',
        component: PublicGroupComponent,
        resolve: {group: GroupResolver}
      },
      {
        path: 'invite/e/:token',
        component: EventInvitationComponent
      },
      {path: '**', redirectTo: '/events', pathMatch: 'full'}
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],
  providers: [GroupResolver, GroupEventsResolver, GroupsResolver, ProfileResolver, EventsResolver, LoginResolver, EventResolver, AuthGuardService]

})
export class AppRoutingModule {
}
