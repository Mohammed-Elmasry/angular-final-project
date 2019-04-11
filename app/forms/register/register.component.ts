import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registrationForm;

  /* registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  }); */

  registerForm = this.fb.group({
    username: ['',Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.registerForm.value);
    localStorage.setItem("accounts"["username"], JSON.stringify(this.registerForm.value));
    alert("registered successfully");
  }
}
