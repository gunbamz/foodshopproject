import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any
  form = new FormGroup({
    emailName: new FormControl("", Validators.required),
    passWord: new FormControl("", Validators.required)
  })

  constructor(private authService:AuthService, private router:Router,) { }
    
  login() { 
      this.authService.googleLogin();
  }
    
  submit() {
    if (this.form.valid){
      this.user = this.form.value;

      this.authService.emailLogin(this.user.emailName, this.user.passWord)
       .then(res => {
        this.router.navigate(['/']);
       })
        .catch((err) => {
         if(err) {
           this.form.setErrors({
             invalidLogin: true
           });
         }
     })
      
    } 
      
  }
  get emailName() {
    return this.form.get("emailName");
  }
  get passWord() {
    return this.form.get("passWord");
  }
}



