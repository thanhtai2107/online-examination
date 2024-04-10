package com.example.examination.controller;

import com.example.examination.dto.QuestionDTO;
import com.example.examination.exception.ExamException;
import com.example.examination.request.AddQuestionReq;
import com.example.examination.service.impl.QuestionServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1")
public class QuestionController {
    private final QuestionServiceImpl questionService;

    public QuestionController(QuestionServiceImpl questionService) {
        this.questionService = questionService;
    }

    @PostMapping("/question/add")
    public ResponseEntity<QuestionDTO> addQuestion(@RequestBody @Valid AddQuestionReq req) throws ExamException {
        return ResponseEntity.ok(questionService.addQuestion(req));
    }
}
