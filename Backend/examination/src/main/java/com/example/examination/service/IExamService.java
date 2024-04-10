package com.example.examination.service;

import com.example.examination.dto.ExamDTO;
import com.example.examination.exception.CourseException;
import com.example.examination.exception.ExamException;
import com.example.examination.request.AddExamReq;
import com.example.examination.request.UpdateExamReq;
import org.springframework.data.domain.Page;

public interface IExamService {
    ExamDTO addExam(AddExamReq req) throws  CourseException;
    Page<ExamDTO> getExams(int page, int size);
    ExamDTO updateExam(UpdateExamReq req) throws ExamException, CourseException;
    ExamDTO getExamById(Long id) throws ExamException;
}