package com.example.examination.mapper;

import com.example.examination.dto.TeacherDTO;
import com.example.examination.entity.TeacherEntity;
import com.example.examination.entity.UserEntity;
import com.example.examination.respository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class TeacherDTOMapper implements Function<TeacherEntity, TeacherDTO> {
    private final UserRepository userRepository;

    public TeacherDTOMapper(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public TeacherDTO apply(TeacherEntity teacherEntity) {
        UserEntity userEntity = userRepository.findUserEntityByTeacherEntity_Id(teacherEntity.getId());
        return new TeacherDTO(teacherEntity.getId(),
                userEntity.getEmail(),
                teacherEntity.getFullname(),
                teacherEntity.getGender(),
                teacherEntity.getDateOfBirth(),
                userEntity.getDateCreated(),
                teacherEntity.getUser().getRole(),
                userEntity.getStatus());
    }
}
