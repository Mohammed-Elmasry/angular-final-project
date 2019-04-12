import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    let username = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    if (accounts[username] !== undefined) {
      if (accounts[username]["info"]["username"] === username) {
        if (accounts[username]["info"]["password"] === password) {
          console.log("You're logged in");
          this.authService.login();
          this.router.navigate(['/home']);
        } else {
          console.log("Incorrect password");
        }
      } else {
        console.log("account not found");
      }
    } else {
      console.log("Incorrect username or password!");
    }
    // console.log(this.loginForm)
  }
}
