import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-admin-form',
  standalone: false,
  templateUrl: './admin-form.html',
  styleUrl: './admin-form.scss',
})
export class AdminForm {
  admin = {
    email: '',
    password: '',
  };
  
  constructor(private authService: Auth) {}

  onSubmit() {
    console.log(this.admin);
    this.authService.registerAdmin(this.admin).subscribe(
      (response) => {
        console.log('Admin registered successfully:', response);
        // Reset the form or navigate to another page
        this.admin = { email: '', password: ''};
      },
      (error) => {
        console.error('Error registering admin:', error);
      }
    );
  }
  }
