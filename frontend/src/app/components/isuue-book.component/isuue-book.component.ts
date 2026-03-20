import { Component, ViewChild } from '@angular/core';
import { IssueService } from '../../services/issue.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-isuue-book.component',
  standalone: false,
  templateUrl: './isuue-book.component.html',
  styleUrl: './isuue-book.component.scss',
})
export class IsuueBookComponent {
  displayedColumns: string[] = ['id', 'bookTitle', 'studentName', 'issueDate', 'returnDate', 'actions'];
  issueBooks: any[] = [];
  totalElements=0;
  pageSize=7;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  constructor(private issueService: IssueService) {}

  ngOnInit() {
    this.loadIssueBooks(0,7);
  }
  loadIssueBooks(page: number, size: number) {
    this.issueService.getIssueBooks(page, size).subscribe((data: any) => {
      this.issueBooks = data.content;
      this.totalElements = data.totalElements;
    });
  }
  pageChanged(event:any){
    this.loadIssueBooks(event.pageIndex,event.pageSize);
  }

  returnBook(issueId: number) {
    this.issueService.returnBook(issueId).subscribe(() => {
      this.issueBooks = this.issueBooks.filter(issue => issue.id !== issueId);
    });
  }

}
