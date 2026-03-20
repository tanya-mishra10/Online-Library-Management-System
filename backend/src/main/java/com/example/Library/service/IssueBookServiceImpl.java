package com.example.Library.service;

import com.example.Library.entity.Book;
import com.example.Library.entity.IssueBook;
import com.example.Library.entity.Student;
import com.example.Library.repo.BookRepository;
import com.example.Library.repo.IssueRepository;
import com.example.Library.repo.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class IssueBookServiceImpl implements IssueBookService{
    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public IssueBook issueBook(IssueBook issueBook) {

        Book book = bookRepository.findById(issueBook.getBook().getBook_id())
                .orElseThrow(() -> new RuntimeException("Book not found"));

        if (Boolean.FALSE.equals(book.getAvailable())) {
            throw new RuntimeException("Book is already issued");
        }

        book.setAvailable(false);
        bookRepository.save(book);

        issueBook.setIssueDate(LocalDate.now());

        return issueRepository.save(issueBook);
    }

    @Override
    public String returnBook(int issueId) {
        IssueBook issueBook = issueRepository.findById(issueId)
                .orElseThrow(() -> new RuntimeException("Issue record not found"));

        Book book = issueBook.getBook();
        book.setAvailable(true);
        bookRepository.save(book);

        issueRepository.deleteById(issueId);
        return "Book return successfully!!";
    }

    @Override
    public Page<IssueBook> getAllIssuedBooks(int page, int size) {
        Pageable pageable = PageRequest.of(page,size);
        return issueRepository.findAll(pageable);
    }
}
