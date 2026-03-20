import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private baseUrl = 'http://localhost:8282/admin'; 

  constructor(private http: HttpClient){}

  login(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  changePassword(data: any) {
    return this.http.post(`${this.baseUrl}/change-password`, data);
  }
   
  getAdminDetails() {
    return this.http.get(`${this.baseUrl}/profile`);
  }

  registerAdmin(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }
}
