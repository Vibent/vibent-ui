import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPeopleComponent } from './add-people.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddPeopleComponent
  ],
  providers: [],
  exports: [AddPeopleComponent]
})
export class AddPeopleModule {
}
