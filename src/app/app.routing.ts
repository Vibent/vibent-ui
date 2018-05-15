import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {EventsComponent} from './events/events.component';
import {GroupsComponent} from './groups/groups.component';
import {EventComponent} from './event/event.component';
import {GroupComponent} from './group/group.component';
import {GroupResolver} from './resolvers/group.resolver';
import {GroupsResolver} from './resolvers/groups.resolver';
import {EventsResolver} from './resolvers/events.resolver';
import {EventResolver} from './resolvers/event.resolver';

const routes: Routes = [
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
    resolve: {group: GroupResolver}
  },
  {path: '', redirectTo: 'events', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],
  providers: [GroupResolver, GroupsResolver, EventsResolver, EventResolver]
})
export class AppRoutingModule {
}
