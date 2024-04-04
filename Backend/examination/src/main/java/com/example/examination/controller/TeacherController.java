package com.example.examination.controller;

import com.example.examination.dto.TeacherDTO;
import com.example.examination.exception.TeacherException;
import com.example.examination.exception.UserException;
import com.example.examination.request.AddTeacherReq;
import com.example.examination.service.impl.TeacherServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1")
public class TeacherController {
    private final TeacherServiceImpl teacherService;

    public TeacherController(TeacherServiceImpl teacherService) {
        this.teacherService = teacherService;
    }

    @PostMapping("/teacher/add")
    public ResponseEntity<TeacherDTO> addTeacher(@RequestBody @Valid AddTeacherReq req) throws UserException {
            return new ResponseEntity<TeacherDTO>(teacherService.addTeacher(req), HttpStatus.CREATED);
    }
}
