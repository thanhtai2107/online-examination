package com.example.examination.service.impl;

import com.example.examination.dto.CourseDTO;
import com.example.examination.entity.CourseEntity;
import com.example.examination.entity.TeacherEntity;
import com.example.examination.exception.TeacherException;
import com.example.examination.mapper.CourseMapper;
import com.example.examination.request.AddCourseReq;
import com.example.examination.respository.CourseRepository;
import com.example.examination.respository.TeacherRepository;
import com.example.examination.service.ICourseService;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class CourseServiceImpl implements ICourseService {
    private final TeacherRepository teacherRepository;
    private final CourseRepository courseRepository;
    private final CourseMapper courseMapper;

    public CourseServiceImpl(TeacherRepository teacherRepository, CourseRepository courseRepository, CourseMapper courseMapper) {
        this.teacherRepository = teacherRepository;
        this.courseRepository = courseRepository;
        this.courseMapper = courseMapper;
    }

    @Override
    public CourseDTO addCourse(AddCourseReq req) throws TeacherException {
        if (teacherRepository.findById(req.teacherId()).isEmpty()) throw new TeacherException("Teacher not found");
        TeacherEntity teacher = teacherRepository.findById(req.teacherId()).get();
        CourseEntity courseEntity = CourseEntity.builder().title(req.title())
                .dateCreated(new Date())
                .status(1)
                .teacherEntity(teacher).build();
        return courseMapper.apply(courseRepository.save(courseEntity));
    }
}
