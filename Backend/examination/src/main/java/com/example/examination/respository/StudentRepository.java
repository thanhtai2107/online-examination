package com.example.examination.respository;

import com.example.examination.entity.CourseEntity;
import com.example.examination.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<StudentEntity, Long> {

}
