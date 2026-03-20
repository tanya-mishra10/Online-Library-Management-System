package com.example.Library.service;

import com.example.Library.entity.Admin;
import com.example.Library.repo.AdminRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService{
    private final AdminRepo adminRepo;
    private final PasswordEncoder passwordEncoder;

    public AdminServiceImpl(AdminRepo adminRepo,
                            PasswordEncoder passwordEncoder) {
        this.adminRepo = adminRepo;
        this.passwordEncoder = passwordEncoder;
    }
    @Override
    public Admin registerAdmin(Admin admin) {

        // Check if email already exists
        if (adminRepo.findByEmail(admin.getEmail()).isPresent()) {
            throw new RuntimeException("Email already registered");
        }

        // Encode password
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));

        // Set role properly
        admin.setRole("ROLE_ADMIN");

        return adminRepo.save(admin);
    }

    @Override
    public ResponseEntity<?> getDetails(Principal principal) {
        String email = principal.getName();
        Optional<Admin> admin1 = adminRepo.findByEmail(email);

        if(admin1.isEmpty()){
            return ResponseEntity.badRequest().body("Admin not found");
        }
        return ResponseEntity.ok(admin1.get());
    }


}
