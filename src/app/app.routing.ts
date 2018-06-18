import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { GroupsComponent } from './groups/groups.component';
import { EventComponent } from './event/event.component';
import { GroupComponent } from './group/group.component';
import { GroupsResolver } from './resolvers/groups.resolver';
import { EventsResolver } from './resolvers/events.resolver';
import { EventResolver } from './resolvers/event.resolver';
import { LoginComponent } from './auth/login/login.component';
import { GroupEventsResolver } from './resolvers/group-events.resolver';
import { MainComponent } from './main/main.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './me/profile.component';
import { ProfileResolver } from './resolvers/profile.resolver';
import { GroupResolver } from './resolvers/group.resolver';
import { PublicGroupComponent } from './group/public-group/public-group.component';
import { ForgotComponent } from './auth/forgot/forgot.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },
  {
    path: '', component: MainComponent, pathMatch: 'prefix', canActivate: [AuthGuardService],
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
  providers: [GroupResolver, GroupEventsResolver, GroupsResolver, ProfileResolver, EventsResolver, EventResolver, AuthGuardService]

})
export class AppRoutingModule {
}
