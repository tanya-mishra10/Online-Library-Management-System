import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private baseUrl = 'http://localhost:8282';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any[]>(`${this.baseUrl}/api/books`);
  }

  getStudents() {
    return this.http.get<any[]>(`${this.baseUrl}/api/student`);
  }

  getIssues() {
    return this.http.get<any[]>(`${this.baseUrl}/api/issue`);
  }
  
  getAvailable(){
    return this.http.get<any[]>(`${this.baseUrl}/api/books/available`);
  }
}
