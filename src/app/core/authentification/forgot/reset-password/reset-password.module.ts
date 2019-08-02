import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { ResetPasswordComponent } from './reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VibentHeaderModule } from '../../header/vibent-header.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    VibentHeaderModule,
    ReactiveFormsModule
  ],
  declarations: [
    ResetPasswordComponent
  ],
  providers: [AuthenticationService],
})

export class ResetPasswordModule {
}
