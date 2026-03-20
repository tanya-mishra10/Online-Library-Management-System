import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  public loggedIn = false;

  constructor(private authService: Auth, private router: Router){}
  ngOnInit(): void {
    this.loggedIn=this.authService.isLoggedIn();  
  }

  logoutAdmin(){
    this.authService.logout()
    //location.reload   //it restart entire angular app 
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
