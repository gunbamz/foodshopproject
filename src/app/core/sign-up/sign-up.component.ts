import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  email: string;
  password: string;

  constructor(private auth: AuthService, private router:Router,) { }

  onSubmit() { 
    this.auth.createUser(this.email, this.password)
    .then((res) => {
      this.router.navigate(['/']);
    })
  }

}
