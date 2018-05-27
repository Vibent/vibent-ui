import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GroupAdminPanelComponent} from './group-admin-panel.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    GroupAdminPanelComponent
  ],
  providers: [],
  exports: [GroupAdminPanelComponent]
})
export class GroupAdminPanelModule {
}
