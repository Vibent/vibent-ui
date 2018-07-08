import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';
import { GroupAdminPanelModule } from '../../../core/admin-panels/group/group-admin-panel.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GroupAdminPanelModule,
  ],
  declarations: [
    SidebarComponent
  ],
  providers: [],
  exports: [SidebarComponent]
})
export class SidebarModule {
}