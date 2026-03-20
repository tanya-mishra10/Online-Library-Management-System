package com.example.Library.service;

import com.example.Library.entity.Book;
import com.example.Library.repo.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BookServiceImpl implements BookService{
    @Autowired
     private BookRepository bookRepository;


    @Override
    public Book addBook(Book book) {

        if (book.getAvailable() == null) {
            book.setAvailable(true);
        }

        return bookRepository.save(book);
    }

    @Override
    public Page<Book> getAllBooks(int page, int size){
        Pageable pageable = PageRequest.of(page,size);
        return bookRepository.findAll(pageable);
    }

    @Override
    public Book getBookById(int book_id) {
        return bookRepository.findById(book_id).orElseThrow(() -> new RuntimeException("Book not found"));
    }

    @Override
    public void deleteBook(int book_id) {
       bookRepository.deleteById(book_id);
    }

    @Override
    public Book updateBook(int book_id, Book book) {
        Book oldBook = getBookById(book_id);
        oldBook.setAuthor(book.getAuthor());
        oldBook.setTitle(book.getTitle());
        oldBook.setCategory(book.getCategory());
        return bookRepository.save(oldBook);
    }

    public List<Book> getAvailableBook(){
        return bookRepository.findByAvailableTrue();
    }
}
