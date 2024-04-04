package com.example.examination.dto;

import com.example.examination.enums.Role;


public record UserDTO(
        Long id,
        String username,
        Role role
){
}
