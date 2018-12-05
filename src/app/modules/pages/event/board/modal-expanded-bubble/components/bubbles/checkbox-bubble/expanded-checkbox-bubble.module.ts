import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedCheckboxBubbleComponent } from './expanded-checkbox-bubble.component';
import { CheckboxOptionComponent } from './content/checkbox-option/checkbox-option.component';
import { OptionCreationComponent } from './content/option-creation/option-creation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxHttpService } from '../../../../../../../../core/services/bubbles-services/checkbox/http/checkbox-http.service';
import { CheckboxDataService } from '../../../../../../../../core/services/bubbles-services/checkbox/data/checkbox-data.service';
import { CheckboxContentComponent } from './content/checkbox-content.component';
import { CheckboxSettingsComponent } from './settings/checkbox-settings.component';
import { SettingsDeleteBubbleModule } from '../../settings/settings-delete-bubble.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsDeleteBubbleModule
  ],
  declarations: [
    ExpandedCheckboxBubbleComponent,
    CheckboxContentComponent,
    CheckboxSettingsComponent,
    CheckboxOptionComponent,
    OptionCreationComponent
  ],
  providers: [CheckboxHttpService, CheckboxDataService],
  exports: [ExpandedCheckboxBubbleComponent, CheckboxOptionComponent, OptionCreationComponent]
})
export class ExpandedCheckboxBubbleComponentModule {
}
