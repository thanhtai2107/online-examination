package com.example.examination.dto;

import java.util.Date;

public record ResultDTO(
        Long id,
        double score,
        Date dateCreated,
        Long studentId,
        Long examId
) {
}
