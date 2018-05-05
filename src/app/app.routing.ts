import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { GroupsComponent } from './groups/groups.component';
import {EventComponent} from './event/event.component';
import {GroupComponent} from './group/group.component';

const routes: Routes = [
    { path: 'events',      component: EventsComponent },
    { path: 'groups',     component: GroupsComponent },
    { path: 'event',     component: EventComponent },
    { path: 'group',     component: GroupComponent },
    { path: '',               redirectTo: 'events', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
