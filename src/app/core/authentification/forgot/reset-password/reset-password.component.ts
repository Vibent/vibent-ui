import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../http/http.service';
import Swal from 'sweetalert2';
import { Messages } from '../../../../shared/messages-codes/messages';

@Component({
  selector: 'app-login',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup;
  newPassword: FormControl;
  newPasswordConfirmation: FormControl;

  formsValid: any = {
    newPassword: true,
    newPasswordConfirmation: true,
  };

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.newPassword = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.newPasswordConfirmation = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
  }

  createForm() {
    this.form = new FormGroup({
      newPassword: this.newPassword,
      newPasswordConfirmation: this.newPasswordConfirmation,
    });
  }

  reset() {
    this.formsValid.newPassword = this.newPassword.valid;
    this.formsValid.newPasswordConfirmation = this.newPassword.value === this.newPasswordConfirmation.value;

    if (this.formsValid.newPassword && this.formsValid.newPasswordConfirmation) {
      this.httpService.validatePasswordReset({
        newPassword: this.newPassword.value,
        token: this.route.snapshot.paramMap.get('token')
      }).subscribe(() => {
        this.loginPage();
        Swal({
          type: 'success',
          title: Messages.PASSWORD_RESET,
          showConfirmButton: true,
        });
      }, (e) => {
        Swal({
          type: 'error',
          title: e.error.error.code,
          showConfirmButton: true,
        });
      });
    }
  }

  loginPage() {
    this.router.navigate(['/login']);
  }

}
