package com.example.examination.service;

import com.example.examination.dto.CourseDTO;
import com.example.examination.exception.TeacherException;
import com.example.examination.request.AddCourseReq;
import org.springframework.data.domain.Page;

public interface ICourseService {
    CourseDTO addCourse(AddCourseReq req) throws TeacherException;
    Page<CourseDTO> getCourses(int page, int size);
}
