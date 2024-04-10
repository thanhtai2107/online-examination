package com.example.examination.service;

import com.example.examination.dto.ExamDTO;
import com.example.examination.exception.CourseException;
import com.example.examination.exception.ExamException;
import com.example.examination.request.AddExamReq;

public interface IExamService {
    ExamDTO addExam(AddExamReq req) throws  CourseException;
}
