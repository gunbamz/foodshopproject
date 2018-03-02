import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private authService:AuthService, private router:Router,) { }
    
  login() { 
      this.authService.googleLogin();
  }
    
  submit() {
      this.authService.emailLogin(this.email, this.password);
      this.router.navigate(['/']);
  }
  
  
}



