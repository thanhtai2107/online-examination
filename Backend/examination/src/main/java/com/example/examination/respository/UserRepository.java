package com.example.examination.respository;

import com.example.examination.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findUserEntityByEmail(String email);
    UserEntity findUserEntityByTeacherEntity_Id(Long id);
    UserEntity findUserEntityByStudentEntity_Id(Long id);
}
