package com.example.examination.respository;

import com.example.examination.entity.ResultEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResultRepository extends JpaRepository<ResultEntity, Long> {
    ResultEntity getResultEntityByExamEntity_IdAndStudentEntity_Id(Long examId, Long studentId);
}
