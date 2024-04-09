package com.example.examination.dto;

import java.util.Date;

public record StudentDTO(
        Long id,
        String email,
        String fullname,
        String gender,
        Date dateOfBirth,
        Date dateCreated,
        int status,
        Long courseId
) {
}
