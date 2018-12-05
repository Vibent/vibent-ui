import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectedSocialComponent } from './connected-social.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ConnectedSocialComponent,
  ],
  exports: [
    ConnectedSocialComponent,
  ]
})
export class ConnectedSocialModule {
}
