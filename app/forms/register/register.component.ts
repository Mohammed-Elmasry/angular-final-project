import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/forms/shared/must-match.directive';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registrationForm;

  registerForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    conf_password: ['', Validators.required]

  }, {
      validator: MustMatch('password',
        'conf_password')
    });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onSubmit() {

    //preparing localStorage
    let accounts = {};
    localStorage.setItem("accounts", JSON.stringify(accounts));

    //taking data from form
    let username = this.registerForm.controls.username.value;
    let password = this.registerForm.controls.password.value;
    let userbody = this.registerForm.value;
    let userObject = { "info": userbody };

    accounts = JSON.parse(localStorage.getItem("accounts"));
    if (accounts !== null) {
      accounts[username] = userObject;
      console.log(accounts);
      localStorage.setItem("accounts", JSON.stringify(accounts));
      console.log("activate authService from onSubmit");
      this.authService.login();
      this.router.navigate(['/home']);
      console.log("this is second time...and again");
    } else {
      alert("No localStorage database is setup");
    }
  }
}
