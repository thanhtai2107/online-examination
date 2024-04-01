package com.example.examination.controller;

import com.example.examination.auth.AuthenticationService;
import com.example.examination.exception.UserException;
import com.example.examination.response.AuthenticationResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import request.AdminRegisterReq;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public void registerAdmin(@RequestBody AdminRegisterReq req) throws UserException {
        authenticationService.registerAdmin(req);
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestParam String email, @RequestParam String password) {
        AuthenticationResponse token = authenticationService.authenticate(email, password);
        return ResponseEntity.ok().header(HttpHeaders.AUTHORIZATION, token.getToken()).body(token);
    }
}
