import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {LoginRequest} from '../../models/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model: any = {
    username: 'VibentUserPM',
      password: '$2a$10$cLAIXc2UWiVdSGjxI3Fr5uJUvinj5hBHW1ySIW02.yjrS0DaAvs1O'
  };

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login(new LoginRequest(this.model.username, this.model.password))
  }

}
