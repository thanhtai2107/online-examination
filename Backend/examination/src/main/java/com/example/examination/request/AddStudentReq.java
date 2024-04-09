package com.example.examination.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.Date;

public record AddStudentReq(
        @Email
        String email,
        @NotNull
        @NotBlank
        String fullname,
        @NotNull
        String gender,
        @NotNull
        Date dateOfBirth,
        @NotNull
        Long courseId
) {
}
