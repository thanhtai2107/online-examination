package com.example.examination.request;

import jakarta.validation.constraints.NotNull;

import java.util.Date;

public record UpdateTeacherReq(
        Long id,
        @NotNull
        String fullname,
        @NotNull
        Date dateOfBirth,
        @NotNull
        String gender,
        @NotNull
        int status
) {
}
