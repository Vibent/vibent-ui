import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../../../core/loader/loader.module';
import { SocialAuthModule } from '../../../core/authentification/social/social-auth.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  imports: [
    LoaderModule,
    CommonModule,
    SocialAuthModule,
    RouterModule,
    FooterModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [],
  exports: [HomeComponent]
})
export class HomeModule {
}
