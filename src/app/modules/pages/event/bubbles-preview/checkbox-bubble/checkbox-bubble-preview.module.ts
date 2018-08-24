import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckboxBubblePreviewComponent } from './checkbox-bubble-preview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CheckboxBubblePreviewComponent
  ],
  providers: [],
  exports: [CheckboxBubblePreviewComponent]
})
export class CheckboxBubblePreviewComponentModule {
}
