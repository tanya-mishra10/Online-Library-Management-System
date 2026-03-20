package com.example.Library.entity;

import jakarta.persistence.*;
@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer student_id;

    private String name;
    private String email;

    public Student() {
        super();
    }

    public Student(Integer student_id, String name, String email) {
        this.student_id = student_id;
        this.name = name;
        this.email = email;
    }

    public Integer getId() {
        return student_id;
    }

    public void setId(Integer student_id) {
        this.student_id = student_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Student{" +
                "student_id=" + student_id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
