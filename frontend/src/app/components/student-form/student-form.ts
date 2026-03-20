import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.html',
  styleUrl: './student-form.scss',
})
export class StudentForm {
  student ={
    name: '',
    email: ''
  }

  constructor(private studentService: StudentService){}

 onSubmit(){

    console.log(this.student);

    this.studentService.addStudent(this.student).subscribe(
      (data)=>{
        console.log("Student Saved",data);
        alert("Student Added Successfully");
      },
      (error)=>{
        console.log(error);
      }
    );

  }


}
