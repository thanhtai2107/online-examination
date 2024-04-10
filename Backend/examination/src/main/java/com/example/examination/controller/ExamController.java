package com.example.examination.controller;

import com.example.examination.dto.ExamDTO;
import com.example.examination.exception.CourseException;
import com.example.examination.exception.ExamException;
import com.example.examination.request.AddExamReq;
import com.example.examination.request.UpdateExamReq;
import com.example.examination.service.impl.ExamServiceImpl;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
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

    @GetMapping("/exams")
    public ResponseEntity<Page<ExamDTO>> getExams(@RequestParam(defaultValue = "0") int page,
                                                  @RequestParam(defaultValue = "5") int size) {
        return ResponseEntity.ok(examService.getExams(page, size));
    }
    @GetMapping("/exam")
    public ResponseEntity<ExamDTO> getExams(@RequestParam Long id) throws ExamException {
        return ResponseEntity.ok(examService.getExamById(id));
    }
    @PutMapping("/exam/update")
    public ResponseEntity<ExamDTO> updateExam(@RequestBody @Valid UpdateExamReq req) throws ExamException, CourseException {
        return ResponseEntity.ok(examService.updateExam(req));
    }
}