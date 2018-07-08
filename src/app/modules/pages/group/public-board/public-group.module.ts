import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublicGroupComponent } from './public-group.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    PublicGroupComponent
  ],
  providers: [],
})
export class PublicGroupModule {
}
