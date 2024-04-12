package com.example.examination.controller;

import com.example.examination.dto.StudentDTO;
import com.example.examination.exception.CourseException;
import com.example.examination.exception.StudentException;
import com.example.examination.exception.UserException;
import com.example.examination.request.AddStudentReq;
import com.example.examination.request.UpdateStudentReq;
import com.example.examination.service.impl.StudentServiceImpl;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1")
public class StudentController {
    private final StudentServiceImpl studentService;

    public StudentController(StudentServiceImpl studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/student/add")
    public ResponseEntity<StudentDTO> addStudent(@RequestBody @Valid AddStudentReq req) throws CourseException, UserException {
        return new  ResponseEntity<>(studentService.addStudent(req), HttpStatus.CREATED);
    }
    @GetMapping("/students")
    public ResponseEntity<Page<StudentDTO>> getTeachers(@RequestParam(defaultValue = "0") int page,
                                                        @RequestParam(defaultValue = "5") int size) {
        return ResponseEntity.ok(studentService.getStudents(page, size));
    }
    @GetMapping("/student")
    public ResponseEntity<StudentDTO> getStudent(@RequestParam long id) throws StudentException, UserException {
        return ResponseEntity.ok(studentService.getStudentById(id));
    }
    @GetMapping("/student-user")
    public ResponseEntity<StudentDTO> getStudentByUserId(@RequestParam long id) throws StudentException, UserException {
        return ResponseEntity.ok(studentService.getStudentByUserId(id));
    }
    @PutMapping("/student/update")
    public ResponseEntity<StudentDTO> updateStudent(@RequestBody @Valid UpdateStudentReq req) throws StudentException, CourseException, UserException {
        return ResponseEntity.ok(studentService.updateStudent(req));
    }
    @DeleteMapping("/student")
    public ResponseEntity<String> deleteStudent(@RequestParam Long id) throws UserException {
        return ResponseEntity.ok(studentService.deleteStudent(id));
    }
}
