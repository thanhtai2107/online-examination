package com.example.examination.request;

import jakarta.validation.constraints.NotNull;

public record AddResultReq(
        @NotNull
        double score,
        @NotNull
        Long studentId,
        @NotNull
        Long examId
) {
}
