import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { FooterModule } from '../footer/footer.module';
import { VibentHeaderModule } from '../../../core/authentification/header/vibent-header.module';


@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    VibentHeaderModule
  ],
  declarations: [
    AboutComponent
  ],
  providers: [],
  exports: [AboutComponent]
})
export class AboutModule {
}
