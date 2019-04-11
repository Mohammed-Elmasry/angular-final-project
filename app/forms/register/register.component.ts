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

  /* registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  }); */

  registerForm = this.fb.group({
    username: ['',Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    conf_password: ['', Validators.required]
  
  },{
    validator:MustMatch('password','conf_password')
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }

  onSubmit() {
    if(this.registerForm.valid){ // validation passed successfully
      console.log(this.registerForm.value);
      alert("registered successfully");
    } else {
      console.error("registration failed");
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

}
