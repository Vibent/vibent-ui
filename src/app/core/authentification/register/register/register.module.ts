import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { MailConfirmationComponent } from '../mail-confirmation/mail-confirmation.component';
import { VibentHeaderModule } from '../../header/vibent-header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    VibentHeaderModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  declarations: [
    RegisterComponent,
    MailConfirmationComponent
  ],
  providers: [AuthenticationService],
})

export class RegisterModule {
}
