package com.example.Library.service;

import com.example.Library.entity.Book;
import org.springframework.data.domain.Page;

import java.util.List;

public interface BookService {
        Book addBook(Book book);

        Page<Book> getAllBooks(int page, int size);

        Book getBookById(int book_id);

        void deleteBook(int book_id);

        Book updateBook(int book_id, Book book);

        List<Book> getAvailableBook();
    }


