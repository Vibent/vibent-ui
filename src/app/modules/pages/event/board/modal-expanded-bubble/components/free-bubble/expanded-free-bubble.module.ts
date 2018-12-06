import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedFreeBubbleComponent } from './expanded-free-bubble.component';
import { FreeSettingsComponent } from './settings/free-settings.component';
import { SettingsDeleteBubbleModule } from '../settings/settings-delete-bubble.module';
import { FreeHttpService } from '../../../../../../../core/services/bubbles-services/free/http/free-http.service';
import { FreeContentComponent } from './content/free-content.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SettingsDeleteBubbleModule
  ],
  declarations: [
    ExpandedFreeBubbleComponent,
    FreeSettingsComponent,
    FreeContentComponent
  ],
  providers: [FreeHttpService],
  exports: [ExpandedFreeBubbleComponent]
})
export class ExpandedFreeBubbleComponentModule {
}
