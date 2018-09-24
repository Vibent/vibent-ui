import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubblesExplanationsComponent } from './bubbles-explanations.component';
import { RouterModule } from '@angular/router';
import { AlimentationExplanationComponent } from './alimentation/alimentation-explanation.component';
import { CheckboxExplanationComponent } from './checkbox/checkbox-explanation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BubblesExplanationsComponent, AlimentationExplanationComponent, CheckboxExplanationComponent],
  exports: [BubblesExplanationsComponent, AlimentationExplanationComponent, CheckboxExplanationComponent],
})
export class ModalBubbleExplanationComponentModule {
}
