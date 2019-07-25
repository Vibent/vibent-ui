import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarModule } from '../sidebar/sidebar.module';
import { NavbarModule } from '../navbar/navbar.module';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { TutorialModule } from '../../pages/event/dialogs/tutorial/tutorial.module';
import { ProfileResolver } from '../../../shared/resolvers/profile.resolver';
import { EventsComponent } from '../../pages/event/attended-events/events.component';
import { EventsResolver } from '../../../shared/resolvers/events.resolver';
import { EventResolver } from '../../../shared/resolvers/event.resolver';
import { EventInvitationComponent } from '../../pages/event/board/event-participants/participants-preview/invitation-link-page/event-invitation.component';
import { ListInvitationComponent } from '../../pages/me/distribution-lists/expanded-distribution-list/invitation-link-page/list-invitation.component';
import { EventsModule } from '../../pages/event/attended-events/events.module';
import { ProfileSettingsModule } from '../../pages/me/profile/settings/profile-settings.module';
import { ModalManagerService } from '../../../core/services/modal-manager.service';
import { NotificationsService } from '../../../core/services/notifications.service';
import { EventInvitationModule } from '../../pages/event/board/event-participants/participants-preview/invitation-link-page/event-invitation.module';
import { ListInvitationModule } from '../../pages/me/distribution-lists/expanded-distribution-list/invitation-link-page/list-invitation.module';
import { ProfileImageService } from '../../../core/http/profile-image.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'me',
        loadChildren: '../../pages/me/profile/profile.module#ProfileModule',
        resolve: {user: ProfileResolver}
      },
      {
        path: 'events',
        component: EventsComponent,
        resolve: {events: EventsResolver}
      },
      {
        path: 'events/:ref',
        loadChildren: '../../pages/event/board/event.module#EventModule',
        resolve: {event: EventResolver},
      },
      {
        path: 'invite/e/:token',
        component: EventInvitationComponent
      },
      {
        path: 'invite/l/:token',
        component: ListInvitationComponent
      },
      {path: '**', redirectTo: '/events', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SidebarModule,
    NavbarModule,
    TutorialModule,
    EventsModule,
    ProfileSettingsModule,
    EventInvitationModule,
    ListInvitationModule
  ],
  declarations: [
    MainComponent
  ],
  providers: [
    ModalManagerService,
    NotificationsService,
    ProfileImageService
  ],
  exports: [RouterModule]
})

export class MainModule {
}
