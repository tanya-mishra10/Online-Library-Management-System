import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  standalone: false,
  templateUrl: './book-form.html',
  styleUrl: './book-form.scss',
})
export class BookForm {
  book = {
    title:'',
    author:'',
    category:'',
    available:true
  }
  constructor(private bookService: BookService){}

  onSubmit(){

    console.log(this.book);

    this.bookService.addBook(this.book).subscribe(
      (data)=>{
        console.log("Book Saved",data);
        alert("Book Added Successfully");
      },
      (error)=>{
        console.log(error);
        alert("Book is not available");
      }
    );

  }

}
