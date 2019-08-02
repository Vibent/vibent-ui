import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAppComponent } from './get-app.component';
import { FooterModule } from '../footer/footer.module';
import { VibentHeaderModule } from '../../../core/authentification/header/vibent-header.module';


@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    VibentHeaderModule
  ],
  declarations: [
    GetAppComponent
  ],
  providers: [],
  exports: [GetAppComponent]
})
export class GetAppModule {
}
