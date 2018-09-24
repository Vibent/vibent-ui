import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';
import { GroupAdminPanelModule } from '../../../core/admin-panels/group/group-admin-panel.module';
import { EventAdminPanelModule } from '../../../core/admin-panels/event/event-admin-panel.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GroupAdminPanelModule,
    EventAdminPanelModule
  ],
  declarations: [
    SidebarComponent
  ],
  providers: [],
  exports: [SidebarComponent]
})
export class SidebarModule {
}
