import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpModule,
        HttpClientModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [AuthenticationService],

})

export class LoginModule {
}
