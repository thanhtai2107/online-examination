package com.example.examination.service;

import com.example.examination.dto.TeacherDTO;
import com.example.examination.exception.TeacherException;
import com.example.examination.exception.UserException;
import com.example.examination.request.AddTeacherReq;
import com.example.examination.request.UpdateTeacherReq;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ITeacherService {
    TeacherDTO addTeacher(AddTeacherReq req) throws UserException;
    Page<TeacherDTO> getTeachers(int page, int size);
    TeacherDTO updateTeacher(UpdateTeacherReq req) throws TeacherException, UserException;
    TeacherDTO getTeacherById(long id) throws TeacherException;
    String deleteTeacher(Long id) throws UserException;
    List<TeacherDTO> listTeacher();
}
