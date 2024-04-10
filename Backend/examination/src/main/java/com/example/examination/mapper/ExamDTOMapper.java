package com.example.examination.mapper;

import com.example.examination.dto.ExamDTO;
import com.example.examination.entity.ExamEntity;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class ExamDTOMapper implements Function<ExamEntity, ExamDTO> {
    @Override
    public ExamDTO apply(ExamEntity examEntity) {
        return new ExamDTO(examEntity.getId(),
                examEntity.getTitle(),
                examEntity.getTotalTime(),
                examEntity.getDateCreated(),
                examEntity.getStatus(),
                examEntity.getCourse().getId());
    }
}
