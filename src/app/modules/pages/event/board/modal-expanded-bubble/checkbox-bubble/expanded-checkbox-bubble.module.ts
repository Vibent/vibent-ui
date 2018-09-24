import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpandedCheckboxBubbleComponent } from './expanded-checkbox-bubble.component';
import { CheckboxOptionComponent } from './checkbox-option/checkbox-option.component';
import { OptionCreationComponent } from './option-creation/option-creation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxHttpService } from '../../../../../../core/services/bubbles-services/checkbox/http/checkbox-http.service';
import { CheckboxDataService } from '../../../../../../core/services/bubbles-services/checkbox/data/checkbox-data.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ExpandedCheckboxBubbleComponent,
    CheckboxOptionComponent,
    OptionCreationComponent
  ],
  providers: [CheckboxHttpService, CheckboxDataService],
  exports: [ExpandedCheckboxBubbleComponent, CheckboxOptionComponent, OptionCreationComponent]
})
export class ExpandedCheckboxBubbleComponentModule {
}
