package com.example.examination.controller;

import com.example.examination.dto.ResultDTO;
import com.example.examination.exception.ExamException;
import com.example.examination.exception.ResultException;
import com.example.examination.exception.StudentException;
import com.example.examination.request.AddResultReq;
import com.example.examination.service.impl.ResultServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1")
public class ResultController {
    private final ResultServiceImpl resultService;

    public ResultController(ResultServiceImpl resultService) {
        this.resultService = resultService;
    }

    @PostMapping("/result/save")
    public ResponseEntity<ResultDTO> saveResult(@RequestBody @Valid AddResultReq req) throws StudentException, ExamException, ResultException {
        return ResponseEntity.ok(resultService.save(req));
    }
}
