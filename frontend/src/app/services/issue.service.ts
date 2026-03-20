import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private baseUrl = 'http://localhost:8282';
   
  constructor(private http: HttpClient){}

  issueBook(issue: any){
    return this.http.post(`${this.baseUrl}/api/issue`, issue);
  }

  getIssueBooks(page: number, size: number){
    return this.http.get(`${this.baseUrl}/api/issue?page=${page}&size=${size}`);
  }

  returnBook(issueId: number){
    return this.http.delete(`${this.baseUrl}/api/issue/${issueId}`);
  }
  
}
