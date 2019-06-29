import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../../../core/authentification/header/header.module';


@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule
  ],
  declarations: [
    AboutComponent
  ],
  providers: [],
  exports: [AboutComponent]
})
export class AboutModule {
}
