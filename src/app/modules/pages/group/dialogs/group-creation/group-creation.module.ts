import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupCreationComponent } from './group-creation.component';
import { HttpService } from '../../../../../core/http/http.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  declarations: [
    GroupCreationComponent
  ],
  providers: [HttpService],
  exports: [GroupCreationComponent]
})
export class GroupCreationModule {
}
