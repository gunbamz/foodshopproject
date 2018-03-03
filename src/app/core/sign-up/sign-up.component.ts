import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: any
  form = new FormGroup({
    emailName: new FormControl("", Validators.required),
    passWord: new FormControl("", Validators.required)
  })
  constructor(private auth: AuthService, private router:Router,) { }

  onSubmit() { 
    if(this.form.valid) {
      this.user = this.form.value;
    this.auth.createUser(this.user.emailName, this.user.passWord)
    .then(res => {
      this.router.navigate(['/']);
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
