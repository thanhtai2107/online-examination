package com.example.examination.service;

import com.example.examination.dto.ResultDTO;
import com.example.examination.exception.ExamException;
import com.example.examination.exception.ResultException;
import com.example.examination.exception.StudentException;
import com.example.examination.request.AddResultReq;
import org.springframework.data.domain.Page;

public interface IResultService {
    ResultDTO save(AddResultReq req) throws ExamException, StudentException, ResultException;
    Page<ResultDTO> getResultByStudentId(Long id,int page, int size) throws StudentException;
    Page<ResultDTO> getResultByExam(Long id,int page, int size) throws ExamException;
}
