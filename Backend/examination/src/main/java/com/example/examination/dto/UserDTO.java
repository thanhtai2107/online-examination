package com.example.examination.dto;

import com.example.examination.enums.Role;

import java.util.Date;

public record UserDTO(
        Long id,
        String username,
        Role role
){
}
