import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
  ],
  declarations: [
    LoginComponent
  ],
  providers: [AuthenticationService],
})

export class LoginModule {
}
