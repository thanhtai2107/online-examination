package com.example.examination.service;

import com.example.examination.dto.CourseDTO;
import com.example.examination.exception.TeacherException;
import com.example.examination.request.AddCourseReq;

public interface ICourseService {
    CourseDTO addCourse(AddCourseReq req) throws TeacherException;
}
