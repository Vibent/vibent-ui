import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventAdminPanelComponent } from './event-admin-panel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    EventAdminPanelComponent
  ],
  providers: [],
  exports: [EventAdminPanelComponent]
})
export class EventAdminPanelModule {
}
