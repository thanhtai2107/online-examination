package com.example.examination.controller;

import com.example.examination.dto.QuestionDTO;
import com.example.examination.exception.ExamException;
import com.example.examination.exception.QuestionException;
import com.example.examination.exception.ResultException;
import com.example.examination.request.AddQuestionReq;
import com.example.examination.request.UpdateQuestionReq;
import com.example.examination.service.impl.QuestionServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/questions")
    public ResponseEntity<List<QuestionDTO>> getQuestionByExamId(@RequestParam  Long id) throws ExamException {
        return ResponseEntity.ok(questionService.getQuestionsByExamId(id));
    }
    @GetMapping("/questions/student")
    public ResponseEntity<List<QuestionDTO>> getQuestionForStudent(@RequestParam  Long examId,@RequestParam  Long studentId) throws ExamException, ResultException {
        return ResponseEntity.ok(questionService.getQuestionsForStudent(examId, studentId));
    }
    @PutMapping("/question/update")
    public ResponseEntity<QuestionDTO> updateQuestion(@RequestBody @Valid UpdateQuestionReq req) throws ExamException, QuestionException {
        return ResponseEntity.ok(questionService.updateQuestion(req));
    }

    @GetMapping("/question")
    public ResponseEntity<QuestionDTO> getQuestionByid(@RequestParam Long id) throws QuestionException {
        return ResponseEntity.ok(questionService.getQuestionById(id));
    }

    @DeleteMapping("/question")
    public ResponseEntity<String> deleteQuestion(@RequestParam Long id) throws QuestionException {
        return ResponseEntity.ok(questionService.deleteQuestionById(id));
    }
}
