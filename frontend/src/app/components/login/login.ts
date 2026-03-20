import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  credentials={
    email:'',
    password:''
  }
  constructor(private authService: Auth, private router: Router){}

  onSubmit(){
    // console.log("form submited");
    if((this.credentials.email!='' && this.credentials.password!='') && (this.credentials.email!=null && this.credentials.password!=null)){
       console.log("form are submited");
       this.authService.login(this.credentials).subscribe({
      next: (response: any) => {
        localStorage.setItem("token", response.token);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        alert("Invalid Credentials");
      }
    });
      
  }
}
}
