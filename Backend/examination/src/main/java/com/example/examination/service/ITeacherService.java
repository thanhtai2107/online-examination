package com.example.examination.service;

import com.example.examination.dto.TeacherDTO;
import com.example.examination.exception.UserException;
import com.example.examination.request.AddTeacherReq;

public interface ITeacherService {
    TeacherDTO addTeacher(AddTeacherReq req) throws UserException;
}
