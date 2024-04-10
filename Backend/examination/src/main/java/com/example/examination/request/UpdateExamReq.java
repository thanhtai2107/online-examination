package com.example.examination.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record UpdateExamReq(
        @NotNull
        Long id,
        @NotNull
        @NotBlank
        String title,
        @NotNull
        int totalTime,
        @NotNull
        Long courseId,
        @NotNull
        int status
) {
}
