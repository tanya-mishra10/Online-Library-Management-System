import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'http://localhost:8282';
  constructor(private http: HttpClient){}

  addBook(book: any){
    return this.http.post(`${this.baseUrl}/api/books`, book);
  }

  getBooks(page:number,size:number){
    return this.http.get(`${this.baseUrl}/api/books?page=${page}&size=${size}`);
  }

  deleteBook(book_id: number){
    return this.http.delete(`${this.baseUrl}/api/books/${book_id}`);
  }


}
