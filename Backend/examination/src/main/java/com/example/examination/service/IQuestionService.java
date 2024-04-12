package com.example.examination.service;

import com.example.examination.dto.QuestionDTO;
import com.example.examination.exception.ExamException;
import com.example.examination.exception.QuestionException;
import com.example.examination.exception.ResultException;
import com.example.examination.request.AddQuestionReq;
import com.example.examination.request.UpdateQuestionReq;

import java.util.List;

public interface IQuestionService {
    QuestionDTO addQuestion(AddQuestionReq req) throws ExamException;
    List<QuestionDTO> getQuestionsByExamId(Long id) throws ExamException;
    QuestionDTO updateQuestion(UpdateQuestionReq req) throws ExamException, QuestionException;
    QuestionDTO getQuestionById(Long id) throws QuestionException;
    String deleteQuestionById(Long id) throws QuestionException;
    List<QuestionDTO> getQuestionsForStudent(Long examId, Long studentId) throws ExamException, ResultException;
}
