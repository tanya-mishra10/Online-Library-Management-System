package com.example.Library.service;

import com.example.Library.entity.IssueBook;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IssueBookService {
    IssueBook issueBook(IssueBook issueBook);

    String returnBook(int issueId);

    Page<IssueBook> getAllIssuedBooks(int page, int size);
}
