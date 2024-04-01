package com.example.examination.auth;

import com.example.examination.entity.AdminEntity;
import com.example.examination.entity.UserEntity;
import com.example.examination.enums.Role;
import com.example.examination.exception.UserException;
import com.example.examination.jwt.JWTService;
import com.example.examination.mapper.UserDTOMapper;
import com.example.examination.response.AuthenticationResponse;
import com.example.examination.respository.AdminRepository;
import com.example.examination.respository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import request.AdminRegisterReq;

@Service
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JWTService jwtService;
    private final AdminRepository adminRepository;


    public AuthenticationService(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, JWTService jwtService, AdminRepository adminRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.adminRepository = adminRepository;
    }

    public void registerAdmin(AdminRegisterReq req) throws UserException {
        if (userRepository.findUserEntityByEmail(req.email()).isPresent()) throw  new UserException("Exist User");
        var user = UserEntity.builder()
                .email(req.email())
                .password(passwordEncoder.encode(req.password()))
                .status(1)
                .role(Role.ADMIN)
                .build();
        UserEntity userSaved = userRepository.save(user);
        var adminEntity = AdminEntity.builder()
                .fullname(req.fullname())
                .gender(req.gender())
                .dateOfBirth(req.dateOfBirth())
                .user(userSaved)
                .build();
        adminRepository.save(adminEntity);
    }

    public AuthenticationResponse authenticate(String email, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        var user = userRepository.findUserEntityByEmail(email).orElseThrow();
        String jwt =  jwtService.generateToken(user);
        return new AuthenticationResponse(jwt, new UserDTOMapper().apply(user));
    }
}
