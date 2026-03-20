package com.example.Library.controller;
import com.example.Library.config.JwtUtil;
import com.example.Library.entity.Admin;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
    @RequestMapping("/admin")
    public class AuthController {

        private final AuthenticationManager authenticationManager;
        private final JwtUtil jwtUtil;

        public AuthController(AuthenticationManager authenticationManager,
                              JwtUtil jwtUtil) {
            this.authenticationManager = authenticationManager;
            this.jwtUtil = jwtUtil;
        }

        @PostMapping("/login")
        public ResponseEntity<?> login(@RequestBody Admin admin) {
            System.out.println("Login API HIT");

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            admin.getEmail(),
                            admin.getPassword()
                    )
            );

           String token = jwtUtil.generateToken(admin.getEmail());
           return ResponseEntity.ok(Map.of("token", token));

        }
    }

