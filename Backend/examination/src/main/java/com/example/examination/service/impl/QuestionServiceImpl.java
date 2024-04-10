package com.example.examination.service.impl;

import com.example.examination.dto.QuestionDTO;
import com.example.examination.entity.ExamEntity;
import com.example.examination.entity.QuestionEntity;
import com.example.examination.exception.ExamException;
import com.example.examination.mapper.QuestionDTOMapper;
import com.example.examination.request.AddQuestionReq;
import com.example.examination.respository.ExamRepository;
import com.example.examination.respository.QuestionRepository;
import com.example.examination.service.IQuestionService;
import org.springframework.stereotype.Service;

@Service
public class QuestionServiceImpl implements IQuestionService {
    private final ExamRepository examRepository;
    private final QuestionRepository questionRepository;
    private final QuestionDTOMapper questionDTOMapper;

    public QuestionServiceImpl(ExamRepository examRepository, QuestionRepository questionRepository, QuestionDTOMapper questionDTOMapper) {
        this.examRepository = examRepository;
        this.questionRepository = questionRepository;
        this.questionDTOMapper = questionDTOMapper;
    }

    @Override
    public QuestionDTO addQuestion(AddQuestionReq req) throws ExamException {
        if (examRepository.findById(req.examId()).isEmpty()) throw  new ExamException("Exam not found");
        ExamEntity examEntity = examRepository.findById(req.examId()).get();
        QuestionEntity question = QuestionEntity.builder()
                .question(req.question())
                .firstAnswer(req.firstAnswer())
                .secondAnswer(req.secondAnswer())
                .thirdAnswer(req.thirdAnswer())
                .fourthAnswer(req.fourthAnswer())
                .correctAnswer(req.correctAnswer())
                .exam(examEntity)
                .build();
        QuestionEntity saved = questionRepository.save(question);
        return questionDTOMapper.apply(saved);
    }
}