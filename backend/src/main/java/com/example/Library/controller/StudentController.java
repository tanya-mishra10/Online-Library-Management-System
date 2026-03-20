package com.example.Library.controller;

import com.example.Library.entity.Student;
import com.example.Library.service.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    private StudentServiceImpl studentService;
    // add student handler
    @PostMapping
    public Student addStudent(@RequestBody Student student){
        return studentService.addStudent(student);
    }

    // get student handler
    @GetMapping
    public Page<Student> getAllStudent(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "7") int size
    ){
       return studentService.getAllStudents(page, size);
    }

    // get student by id
    @GetMapping("/{student_id}")
    public Student getStudentById(@PathVariable Integer student_id){
        return studentService.getStudentById(student_id);
    }

    //delete student
    @DeleteMapping("/{student_id}")
    public String deleteStudent(@PathVariable Integer student_id){
        studentService.deleteStudent(student_id);
        return "Student deleted successfully";
    }



}
