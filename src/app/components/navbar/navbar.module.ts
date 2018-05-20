import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
