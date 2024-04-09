package com.example.examination.service;

import com.example.examination.dto.StudentDTO;
import com.example.examination.exception.CourseException;
import com.example.examination.exception.UserException;
import com.example.examination.request.AddStudentReq;

public interface IStudentService {
    StudentDTO addStudent(AddStudentReq req) throws UserException, CourseException;
}
