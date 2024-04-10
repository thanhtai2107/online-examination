package com.example.examination.mapper;

import com.example.examination.dto.QuestionDTO;
import com.example.examination.entity.QuestionEntity;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class QuestionDTOMapper implements Function<QuestionEntity, QuestionDTO> {
    @Override
    public QuestionDTO apply(QuestionEntity questionEntity) {
        return new QuestionDTO(questionEntity.getId(),
                questionEntity.getQuestion(),
                questionEntity.getFirstAnswer(),
                questionEntity.getSecondAnswer(),
                questionEntity.getThirdAnswer(),
                questionEntity.getFourthAnswer(),
                questionEntity.getCorrectAnswer(),
                questionEntity.getExam().getId());
    }
}
