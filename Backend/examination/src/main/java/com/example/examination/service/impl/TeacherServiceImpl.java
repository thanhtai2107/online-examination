package com.example.examination.service.impl;

import com.example.examination.dto.TeacherDTO;
import com.example.examination.entity.TeacherEntity;
import com.example.examination.entity.UserEntity;
import com.example.examination.enums.Role;
import com.example.examination.exception.UserException;
import com.example.examination.mapper.TeacherDTOMapper;
import com.example.examination.request.AddTeacherReq;
import com.example.examination.respository.TeacherRepository;
import com.example.examination.respository.UserRepository;
import com.example.examination.service.ITeacherService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TeacherServiceImpl implements ITeacherService {
    private final UserRepository userRepository;
    private final TeacherRepository teacherRepository;
    private final TeacherDTOMapper teacherDTOMapper;
    private final PasswordEncoder passwordEncoder;

    public TeacherServiceImpl(UserRepository userRepository, TeacherRepository teacherRepository, TeacherDTOMapper teacherDTOMapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.teacherRepository = teacherRepository;
        this.teacherDTOMapper = teacherDTOMapper;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public TeacherDTO addTeacher(AddTeacherReq req) throws UserException{
        if (userRepository.findUserEntityByEmail(req.getEmail()).isPresent()) throw new UserException("Exist user");
        UserEntity userEntity = UserEntity.builder()
                .email(req.getEmail())
                .password(passwordEncoder.encode(req.getEmail()))
                .role(Role.TEACHER)
                .status(1)
                .dateCreated(new Date())
                .build();
        UserEntity userSaved = userRepository.save(userEntity);
        TeacherEntity teacher = teacherRepository.save(TeacherEntity.builder()
                .fullname(req.getFullname())
                .gender(req.getGender())
                .dateOfBirth(req.getDateOfBirth())
                .user(userSaved).build());
        return teacherDTOMapper.apply(teacher);
    }
}
