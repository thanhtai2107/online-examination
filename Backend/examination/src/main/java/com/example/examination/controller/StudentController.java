package com.example.examination.controller;

import com.example.examination.dto.StudentDTO;
import com.example.examination.exception.CourseException;
import com.example.examination.exception.UserException;
import com.example.examination.request.AddStudentReq;
import com.example.examination.service.impl.StudentServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1")
public class StudentController {
    private final StudentServiceImpl studentService;

    public StudentController(StudentServiceImpl studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/student/add")
    public ResponseEntity<StudentDTO> addStudent(@RequestBody @Valid AddStudentReq req) throws CourseException, UserException {
        return new  ResponseEntity<>(studentService.addStudent(req), HttpStatus.CREATED);
    }
}
