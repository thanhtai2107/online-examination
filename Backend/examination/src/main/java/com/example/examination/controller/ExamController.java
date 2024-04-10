package com.example.examination.controller;

import com.example.examination.dto.ExamDTO;
import com.example.examination.exception.CourseException;
import com.example.examination.request.AddExamReq;
import com.example.examination.service.impl.ExamServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1")
public class ExamController {
    private final ExamServiceImpl examService;

    public ExamController(ExamServiceImpl examService) {
        this.examService = examService;
    }

    @PostMapping("/exam/add")
    public ResponseEntity<ExamDTO> addExam(@RequestBody @Valid AddExamReq req) throws CourseException {
        return new ResponseEntity<>(examService.addExam(req), HttpStatus.CREATED);
    }
}
