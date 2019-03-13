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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginModule } from './core/authentification/login/login.module';
import { CookieService } from 'ngx-cookie-service';
import { MainComponent } from './modules/components/main/main.component';
import { RegisterModule } from './core/authentification/register/register/register.module';
import { GroupAdminPanelService } from './core/services/group-admin-panel.service';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { ForgotModule } from './core/authentification/forgot/forgot-password/forgot.module';
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
import { GroupInvitationModule } from './modules/pages/group/group-invitation/group-invitation.module';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { EventAdminPanelService } from './core/services/event-admin-panel.service';
import { NotificationsService } from './core/services/notifications.service';
import { UserManagementService } from './core/services/user-management.service';
import { LoaderModule } from './core/loader/loader.module';
import { LoaderService } from './core/services/loader/service/loader.service';
import { ResetPasswordModule } from './core/authentification/forgot/reset-password/reset-password.module';
import { EventSettingsModule } from './core/admin-panels/event/dialogs/event-settings/event-settings.module';
import { ScreenService } from './core/services/screen.service';
import { LoadingPageComponent } from './core/services/loader/loading-page/loading-page.component';
import { LoadingPageModule } from './core/services/loader/loading-page/loading-page.module';
import { HomeModule } from './modules/components/home/home.module';

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
    LoadingPageModule,
    HttpClientModule,
    GroupInvitationModule,
    GroupModule,
    ForgotModule,
    ResetPasswordModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    ProfileModule,
    ProfileSettingsModule,
    GroupSettingsModule,
    EventSettingsModule,
    GroupRightsModule,
    GroupRequestsModule,
    PublicGroupModule,
    LoaderModule,
    LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
  ],
  declarations: [
    AppComponent,
    MainComponent
  ],
  providers: [
    CookieService,
    ScreenService,
    LoaderService,
    GroupAdminPanelService,
    EventAdminPanelService,
    NotificationsService,
    UserManagementService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [
    LoadingPageComponent
  ]
})
export class AppModule {
}
