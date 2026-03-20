package com.example.Library.service;

import com.example.Library.entity.Admin;
import org.springframework.http.ResponseEntity;

import java.security.Principal;

public interface AdminService {
    Admin registerAdmin(Admin admin);

    ResponseEntity<?> getDetails(Principal principal);
}
