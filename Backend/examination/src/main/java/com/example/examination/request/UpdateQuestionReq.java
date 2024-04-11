package com.example.examination.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record UpdateQuestionReq(
        @NotNull
        Long id,
        @NotNull
        @NotBlank
        String question,
        @NotNull
        @NotBlank
        String firstAnswer,
        @NotNull
        @NotBlank
        String secondAnswer,
        @NotNull
        @NotBlank
        String thirdAnswer,
        @NotNull
        @NotBlank
        String fourthAnswer, @NotNull
        @NotBlank
        String correctAnswer,
        @NotNull
        Long examId
) {
}
