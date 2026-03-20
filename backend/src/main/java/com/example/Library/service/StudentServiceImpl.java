package com.example.Library.service;

import com.example.Library.entity.Student;
import com.example.Library.repo.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService{
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Page<Student> getAllStudents(int page, int size) {
        Pageable pageable = PageRequest.of(page,size);
        return studentRepository.findAll(pageable);
    }

    @Override
    public Student getStudentById(int student_id) {
        return studentRepository.findById(student_id).orElseThrow(() -> new RuntimeException("Student not found"));
    }

    @Override
    public void deleteStudent(int student_id) {
        studentRepository.deleteById(student_id);
    }
}
