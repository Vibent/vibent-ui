import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsIconsComponent } from './seats-icons.component';
import { RepeatDirective } from '../../../../../../shared/global/repeat-directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SeatsIconsComponent,
    RepeatDirective
  ],
  providers: [],
  exports: [SeatsIconsComponent]
})
export class SeatsIconsModule {
}
