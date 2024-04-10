package com.example.examination.respository;

import com.example.examination.dto.ExamDTO;
import com.example.examination.entity.ExamEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamRepository extends JpaRepository<ExamEntity, Long> {}
