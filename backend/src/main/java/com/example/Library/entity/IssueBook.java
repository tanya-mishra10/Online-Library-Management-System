package com.example.Library.entity;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class IssueBook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private LocalDate issueDate;
    private LocalDate returnDate;

    @ManyToOne
    @JoinColumn (name = "book_id")
    private Book book;

    @ManyToOne
    @JoinColumn (name = "student_id")
    private Student student;

    public IssueBook() {
        super();
    }

    public IssueBook(Integer id, LocalDate issueDate, LocalDate returnDate, Book book, Student student) {
        this.id = id;
        this.issueDate = issueDate;
        this.returnDate = returnDate;
        this.book = book;
        this.student = student;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDate getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(LocalDate issueDate) {
        this.issueDate = issueDate;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    @Override
    public String toString() {
        return "IssueBook{" +
                "id=" + id +
                ", issueDate=" + issueDate +
                ", returnDate=" + returnDate +
                ", book=" + book +
                ", student=" + student +
                '}';
    }
}
