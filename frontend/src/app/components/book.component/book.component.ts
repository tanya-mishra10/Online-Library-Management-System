import { Component, ViewChild } from '@angular/core';
import { BookService } from '../../services/book.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-book.component',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  displayedColumns: string[] = ['bookId','title','author', 'category', 'actions'];
  books: any[] = [];
  totalElements=0;
  pageSize=7;

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(private bookService: BookService) {}
   
  ngOnInit(){
    this.loadBooks(0,7);
  }

  loadBooks(page:number,size:number){

    this.bookService.getBooks(page,size).subscribe((data:any)=>{

      this.books=data.content;
      this.totalElements=data.totalElements;

    });

  }
  pageChanged(event:any){

    this.loadBooks(event.pageIndex,event.pageSize);

  }
  
  deleteBook(id:number){
  if(confirm("Are you sure you want to delete this book?")){

    this.bookService.deleteBook(id).subscribe(

      (data)=>{
        alert("Book deleted successfully");

      },

      (error)=>{
        console.log(error);
      }

    );

  }
  }
}
