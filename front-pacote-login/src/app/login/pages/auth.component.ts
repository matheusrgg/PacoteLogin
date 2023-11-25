

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminInterface } from 'src/app/login/interfaces/admin.interface';
import { AuthStore } from 'src/app/login/service/auth.store';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthStore,
    private loginService: AuthStore,


  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }



  onSubmit() {
    if (this.loginForm.valid) {
      const val = this.loginForm.value

      const credentials: AdminInterface = {
        username: val.username,
        password: val.password
      };

      this.auth.login(credentials)
        .subscribe({
          next: (res) => {
            this.loginService.setToken(res);
            this.router.navigate(["/admin/table"])
          },
          error: () => {

            alert("Login Failed!")
          }


        })
    }
  }
}
