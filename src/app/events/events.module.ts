import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsComponent} from './events.component';
import {EventPreviewModule} from './event-preview/event-preview.module';
import {RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {EventCreationModule} from '../dialogs/event-creation/event-creation.module';

@NgModule({
  imports: [
    CommonModule,
    EventPreviewModule,
    EventCreationModule,
    RouterModule,
    MatDialogModule
  ],
  declarations: [
    EventsComponent
  ],
  providers: [],
})
export class EventsModule {
}
