package com.example.Library.controller;

import com.example.Library.entity.Admin;
import com.example.Library.service.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/admin")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/register")
    public Admin registerAdmin(@RequestBody Admin admin) {

        return adminService.registerAdmin(admin);
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getAdminDetails(Principal principal){
        return adminService.getDetails(principal);
    }

}
