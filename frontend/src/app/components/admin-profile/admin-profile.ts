import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-admin-profile',
  standalone: false,
  templateUrl: './admin-profile.html',
  styleUrl: './admin-profile.scss',
})
export class AdminProfile {
adminDetails: any;

constructor(private auth: Auth) {}

ngOnInit() {
  this.auth.getAdminDetails().subscribe(
    (response) => {
      console.log('Admin details fetched successfully:', response);
      this.adminDetails = response;
    },
    (error) => {
      console.error('Error fetching admin details:', error);
    }
  );
}
}
