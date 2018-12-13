import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectedSocialComponent } from './connected-social.component';
import { MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
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
