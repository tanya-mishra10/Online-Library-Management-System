import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-change-password',
  standalone: false,
  templateUrl: './change-password.html',
  styleUrl: './change-password.scss',
})
export class ChangePassword {
  
  passwordData = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  constructor(private authService: Auth) {}

  changePassword(){

    if(this.passwordData.newPassword !== this.passwordData.confirmPassword){
      alert("Password not matched");
      return;
    }

    this.authService.changePassword(this.passwordData).subscribe(
      (data)=>{
        alert("Password Updated Successfully");
      },
      (error)=>{
        alert("Old Password Incorrect");
      }
    );
  }
  }
