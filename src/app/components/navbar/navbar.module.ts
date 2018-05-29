import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
