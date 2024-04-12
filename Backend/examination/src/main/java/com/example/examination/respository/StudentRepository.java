package com.example.examination.respository;

import com.example.examination.entity.CourseEntity;
import com.example.examination.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<StudentEntity, Long> {
    StudentEntity getStudentEntityByUser_Id(Long userId);

}
