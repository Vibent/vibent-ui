import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from './language.service';
import { MessageService } from './message.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [

  ],
  providers: [
    LanguageService,
    MessageService
  ],
  exports: [
  ]
})

export class I18nModule {
}
