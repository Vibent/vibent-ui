import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckboxBubblePreviewComponent } from './checkbox-bubble-preview.component';
import { BubbleContributorIconsModule } from '../bubble-contributor-icons/bubble-contributor-icons.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BubbleContributorIconsModule
  ],
  declarations: [
    CheckboxBubblePreviewComponent
  ],
  providers: [],
  exports: [CheckboxBubblePreviewComponent]
})
export class CheckboxBubblePreviewComponentModule {
}
