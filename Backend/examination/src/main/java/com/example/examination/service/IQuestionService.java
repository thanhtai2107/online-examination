package com.example.examination.service;

import com.example.examination.dto.QuestionDTO;
import com.example.examination.exception.ExamException;
import com.example.examination.request.AddQuestionReq;

public interface IQuestionService {
    QuestionDTO addQuestion(AddQuestionReq req) throws ExamException;
}
