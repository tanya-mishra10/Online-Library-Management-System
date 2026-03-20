package com.example.Library.controller;

import com.example.Library.entity.Admin;
import com.example.Library.entity.PasswordRequest;
import com.example.Library.repo.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Optional;

@RestController
public class PasswordController {
    @Autowired
    private AdminRepo adminRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/admin/change-password")
    public ResponseEntity<?> changePassword(@RequestBody PasswordRequest passwordRequest, Principal principal) {
        String email = principal.getName();
        Optional<Admin> admin = adminRepo.findByEmail(email);
        if(admin.isEmpty()){
            return ResponseEntity.badRequest().body("Admin not found");
        }

        Admin ad = admin.get();


        if (!passwordEncoder.matches(passwordRequest.getOldPassword(), ad.getPassword())) {
            return ResponseEntity.badRequest().body("Old password is incorrect");
        }


        if(!passwordRequest.getNewPassword().equals(passwordRequest.getConfirmPassword())){
            return ResponseEntity.badRequest().body("password do not match");
        }

        ad.setPassword(passwordEncoder.encode(passwordRequest.getNewPassword()));
        adminRepo.save(ad);
        return ResponseEntity.ok("password change successfully");
    }

    }

