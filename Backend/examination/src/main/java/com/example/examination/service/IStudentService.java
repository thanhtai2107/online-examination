package com.example.examination.service;

import com.example.examination.dto.StudentDTO;
import com.example.examination.exception.CourseException;
import com.example.examination.exception.StudentException;
import com.example.examination.exception.UserException;
import com.example.examination.request.AddStudentReq;
import com.example.examination.request.UpdateStudentReq;
import org.springframework.data.domain.Page;

public interface IStudentService {
    StudentDTO addStudent(AddStudentReq req) throws UserException, CourseException;
    Page<StudentDTO> getStudents(int page, int size);
    StudentDTO getStudentById(Long id) throws StudentException, UserException;
    StudentDTO updateStudent(UpdateStudentReq req) throws StudentException, UserException, CourseException;
    String deleteStudent(Long id) throws UserException;
}
