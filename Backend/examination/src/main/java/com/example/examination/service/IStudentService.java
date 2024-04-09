package com.example.examination.service;

import com.example.examination.dto.StudentDTO;
import com.example.examination.exception.CourseException;
import com.example.examination.exception.UserException;
import com.example.examination.request.AddStudentReq;
import org.springframework.data.domain.Page;

public interface IStudentService {
    StudentDTO addStudent(AddStudentReq req) throws UserException, CourseException;
    Page<StudentDTO> getStudents(int page, int size);
}
