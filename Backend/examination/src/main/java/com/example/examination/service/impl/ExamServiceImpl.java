package com.example.examination.service.impl;

import com.example.examination.dto.ExamDTO;
import com.example.examination.entity.CourseEntity;
import com.example.examination.entity.ExamEntity;
import com.example.examination.exception.CourseException;
import com.example.examination.mapper.ExamDTOMapper;
import com.example.examination.request.AddExamReq;
import com.example.examination.respository.CourseRepository;
import com.example.examination.respository.ExamRepository;
import com.example.examination.service.IExamService;
import org.springframework.stereotype.Service;
import java.util.Date;

@Service
public class ExamServiceImpl implements IExamService {
    private final CourseRepository courseRepository;
    private final ExamRepository examRepository;
    private final ExamDTOMapper examDTOMapper;

    public ExamServiceImpl(CourseRepository courseRepository, ExamRepository repository, ExamDTOMapper examDTOMapper) {
        this.courseRepository = courseRepository;
        this.examRepository = repository;
        this.examDTOMapper = examDTOMapper;
    }

    @Override
    public ExamDTO addExam(AddExamReq req) throws  CourseException {
        if (courseRepository.findById(req.courseId()).isEmpty()) throw  new CourseException("Course not found");
        CourseEntity courseEntity = courseRepository.findById(req.courseId()).get();
        ExamEntity examEntity = ExamEntity.builder()
                .title(req.title())
                .totalTime(req.totalTime())
                .dateCreated(new Date())
                .status(1)
                .course(courseEntity)
                .build();
        ExamEntity examSaved = examRepository.save(examEntity);
        return examDTOMapper.apply(examSaved);
    }
}
