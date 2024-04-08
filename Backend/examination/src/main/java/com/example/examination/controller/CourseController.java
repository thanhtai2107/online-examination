package com.example.examination.controller;

import com.example.examination.dto.CourseDTO;
import com.example.examination.exception.TeacherException;
import com.example.examination.request.AddCourseReq;
import com.example.examination.service.impl.CourseServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1")
public class CourseController {
    private final CourseServiceImpl courseService;

    public CourseController(CourseServiceImpl courseService) {
        this.courseService = courseService;
    }

    @PostMapping("/course/add")
    public ResponseEntity<CourseDTO> addCourse(@Valid @RequestBody AddCourseReq req) throws TeacherException {
        return new ResponseEntity<>(courseService.addCourse(req), HttpStatus.CREATED);
    }
}
