package com.example.examination.respository;

import com.example.examination.entity.CourseEntity;
import com.example.examination.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<CourseEntity, Long> {
    @Query(value = "select c from CourseEntity c where c.status=1")
    List<CourseEntity> findCoursesActive();
}
