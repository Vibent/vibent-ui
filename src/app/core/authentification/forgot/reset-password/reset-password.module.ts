import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { ResetPasswordComponent } from './reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { HeaderModule } from '../../header/header.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HeaderModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2TelInputModule
  ],
  declarations: [
    ResetPasswordComponent
  ],
  providers: [AuthenticationService],
})

export class ResetPasswordModule {
}
