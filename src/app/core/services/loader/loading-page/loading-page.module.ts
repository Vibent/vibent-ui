import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageComponent } from './loading-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderModule } from '../../../loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    LoaderModule
  ],
  declarations: [
    LoadingPageComponent
  ],
  providers: [],
  exports: [LoadingPageComponent]
})

export class LoadingPageModule {
}
