package com.example.examination.dto;

import java.util.Date;

public record CourseDTO(
        Long id,
        String title,
        Date dateCreated,
        int status,
        TeacherDTO teacherDTO
) {
}
