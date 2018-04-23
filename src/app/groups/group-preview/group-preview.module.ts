import { NgModule } from '@angular/core';
import {GroupPreviewComponent} from './group-preview.component';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    GroupPreviewComponent
  ],
  providers: [],
  exports: [GroupPreviewComponent]
})
export class GroupPreviewModule { }
