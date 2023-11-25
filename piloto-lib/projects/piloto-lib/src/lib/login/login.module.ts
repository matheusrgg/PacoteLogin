import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from './pages/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthStore } from './service/auth.store';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
})
export class LoginModule { }
