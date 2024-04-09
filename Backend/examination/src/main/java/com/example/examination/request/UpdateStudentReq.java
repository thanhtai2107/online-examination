package com.example.examination.request;

import jakarta.validation.constraints.NotNull;

import java.util.Date;

public record UpdateStudentReq(
        Long id,
        @NotNull
        String fullname,
        @NotNull
        Date dateOfBirth,
        @NotNull
        String gender,
        @NotNull
        int status,
        @NotNull
        Long courseId
) {
}
