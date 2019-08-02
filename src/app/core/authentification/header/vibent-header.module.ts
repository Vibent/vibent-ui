import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VibentHeaderComponent } from './vibent-header.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    VibentHeaderComponent,
  ],
  providers: [],
  exports: [VibentHeaderComponent]
})

export class VibentHeaderModule {
}
