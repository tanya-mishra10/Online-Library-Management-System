import { Component, ViewChild } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-student.component',
  standalone: false,
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
})
export class StudentComponent {
  displayedColumns: string[] = ['student_id','name','email', 'actions'];
  students: any[] = [];
  totalElements=0;
  pageSize=7;

  constructor(private studentService: StudentService) {}
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  ngOnInit() {
    this.loadStudents(0,7);
  }

  loadStudents(page: number, size: number) {
    this.studentService.getStudents(page, size).subscribe((data: any) => {
      this.students = data.content;
      this.totalElements = data.totalElements;
    });
  }
  pageChanged(event:any){

    this.loadStudents(event.pageIndex,event.pageSize);

  }

  deleteStudent(student_id:number){

  if(confirm("Are you sure you want to delete this student?")){

    this.studentService.deleteStudent(student_id).subscribe(

      (data)=>{
        alert("Student deleted successfully");

      },

      (error)=>{
        console.log(error);
      }

    );

  }
  }
}
