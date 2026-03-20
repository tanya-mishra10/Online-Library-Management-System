package com.example.Library.service;

import com.example.Library.entity.Student;
import org.springframework.data.domain.Page;

import java.util.List;

public interface StudentService {
    Student addStudent(Student student);

    Page<Student> getAllStudents(int page, int size);

    Student getStudentById(int student_id);

    void deleteStudent(int student_id);
}
