import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { ForgotComponent } from './forgot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VibentHeaderModule } from '../../header/vibent-header.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    VibentHeaderModule,
  ],
  declarations: [
    ForgotComponent
  ],
  providers: [AuthenticationService],
})

export class ForgotModule {
}
