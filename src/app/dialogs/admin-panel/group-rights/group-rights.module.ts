import {NgModule} from '@angular/core';
import {GroupRightsComponent} from './group-rights.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    GroupRightsComponent
  ],
  providers: [],
  exports: [GroupRightsComponent]
})
export class GroupRightsModule {
}
