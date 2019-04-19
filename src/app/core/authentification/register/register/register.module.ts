import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { MailConfirmationComponent } from '../mail-confirmation/mail-confirmation.component';
import { HeaderModule } from '../../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    Ng2TelInputModule
  ],
  declarations: [
    RegisterComponent,
    MailConfirmationComponent
  ],
  providers: [AuthenticationService],
})

export class RegisterModule {
}
