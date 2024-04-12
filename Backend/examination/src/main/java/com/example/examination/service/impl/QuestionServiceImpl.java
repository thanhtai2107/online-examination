package com.example.examination.service.impl;

import com.example.examination.dto.QuestionDTO;
import com.example.examination.entity.ExamEntity;
import com.example.examination.entity.QuestionEntity;
import com.example.examination.exception.ExamException;
import com.example.examination.exception.QuestionException;
import com.example.examination.exception.ResultException;
import com.example.examination.mapper.QuestionDTOMapper;
import com.example.examination.request.AddQuestionReq;
import com.example.examination.request.UpdateQuestionReq;
import com.example.examination.respository.ExamRepository;
import com.example.examination.respository.QuestionRepository;
import com.example.examination.respository.ResultRepository;
import com.example.examination.service.IQuestionService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Function;

@Service
public class QuestionServiceImpl implements IQuestionService {
    private final ExamRepository examRepository;
    private final QuestionRepository questionRepository;
    private final QuestionDTOMapper questionDTOMapper;
    private final ResultRepository resultRepository;

    public QuestionServiceImpl(ExamRepository examRepository, QuestionRepository questionRepository, QuestionDTOMapper questionDTOMapper, ResultRepository resultRepository) {
        this.examRepository = examRepository;
        this.questionRepository = questionRepository;
        this.questionDTOMapper = questionDTOMapper;
        this.resultRepository = resultRepository;
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

    @Override
    public List<QuestionDTO> getQuestionsByExamId(Long id) throws ExamException {
        if (examRepository.findById(id).isEmpty()) throw  new ExamException("Exam not found");
        ExamEntity examEntity = examRepository.findById(id).get();
        List<QuestionEntity> questionEntities = questionRepository.findQuestionEntitiesByExam_Id(id);
        return questionEntities.stream().map(new Function<QuestionEntity, QuestionDTO>() {
            @Override
            public QuestionDTO apply(QuestionEntity questionEntity) {
                return questionDTOMapper.apply(questionEntity);
            }
        }).toList();
    }

    @Override
    public QuestionDTO updateQuestion(UpdateQuestionReq req) throws ExamException, QuestionException {
        if (examRepository.findById(req.examId()).isEmpty()) throw  new ExamException("Exam not found");
        ExamEntity examEntity = examRepository.findById(req.examId()).get();
        if (questionRepository.findById(req.id()).isEmpty()) throw new QuestionException("Question not found");
        QuestionEntity questionEntity = questionRepository.findById(req.id()).get();
        questionEntity.setQuestion(req.question());
        questionEntity.setFirstAnswer(req.firstAnswer());
        questionEntity.setSecondAnswer(req.secondAnswer());
        questionEntity.setThirdAnswer(req.thirdAnswer());
        questionEntity.setFourthAnswer(req.fourthAnswer());
        questionEntity.setCorrectAnswer(req.correctAnswer());
        QuestionEntity saved = questionRepository.save(questionEntity);
        return questionDTOMapper.apply(saved);
    }

    @Override
    public QuestionDTO getQuestionById(Long id) throws QuestionException {
        if (questionRepository.findById(id).isEmpty()) throw new QuestionException("Question not found");
        QuestionEntity questionEntity = questionRepository.findById(id).get();
        return questionDTOMapper.apply(questionEntity);
    }

    @Override
    public String deleteQuestionById(Long id) throws QuestionException {
        if (questionRepository.findById(id).isEmpty()) throw new QuestionException("Question not found");
        QuestionEntity questionEntity = questionRepository.findById(id).get();
        questionRepository.delete(questionEntity);
        return "Delete question with id: " + id;
    }

    @Override
    public List<QuestionDTO> getQuestionsForStudent(Long examId, Long studentId) throws ExamException, ResultException {
        if (examRepository.findById(examId).isEmpty()) throw new ExamException("Exam not found");
        if (resultRepository.getResultEntityByExamEntity_IdAndStudentEntity_Id(examId, studentId) != null)
            throw new ResultException("You have done this exam");
        List<QuestionEntity>  questionEntities = questionRepository.findQuestionEntitiesByExam_Id(examId);
        return questionEntities.stream().map(new Function<QuestionEntity, QuestionDTO>() {
            @Override
            public QuestionDTO apply(QuestionEntity questionEntity) {
                return questionDTOMapper.apply(questionEntity);
            }
        }).toList();
    }
}
