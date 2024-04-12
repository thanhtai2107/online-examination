package com.example.examination.mapper;

import com.example.examination.dto.ResultDTO;
import com.example.examination.entity.ResultEntity;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class ResultDTOMapper implements Function<ResultEntity, ResultDTO> {
    @Override
    public ResultDTO apply(ResultEntity resultEntity) {
        return new ResultDTO(resultEntity.getId(),
                resultEntity.getScore(),
                resultEntity.getDateCreated(),
                resultEntity.getStudentEntity().getId(),
                resultEntity.getExamEntity().getId());
    }
}
