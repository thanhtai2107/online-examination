package com.example.examination.respository;

import com.example.examination.entity.ExamEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExamRepository extends JpaRepository<ExamEntity, Long> {
    Page<ExamEntity> findExamEntitiesByCourse_Id(Long id, Pageable pageable);
}
