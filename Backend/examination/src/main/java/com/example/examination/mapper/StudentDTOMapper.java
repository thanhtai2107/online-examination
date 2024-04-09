package com.example.examination.mapper;

import com.example.examination.dto.StudentDTO;
import com.example.examination.entity.StudentEntity;
import com.example.examination.entity.UserEntity;
import com.example.examination.respository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.function.Function;

@Service
public class StudentDTOMapper implements Function<StudentEntity, StudentDTO> {
    private final UserRepository userRepository;

    public StudentDTOMapper(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public StudentDTO apply(StudentEntity studentEntity) {
        UserEntity user = userRepository.findUserEntityByStudentEntity_Id(studentEntity.getId());
        return new StudentDTO(studentEntity.getId(),
                user.getEmail(),
                studentEntity.getFullname(),
                studentEntity.getGender(),
                studentEntity.getDateOfBirth(),
                user.getDateCreated(),
                user.getStatus(),
                studentEntity.getCourse().getId());
    }
}
