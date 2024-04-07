package com.example.examination.controller;

import com.example.examination.dto.TeacherDTO;
import com.example.examination.exception.TeacherException;
import com.example.examination.exception.UserException;
import com.example.examination.request.AddTeacherReq;
import com.example.examination.request.UpdateTeacherReq;
import com.example.examination.service.impl.TeacherServiceImpl;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1")
public class TeacherController {
    private final TeacherServiceImpl teacherService;

    public TeacherController(TeacherServiceImpl teacherService) {
        this.teacherService = teacherService;
    }

    @PostMapping("/teacher/add")
    public ResponseEntity<TeacherDTO> addTeacher(@RequestBody @Valid AddTeacherReq req) throws UserException {
            return new ResponseEntity<>(teacherService.addTeacher(req), HttpStatus.CREATED);
    }

    @GetMapping("/teachers")
    public ResponseEntity<Page<TeacherDTO>> getTeachers(@RequestParam(defaultValue = "0") int page,
                                                        @RequestParam(defaultValue = "5") int size) {
        return ResponseEntity.ok(teacherService.getTeachers(page, size));
    }
    @GetMapping("/teacher")
    public ResponseEntity<TeacherDTO> getTeacher(@RequestParam long id) throws TeacherException {
        return ResponseEntity.ok(teacherService.getTeacherById(id));
    }
    @PutMapping("/teacher/update")
    public ResponseEntity<TeacherDTO> updateTeacher(@RequestBody @Valid UpdateTeacherReq req) throws TeacherException, UserException {
        return ResponseEntity.ok(teacherService.updateTeacher(req));
    }
    @DeleteMapping("/teacher")
    public ResponseEntity<?> deleteTeacher(@RequestParam Long id) throws UserException {
        return ResponseEntity.ok(teacherService.deleteTeacher(id));
    }
}
