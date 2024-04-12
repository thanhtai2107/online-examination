package com.example.examination.service;

import com.example.examination.dto.ResultDTO;
import com.example.examination.exception.ExamException;
import com.example.examination.exception.StudentException;
import com.example.examination.request.AddResultReq;

public interface IResultService {
    ResultDTO save(AddResultReq req) throws ExamException, StudentException;
}
