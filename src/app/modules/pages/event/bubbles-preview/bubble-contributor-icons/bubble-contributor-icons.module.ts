import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleContributorIconsComponent } from './bubble-contributor-icons.component';
import { BubbleContributorsService } from '../../../../../core/services/bubbles-services/bubble-contributors.service.';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BubbleContributorIconsComponent
  ],
  providers: [BubbleContributorsService],
  exports: [BubbleContributorIconsComponent]
})
export class BubbleContributorIconsModule {
}
