import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes =[
    { path: 'events',      component: EventsComponent },
    { path: 'groups',     component: GroupsComponent },
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
