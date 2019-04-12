import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/forms/shared/must-match.directive';
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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

  onSubmit() {

    //preparing localStorage
    let accounts = {};
    let registeredAccounts = [];
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("registeredAccounts", JSON.stringify(registeredAccounts));

    //taking data from form
    let username = this.registerForm.controls.username.value;
    let userbody = this.registerForm.value;
    let userObject = { "info": userbody };

    accounts = JSON.parse(localStorage.getItem("accounts"));
    registeredAccounts = JSON.parse(localStorage.getItem("registeredAccounts"));

    console.log(typeof registeredAccounts);
    if (accounts !== null) {
      accounts[username] = userObject;
      registeredAccounts.push(username);

      localStorage.setItem("registeredAccounts", JSON.stringify(registeredAccounts));
      localStorage.setItem("accounts", JSON.stringify(accounts));

      console.log("this is second time...and again");
    } else {
      alert("No localStorage database is setup");
    }
  }
}
