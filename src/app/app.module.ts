import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { FooterModule } from './modules/components/footer/footer.module';
import { SidebarModule } from './modules/components/sidebar/sidebar.module';
import { NavbarModule } from './modules/components/navbar/navbar.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './core/authentification/login/login.module';
import { CookieService } from 'ngx-cookie-service';
import { MainComponent } from './modules/components/main/main.component';
import { RegisterModule } from './core/authentification/register/register.module';
import { AdminPanelService } from './core/services/admin-panel.service';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { ForgotModule } from './core/authentification/forgot/forgot.module';
import { GroupsModule } from './modules/pages/group/joined-groups/groups.module';
import { EventsModule } from './modules/pages/event/attended-events/events.module';
import { EventModule } from './modules/pages/event/board/event.module';
import { GroupModule } from './modules/pages/group/board/group.module';
import { ProfileModule } from './modules/pages/me/profile/profile.module';
import { ProfileSettingsModule } from './modules/pages/me/dialogs/profile-settings/profile-settings.module';
import { GroupSettingsModule } from './core/admin-panels/group/dialogs/group-settings/group-settings.module';
import { PublicGroupModule } from './modules/pages/group/public-board/public-group.module';
import { GroupRequestsModule } from './core/admin-panels/group/dialogs/group-requests/group-requests.module';
import { GroupRightsModule } from './core/admin-panels/group/dialogs/group-rights/group-rights.module';
import { EventCreationComponent } from './modules/pages/event/dialogs/event-creation/event-creation.component';
import { GroupCreationComponent } from './modules/pages/group/dialogs/group-creation/group-creation.component';
import { GroupMembersComponent } from './modules/pages/group/dialogs/group-members/group-members.component';
import { AddGroupMembersComponent } from './modules/pages/group/dialogs/group-members/add-group-members/add-group-members.component';
import { ProfileSettingsComponent } from './modules/pages/me/dialogs/profile-settings/profile-settings.component';
import { GroupSettingsComponent } from './core/admin-panels/group/dialogs/group-settings/group-settings.component';
import { GroupRightsComponent } from './core/admin-panels/group/dialogs/group-rights/group-rights.component';
import { GroupRequestsComponent } from './core/admin-panels/group/dialogs/group-requests/group-requests.component';
import { GroupInvitationModule } from './modules/pages/group/group-invitation/group-invitation.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
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
    GroupInvitationModule,
    GroupModule,
    ForgotModule,
    LoginModule,
    RegisterModule,
    ProfileModule,
    ProfileSettingsModule,
    GroupSettingsModule,
    GroupRightsModule,
    GroupRequestsModule,
    PublicGroupModule,
    LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
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
    GroupRightsComponent,
    GroupRequestsComponent]
})
export class AppModule {
}
