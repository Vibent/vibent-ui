import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TermsComponent } from './terms.component';
import { FooterModule } from '../../components/footer/footer.module';
import { VibentHeaderModule } from '../../../core/authentification/header/vibent-header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FooterModule,
    VibentHeaderModule
  ],
  declarations: [
    TermsComponent
  ],
  exports: [TermsComponent]
})
export class TermsModule {
}
