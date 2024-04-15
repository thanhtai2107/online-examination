package com.example.examination.service.impl;

import com.example.examination.dto.ResultDTO;
import com.example.examination.entity.ExamEntity;
import com.example.examination.entity.ResultEntity;
import com.example.examination.entity.StudentEntity;
import com.example.examination.exception.ExamException;
import com.example.examination.exception.ResultException;
import com.example.examination.exception.StudentException;
import com.example.examination.mapper.ResultDTOMapper;
import com.example.examination.request.AddResultReq;
import com.example.examination.respository.ExamRepository;
import com.example.examination.respository.ResultRepository;
import com.example.examination.respository.StudentRepository;
import com.example.examination.service.IResultService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.function.Function;

@Service
public class ResultServiceImpl implements IResultService {
    private final StudentRepository studentRepository;
    private final ExamRepository examRepository;
    private final ResultRepository resultRepository;
    private final ResultDTOMapper resultDTOMapper;

    public ResultServiceImpl(StudentRepository studentRepository, ExamRepository examRepository, ResultRepository resultRepository, ResultDTOMapper resultDTOMapper) {
        this.studentRepository = studentRepository;
        this.examRepository = examRepository;
        this.resultRepository = resultRepository;
        this.resultDTOMapper = resultDTOMapper;
    }

    @Override
    public ResultDTO save(AddResultReq req) throws ExamException, StudentException, ResultException {
        if (examRepository.findById(req.examId()).isEmpty()) throw new ExamException("Exam not found");
        if(studentRepository.findById(req.studentId()).isEmpty()) throw new StudentException("Student not found");
        if(resultRepository.getResultEntityByExamEntity_IdAndStudentEntity_Id(req.examId(), req.studentId()) != null) throw new ResultException("Result exist");
        ExamEntity examEntity = examRepository.findById(req.examId()).get();
        StudentEntity studentEntity = studentRepository.findById(req.studentId()).get();
        ResultEntity resultEntity = ResultEntity.builder()
                .score(req.score())
                .dateCreated(new Date())
                .studentEntity(studentEntity)
                .examEntity(examEntity)
                .build();
        ResultEntity saved = resultRepository.save(resultEntity);
        return resultDTOMapper.apply(saved);
    }

    @Override
    public Page<ResultDTO> getResultByStudentId(Long id, int page, int size) throws StudentException {
        if(studentRepository.findById(id).isEmpty()) throw new StudentException("Student not found");
        Pageable pageable = PageRequest.of(page,size, Sort.by("dateCreated").descending());
        Page<ResultEntity> resultEntities = resultRepository.getResultEntitiesByStudentEntity_Id(id, pageable);
        return resultEntities.map(new Function<ResultEntity, ResultDTO>() {
            @Override
            public ResultDTO apply(ResultEntity resultEntity) {
                return resultDTOMapper.apply(resultEntity);
            }
        });
    }

    @Override
    public Page<ResultDTO> getResultByExam(Long id, int page, int size) throws ExamException {
        if (examRepository.findById(id).isEmpty()) throw new ExamException("Exam not found");
        Pageable pageable = PageRequest.of(page,size, Sort.by("dateCreated").descending());
        Page<ResultEntity> resultEntities = resultRepository.getResultEntitiesByExamEntity_Id(id, pageable);
        return resultEntities.map(new Function<ResultEntity, ResultDTO>() {
            @Override
            public ResultDTO apply(ResultEntity resultEntity) {
                return resultDTOMapper.apply(resultEntity);
            }
        });
    }
}
