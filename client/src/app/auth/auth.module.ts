import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class AuthModule { }
