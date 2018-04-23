import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [],
  exports: [NavbarComponent]
})
export class NavbarModule { }
