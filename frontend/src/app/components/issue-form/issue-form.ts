import { Component } from '@angular/core';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issue-form',
  standalone: false,
  templateUrl: './issue-form.html',
  styleUrl: './issue-form.scss',
})
export class IssueForm {
  issue = {
    issueDate: '',
    returnDate: '',
    book: {
      book_id: ''
    },
    student: {
      student_id: ''
    }
  };

  constructor(private issueService: IssueService){}

  onSubmit(){
    console.log(this.issue);

    this.issueService.issueBook(this.issue).subscribe(
      (data)=>{
        alert("Book Issued Successfully");
        console.log("Book Issued Successfully", data);
      },
      (error)=>{
        alert("Book is not available");
        console.log(error);
      }
    );

  }

}
