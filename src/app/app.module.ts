import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {MatButtonModule, MatInputModule, MatRippleModule, MatTooltipModule} from '@angular/material';

import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {AgmCoreModule} from '@agm/core';
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
import {LoginModule} from './auth/login/login.module';
import {CookieService} from 'ngx-cookie-service';
import {AddGroupMembersComponent} from './dialogs/group-members/add-group-members/add-group-members.component';
import {MainComponent} from './main/main.component';
import {RegisterModule} from './auth/register/register.module';
import {ProfileModule} from './me/profile.module';
import {ProfileSettingsModule} from './dialogs/profile-settings/profile-settings.module';
import {ProfileSettingsComponent} from './dialogs/profile-settings/profile-settings.component';
import {AdminPanelService} from './services/admin-panel.service';
import {GroupSettingsComponent} from './dialogs/admin-panel/group-settings/group-settings.component';
import {GroupSettingsModule} from './dialogs/admin-panel/group-settings/group-settings.module';
import {GroupRightsModule} from './dialogs/admin-panel/group-rights/group-rights.module';
import {GroupRightsComponent} from './dialogs/admin-panel/group-rights/group-rights.component';

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
    LoginModule,
    RegisterModule,
    ProfileModule,
    ProfileSettingsModule,
    GroupSettingsModule,
    GroupRightsModule
  ],
  declarations: [
    AppComponent,
    MainComponent,
  ],
  providers: [CookieService, AdminPanelService],
  bootstrap: [AppComponent],
  entryComponents: [
    EventCreationComponent,
    GroupCreationComponent,
    GroupMembersComponent,
    AddGroupMembersComponent,
    ProfileSettingsComponent,
    GroupSettingsComponent,
    GroupRightsComponent]
})
export class AppModule {
}
