package com.example.examination.mapper;

import com.example.examination.dto.CourseDTO;
import com.example.examination.dto.TeacherDTO;
import com.example.examination.entity.CourseEntity;
import com.example.examination.exception.TeacherException;
import com.example.examination.service.impl.TeacherServiceImpl;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class CourseMapper implements Function<CourseEntity, CourseDTO> {
    private final TeacherServiceImpl teacherService;

    public CourseMapper(TeacherServiceImpl teacherService) {
        this.teacherService = teacherService;
    }

    @Override
    public CourseDTO apply(CourseEntity courseEntity) {
        try {
            TeacherDTO teacherDTO = teacherService.getTeacherById(courseEntity.getTeacherEntity().getId());
            return new CourseDTO(courseEntity.getId(), courseEntity.getTitle(),courseEntity.getDateCreated(), courseEntity.getStatus(), teacherDTO);
        } catch (TeacherException e) {
            throw new RuntimeException(e);
        }
    }
}
