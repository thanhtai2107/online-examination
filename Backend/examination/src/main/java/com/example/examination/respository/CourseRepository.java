package com.example.examination.respository;

import com.example.examination.entity.CourseEntity;
import com.example.examination.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<CourseEntity, Long> {
}
