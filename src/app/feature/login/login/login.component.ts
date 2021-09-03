import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenGuard } from '@core/guard/token/token.guard';
import { LoginService } from '../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  patternEmail: RegExp | string = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  constructor(
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private loginService: LoginService,
  ) {
  }
  ngOnInit(): void {
    this.buildForm();
    this.authToken();
  }

  private buildForm() {
    this.formLogin = this.formBuilder.group({
      email: [null,
        [Validators.required,
        Validators.email,
        Validators.pattern(this.patternEmail)]],
      password: [null,
        [Validators.required,
        Validators.minLength(8)]]
    })
  }



  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

  private authToken() {
    const token = localStorage.getItem("token")
    if (token === "QpwL5tke4Pnpja7X4") {
      this.redirectUsers();
    }

  }
  public login() {
    this.loginService.login(this.formLogin.value).
      subscribe((response => {
        localStorage.setItem("token", response.token);
        this.redirectUsers();
      }))
  }

  get f() { return this.formLogin }
  get email() { return this.formLogin.get('email') }
  get password() { return this.formLogin.get('password') }
}
