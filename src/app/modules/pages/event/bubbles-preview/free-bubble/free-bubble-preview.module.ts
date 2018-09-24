import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FreeBubblePreviewComponent } from './free-bubble-preview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FreeBubblePreviewComponent
  ],
  providers: [],
  exports: [FreeBubblePreviewComponent]
})
export class FreeBubblePreviewComponentModule {
}
