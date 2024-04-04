package com.example.examination.dto;

import com.example.examination.enums.Role;

import java.util.Date;

public record TeacherDTO(
        Long id,
        String email,
        String fullname,
        String gender,
        Date dateOfBirth,
        Date dateCreated,
        Role role,
        int status
) {
}
