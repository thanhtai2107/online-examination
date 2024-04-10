package com.example.examination.dto;

import java.util.Date;

public record ExamDTO(
        Long id,
        String title,
        int totalTime,
        Date dateCreated,
        int status,
        Long courseId
) {
}
