package com.example.examination.controller;

import com.example.examination.dto.CourseDTO;
import com.example.examination.exception.TeacherException;
import com.example.examination.request.AddCourseReq;
import com.example.examination.service.impl.CourseServiceImpl;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/courses")
    public ResponseEntity<Page<CourseDTO>> getCourses(@RequestParam(defaultValue = "0") int page,
                                                      @RequestParam(defaultValue = "5") int size) {
        return ResponseEntity.ok(courseService.getCourses(page, size));
    }
    @GetMapping("/course/all")
    public ResponseEntity<List<CourseDTO>> getCourses() {
        return ResponseEntity.ok(courseService.allCourses());
    }
    @GetMapping("/courses/active")
    public ResponseEntity<List<CourseDTO>> getCoursesActive() {
        return ResponseEntity.ok(courseService.getCoursesActive());
    }
}
