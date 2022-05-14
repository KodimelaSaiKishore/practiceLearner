import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent implements OnInit {
  loggedin: boolean = false;
  buttonAccess: [string, string] = ['Login', 'Register'];
  pageHeading: any = [
    ['Login', 'Login to your account'],
    ['Create Account', 'Get started with your free account'],
  ];
  buttonName: string = '';
  pageHeadingName: string = '';
  myGroup: any = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) {}

  loginFrom = this._formBuilder.group({
    fullName: [''],
    emailAddress: [''],
    password: [''],
    confirmPassword: [''],
  });

  ngOnInit(): void {
    this.loggedin = false;
    this.buttonName = this.buttonAccess[1];
    this.pageHeadingName = this.pageHeading[1];
  }

  loginChange() {
    this.loggedin = !this.loggedin;
    this.buttonName = this.loggedin
      ? this.buttonAccess[0]
      : this.buttonAccess[1];
    this.pageHeadingName = this.loggedin
      ? this.pageHeading[0]
      : this.pageHeading[1];
    this.formManager();
  }

  formManager() {
    if (this.loggedin) {
      this.loginFrom = this._formBuilder.group({
        fullName: ['', Validators.required],
        emailAddress: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      });
    } else {
      this.loginFrom = this._formBuilder.group({
        fullName: [{ value: '', disabled: this.loggedin }, Validators.required],
        emailAddress: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: [
          { value: '', disabled: this.loggedin },
          Validators.required,
        ],
      });
    }
  }

  register() {
    console.log(this.loginFrom.valid)
    if (this.loginFrom.valid) {
      this._authService.Register(this.loginFrom.value).subscribe((data) => {
        console.log(data);
      });
    }else{
      console.log(this.loginFrom.value.invalid)
    }
  }
}
