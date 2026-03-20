import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard-service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  getAllBooks = 0;
  getAllStudent = 0;
  getAll = 0;
  availableBooks = 0;
  totalElements = 0;

  constructor(private dashboardService: DashboardService) {console.log("THIS DASHBOARD LOADED");}

  ngOnInit(): void {
    this.loadDashboardData();
  }
  loadDashboardData() {

    this.dashboardService.getBooks().subscribe((books: any) => {
      console.log("books",books);
      this.getAllBooks = books.totalElements;
      console.log("books length",this.getAllBooks)
    });

      // calculate available books
      this.dashboardService.getAvailable().subscribe(
        (data:any)=>{
          console.log("available books",data);
          this.availableBooks = data.length;
        },
        (error)=>{
          console.log(error);
        }
      );
    this.dashboardService.getStudents().subscribe((students: any) => {
      this.getAllStudent = students.totalElements;
    });

    this.dashboardService.getIssues().subscribe((issues: any) => {
      this.getAll = issues.totalElements;
    });
  }
}


