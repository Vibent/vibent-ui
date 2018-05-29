import {NgModule} from '@angular/core';
import {GroupRequestsComponent} from './group-requests.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    GroupRequestsComponent
  ],
  providers: [],
  exports: [GroupRequestsComponent]
})
export class GroupRequestsModule {
}
