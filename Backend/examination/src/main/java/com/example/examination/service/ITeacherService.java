package com.example.examination.service;

import com.example.examination.dto.TeacherDTO;
import com.example.examination.exception.UserException;
import com.example.examination.request.AddTeacherReq;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ITeacherService {
    TeacherDTO addTeacher(AddTeacherReq req) throws UserException;
    Page<TeacherDTO> getTeachers(int page, int size);
}
