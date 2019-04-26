import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FreeBubblePreviewComponent } from './free-bubble-preview.component';
import { BubbleContributorIconsModule } from '../bubble-contributor-icons/bubble-contributor-icons.module';
import { TruncatePipe } from '../../../../../shared/global/truncate-pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BubbleContributorIconsModule
  ],
  declarations: [
    FreeBubblePreviewComponent,
    TruncatePipe
  ],
  providers: [],
  exports: [FreeBubblePreviewComponent]
})
export class FreeBubblePreviewComponentModule {
}
