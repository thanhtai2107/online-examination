package com.example.examination.respository;

import com.example.examination.entity.ResultEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResultRepository extends JpaRepository<ResultEntity, Long> {
    ResultEntity getResultEntityByExamEntity_IdAndStudentEntity_Id(Long examId, Long studentId);
    Page<ResultEntity> getResultEntitiesByStudentEntity_Id(Long id, Pageable pageable);
    Page<ResultEntity> getResultEntitiesByExamEntity_Id(Long id, Pageable pageable);
}
