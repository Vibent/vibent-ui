import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';
import { EventAdminPanelModule } from '../../../core/admin-panels/event/event-admin-panel.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
