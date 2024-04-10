package com.example.examination.service;

import com.example.examination.dto.CourseDTO;
import com.example.examination.exception.TeacherException;
import com.example.examination.request.AddCourseReq;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ICourseService {
    CourseDTO addCourse(AddCourseReq req) throws TeacherException;
    Page<CourseDTO> getCourses(int page, int size);
    List<CourseDTO> allCourses();
    List<CourseDTO> getCoursesActive();
}
