import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from '@agm/core';
import {GroupsModule} from './groups/groups.module';
import {FooterModule} from './components/footer/footer.module';
import {SidebarModule} from './components/sidebar/sidebar.module';
import {NavbarModule} from './components/navbar/navbar.module';
import {CommonModule} from '@angular/common';
import {EventsModule} from './events/events.module';
import {HttpClientModule} from '@angular/common/http';
import {EventModule} from './event/event.module';
import {EventCreationComponent} from './dialogs/event-creation/event-creation.component';
import {GroupCreationComponent} from './dialogs/group-creation/group-creation.component';
import {GroupModule} from './group/group.module';
import {GroupMembersComponent} from './dialogs/group-members/group-members.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    CommonModule,
    RouterModule,
    GroupsModule,
    EventsModule,
    FooterModule,
    SidebarModule,
    NavbarModule,
    EventModule,
    HttpClientModule,
    GroupModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EventCreationComponent, GroupCreationComponent, GroupMembersComponent]
})
export class AppModule { }
