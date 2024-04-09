package com.example.examination.service.impl;

import com.example.examination.dto.StudentDTO;
import com.example.examination.entity.CourseEntity;
import com.example.examination.entity.StudentEntity;
import com.example.examination.entity.UserEntity;
import com.example.examination.enums.Role;
import com.example.examination.exception.CourseException;
import com.example.examination.exception.UserException;
import com.example.examination.mapper.StudentDTOMapper;
import com.example.examination.request.AddStudentReq;
import com.example.examination.respository.CourseRepository;
import com.example.examination.respository.StudentRepository;
import com.example.examination.respository.UserRepository;
import com.example.examination.service.IStudentService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class StudentServiceImpl implements IStudentService {
    private final UserRepository userRepository;
    private final StudentRepository studentRepository;
    private final PasswordEncoder passwordEncoder;
    private final CourseRepository courseRepository;
    private final StudentDTOMapper studentDTOMapper;

    public StudentServiceImpl(UserRepository userRepository, StudentRepository studentRepository, PasswordEncoder passwordEncoder, CourseRepository courseRepository, StudentDTOMapper studentDTOMapper) {
        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
        this.passwordEncoder = passwordEncoder;
        this.courseRepository = courseRepository;
        this.studentDTOMapper = studentDTOMapper;
    }

    @Override
    public StudentDTO addStudent(AddStudentReq req) throws UserException, CourseException {
        if (userRepository.findUserEntityByEmail(req.email()).isPresent()) throw new UserException("User exist");
        if (courseRepository.findById(req.courseId()).isEmpty()) throw new CourseException("Course not found");
        UserEntity user = UserEntity.builder()
                .email(req.email())
                .password(passwordEncoder.encode(req.email()))
                .role(Role.STUDENT)
                .status(1)
                .dateCreated(new Date())
                .build();
        UserEntity userSaved = userRepository.save(user);
        CourseEntity courseEntity = courseRepository.findById(req.courseId()).get();
        StudentEntity studentEntity = StudentEntity.builder()
                .fullname(req.fullname())
                .gender(req.gender())
                .dateOfBirth(req.dateOfBirth())
                .user(userSaved)
                .course(courseEntity)
                .build();
        return studentDTOMapper.apply(studentRepository.save(studentEntity));
    }
}
