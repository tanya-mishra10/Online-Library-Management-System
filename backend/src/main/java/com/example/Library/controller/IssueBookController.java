package com.example.Library.controller;

import com.example.Library.entity.IssueBook;
import com.example.Library.repo.BookRepository;
import com.example.Library.service.IssueBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issue")
public class IssueBookController {
    @Autowired
    private IssueBookService issueBookService;

    @PostMapping
    public IssueBook issueBook(@RequestBody IssueBook issueBook) {
        return issueBookService.issueBook(issueBook);
    }

    @GetMapping
    public Page<IssueBook> getAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "7") int size
    ) {
        return issueBookService.getAllIssuedBooks(page, size);
    }

    @DeleteMapping("/{id}")
    public String returnBook(@PathVariable int id) {
        issueBookService.returnBook(id);
        return "Book returned successfully";
    }




}
