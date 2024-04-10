package com.example.examination.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record AddExamReq(
        @NotNull
        @NotBlank
        String title,
        @NotNull
        int totalTime,
        @NotNull
        Long courseId
) {
}
