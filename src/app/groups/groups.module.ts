
import { NgModule } from '@angular/core';
import {GroupPreviewModule} from './group-preview/group-preview.module';
import {CommonModule} from '@angular/common';
import {GroupsComponent} from './groups.component';

@NgModule({
  imports: [
    CommonModule,
    GroupPreviewModule
  ],
  declarations: [
    GroupsComponent
  ],
  providers: [],
})
export class GroupsModule { }
