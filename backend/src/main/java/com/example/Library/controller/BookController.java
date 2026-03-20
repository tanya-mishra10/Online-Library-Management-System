package com.example.Library.controller;

import com.example.Library.entity.Book;
import com.example.Library.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping
    public Book addBook(@RequestBody Book book){
        return bookService.addBook(book);
    }

    @GetMapping
    public Page<Book> getAllBooks(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ){
        return bookService.getAllBooks(page,size);
    }

    @GetMapping("/{book_id}")
    public Book getBookById(@PathVariable Integer book_id){
        return bookService.getBookById(book_id);
    }

    @DeleteMapping("/{book_id}")
    public String deleteBook(@PathVariable Integer book_id){
        bookService.deleteBook(book_id);
        return "Book Deleted";
    }

    @PutMapping("/{book_id}")
    public Book updateBook(@PathVariable Integer book_id, @RequestBody Book book){
        return bookService.updateBook(book_id,book);
    }
    @GetMapping("/available")
    public List<Book> getAvailableBook(){
        return bookService.getAvailableBook();
    }
}
