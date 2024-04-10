package com.example.examination.service.impl;

import com.example.examination.dto.ExamDTO;
import com.example.examination.entity.CourseEntity;
import com.example.examination.entity.ExamEntity;
import com.example.examination.exception.CourseException;
import com.example.examination.exception.ExamException;
import com.example.examination.mapper.ExamDTOMapper;
import com.example.examination.request.AddExamReq;
import com.example.examination.request.UpdateExamReq;
import com.example.examination.respository.CourseRepository;
import com.example.examination.respository.ExamRepository;
import com.example.examination.service.IExamService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.function.Function;

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
                .status(2)
                .course(courseEntity)
                .build();
        ExamEntity examSaved = examRepository.save(examEntity);
        return examDTOMapper.apply(examSaved);
    }

    @Override
    public Page<ExamDTO> getExams(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("dateCreated").descending());
        Page<ExamEntity> examEntities = examRepository.findAll(pageable);
        return examEntities.map(new Function<ExamEntity, ExamDTO>() {
            @Override
            public ExamDTO apply(ExamEntity examEntity) {
                return examDTOMapper.apply(examEntity);
            }
        });
    }

    @Override
    public ExamDTO updateExam(UpdateExamReq req) throws ExamException, CourseException {
        if (courseRepository.findById(req.courseId()).isEmpty()) throw new CourseException("Course not found");
        if (examRepository.findById(req.id()).isEmpty()) throw  new ExamException("Exam not found");
        CourseEntity courseEntity = courseRepository.findById(req.courseId()).get();
        ExamEntity examEntity = examRepository.findById(req.id()).get();
        examEntity.setTitle(req.title());
        examEntity.setTotalTime(req.totalTime());
        examEntity.setStatus(req.status());
        examEntity.setCourse(courseEntity);
        ExamEntity examSaved = examRepository.save(examEntity);
        return examDTOMapper.apply(examSaved);
    }

    @Override
    public ExamDTO getExamById(Long id) throws ExamException {
        if (examRepository.findById(id).isEmpty()) throw  new ExamException("Exam not found");
        ExamEntity examEntity = examRepository.findById(id).get();
        return examDTOMapper.apply(examEntity);
    }
}
