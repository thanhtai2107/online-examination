package com.example.examination.request;

import jakarta.validation.constraints.NotNull;

public record AddCourseReq(
        @NotNull
        String title,
        @NotNull
        Long teacherId

) {
}
