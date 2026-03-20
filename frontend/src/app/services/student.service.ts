import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:8282';
  constructor(private http: HttpClient){}

  addStudent(student: any){
    return this.http.post(`${this.baseUrl}/api/student`, student);
  }

  getStudents(page: number, size: number){
    return this.http.get(`${this.baseUrl}/api/student?page=${page}&size=${size}`);
  }

  deleteStudent(student_id: number){
    return this.http.delete(`${this.baseUrl}/api/student/${student_id}`);
  }

}
