package com.example.Library.repo;

import com.example.Library.entity.IssueBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueRepository extends JpaRepository<IssueBook,Integer> {

}
